import { Button } from "@arco-design/web-react";
import { IconMore } from "@arco-design/web-react/icon";
import TasksTab from "./Tab";

const TasksHeader = (props) => {
  return (
    <>
      <div className="flex items-center h-14 pt-4">
        <h1>{props.name}</h1>
        <Button type="text" shape="round" className="px-2">
          <IconMore className="text-gray-600 h-4 w-4" />
        </Button>
      </div>
      <TasksTab />
    </>
  );
}

export default TasksHeader;
