import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@arco-design/web-react/icon";
import { Button, Input, Pagination } from "@arco-design/web-react";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const TasksArchivedProjects = (props) => {
  let data = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      id: faker.datatype.uuid(),
      date: dayjs("2022-08-01"),
      name: faker.company.catchPhrase(),
      group: {
        id: faker.datatype.uuid(),
        name: "A Group",
      },
      user: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
    });
  }

  return (
    <>
      <TasksHeader name="A Workspace" />
      <div className="px-5 pt-4">
        <Link to="/tasks" className="text-gray-400 hover:text-brand-500">
          <IconArrowLeft /> Back
        </Link>
      </div>
      <div className="px-5 pb-2 border-b border-gray-300 flex">
        <h2 className="p-0 flex-1">Archived Projects</h2>
        <div>
          <Input.Search allowClear placeholder="Enter keyword to search" />
        </div>
      </div>
      <div className="p-3 bg-gray-50">
        <div className="border border-gray-200 rounded divide-y divide-gray-200">
          {data.map((task) => (
            <div key={task.id} className="p-3 bg-white flex">
              <div className="flex-1 pr-3">
                <div>
                  <b>{task.name}</b> ({task.group.name})
                </div>
                <div>
                  {task.user.name}{" "}
                  <span className="text-gray-500">{task.date.fromNow()}</span>
                </div>
              </div>
              <div>
                <Button>Restore</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Pagination total={3} />
        </div>
      </div>
    </>
  );
};
export default TasksArchivedProjects;
