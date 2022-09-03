import { tasksData } from "./utils/sample_data";
import { utils } from "./utils/Kanban.utils";
import { displayTasksBy, displayTimeline } from "./utils/_utils";
import TasksKanbanNav from "./components/KanbanNav";
import { Tag, Avatar, Badge } from "@arco-design/web-react";
import { IconMessage, IconAttachment } from "@arco-design/web-react/icon";
import dayjs from "dayjs";

const TasksKanban = (props) => {
  const data = displayTasksBy.status(tasksData);
  return (
    <>
      <TasksKanbanNav />
      <div className="overflow-auto p-1.5 bg-gray-100">
        <div className="flex flex-nowrap">
          {data.map((board) => (
            <div className="flex-none p-1.5 w-72" key={board.name}>
              <div className="bg-gray-200 px-2 py-3 rounded">
                <h2 className="py-0 px-2">{board.name}</h2>
                {board.tasks.map((task) => (
                  <div
                    className="bg-white rounded shadow p-3 mt-3"
                    key={task.id}
                  >
                    <header className="flex">
                      <h3 className="flex-1">{task.name}</h3>
                      <Tag color={task.status.color} bordered>
                        {task.status.name}
                      </Tag>
                    </header>
                    <div className="text-gray-400">{task.group}</div>
                    <div className="flex items-center my-2">
                      <div className="flex-1">
                        <Avatar.Group size={24}>
                          {task.members.map((member) => (
                            <Avatar key={member.id}>
                              {member.avatar === "" ? (
                                member.name.charAt(0)
                              ) : (
                                <img src={member.avatar} alt={member.name} />
                              )}
                            </Avatar>
                          ))}
                        </Avatar.Group>
                      </div>
                      <div className="ml-1.5">
                        <Badge
                          count={task.comments.length}
                          dot
                        >
                          <IconMessage
                            className={`w-5 h-5 ${
                              task.comments.length === 0 && "text-gray-300"
                            }`}
                          />
                        </Badge>
                      </div>
                      <div className="ml-1.5">
                        <Badge
                          count={task.attachments.length}
                          dot
                          className="ml-2"
                        >
                          <IconAttachment
                            className={`w-5 h-5 ${
                              task.attachments.length === 0 && "text-gray-300"
                            }`}
                          />
                        </Badge>
                      </div>
                    </div>
                    <hr className="my-2" />
                    <div>
                    { displayTimeline(task.startDate, task.endDate) }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TasksKanban;
