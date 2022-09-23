import { Tag, Avatar, Badge } from "@arco-design/web-react";
import { IconMessage, IconAttachment } from "@arco-design/web-react/icon";
import { displayTimeline } from "../utils/_utils";

const KanbanTask = (props) => {
  const task = props.task;
  return (
    <div className="bg-white rounded shadow p-3 mt-3" key={task.id}>
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
      <hr className="my-2" />
      <div>{displayTimeline(task.startDate, task.endDate, task.status)}</div>
    </div>
  );
};
export default KanbanTask;
