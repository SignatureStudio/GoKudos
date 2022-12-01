import { Tag, Avatar, Badge } from "@arco-design/web-react";
import { IconMessage, IconAttachment } from "@arco-design/web-react/icon";
import { displayTimeline } from "../utils/_utils";
import { Draggable } from "react-beautiful-dnd";
import TaskEdit from "./TaskEdit";
import { useState } from "react";

const KanbanTask = (props) => {
  const [modalTaskEdit, setModalTaskEdit] = useState(false);
  const task = props.task;

  console.log(task);
  return (
    <>
      <Draggable draggableId={task.id} index={props.index}>
        {(provided) => (
          <div
            className="bg-white rounded shadow mt-3 mb-4"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={() => setModalTaskEdit(true)}
          >
            <div className="p-3">
              <header className="flex">
                <h3 className="flex-1">{task.name}</h3>
                <Tag color={task.status.color} bordered>
                  {task.status.name}
                </Tag>
              </header>
              <div className="text-gray-400">{task.group.name}</div>
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
                  <Badge count={task.comments.length} dot>
                    <IconMessage
                      className={`w-5 h-5 ${
                        task.comments.length === 0 && "text-gray-300"
                      }`}
                    />
                  </Badge>
                </div>
                <div className="ml-1.5">
                  <Badge count={task.attachments.length} dot className="ml-2">
                    <IconAttachment
                      className={`w-5 h-5 ${
                        task.attachments.length === 0 && "text-gray-300"
                      }`}
                    />
                  </Badge>
                </div>
              </div>
              {task.value > 0 && (
                <div className="grid grid-cols-2 rounded">
                  <div className="py-0.5 px-2 bg-gray-50">
                    <div className="text-sm">RM{task.value}</div>
                    <div className="text-xs text-gray-500">Budget</div>
                  </div>
                  <div className={`py-0.5 px-2 border-l ${(task.value > task.actualValue) ? "bg-green-50 text-green-600 border-green-500" : "bg-red-50 text-red-600 border-red-600"}`}>
                    <div className="text-sm">RM{task.actualValue}</div>
                    <div className="text-xs text-gray-500">Actual</div>
                  </div>
                </div>
              )}
            </div>
            <hr />
            <div className="pl-4 -mx-2">
              {displayTimeline(task.startDate, task.endDate, task.status)}
            </div>
          </div>
        )}
      </Draggable>
      <TaskEdit visible={modalTaskEdit} setVisible={setModalTaskEdit} />
    </>
  );
};
export default KanbanTask;
