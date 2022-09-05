import { tasksData } from "./utils/sample_data";
// import { utils } from "./utils/Kanban.utils";
import { displayTasksBy } from "./utils/_utils";
import TasksKanbanNav from "./components/KanbanNav";
// import { Tag, Avatar, Badge } from "@arco-design/web-react";
// import dayjs from "dayjs";
// import { useState } from "react";
// import { debounce } from "lodash";
import TasksHeader from "./components/Header";
import KanbanTask from "./components/KanbanTask";
import { IconPlus } from "@arco-design/web-react/icon";
import { Button } from "@arco-design/web-react";

const TasksKanban = (props) => {
  const data = displayTasksBy.status(tasksData);
  // const [mainHeight, setMainHeight] = useState(window.innerHeight - 240);

  // window.addEventListener(
  //   "resize",
  //   debounce(() => {
  //     setMainHeight(window.innerHeight - 290)
  //   }, 200)
  // );

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksKanbanNav />
      <div className="overflow-auto p-1.5 bg-gray-50">
        <div className="flex flex-nowrap">
          {data.map((board) => (
            <div className="flex-none p-1.5 w-72" key={board.name}>
              <div className="bg-gray-100 px-2 py-3 rounded border border-gray-300">
                <div className="py-0 px-2">{board.name}</div>
                {board.tasks.map((task) => (
                  <KanbanTask task={task} key={task.id} />
                ))}
                <Button size="mini" type="text" icon={<IconPlus />} className="mt-2">Add Task</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TasksKanban;
