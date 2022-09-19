import { Dropdown, Menu, Badge } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";

const InputPriority = (props) => {
  const priorityColor = {
    High: "red",
    Medium: "gold",
    Low: "lime",
  };
  const priorityList = (
    <Menu
      onClickMenuItem={(e) => {
        console.log(e);
      }}
    >
      <Menu.Item key="Low">
        <Badge color={priorityColor["Low"]} text="Low" />
      </Menu.Item>
      <Menu.Item key="Medium">
        <Badge color={priorityColor["Medium"]} text="Medium" />
      </Menu.Item>
      <Menu.Item key="High">
        <Badge color={priorityColor["High"]} text="High" />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown droplist={priorityList} trigger="click">
      <div className="cursor-pointer">
        {props.data ? (
          <Badge color={priorityColor[props.data]} text={props.data} />
        ) : (
          <div className="cursor-pointer hover:bg-gray-200 px-1">
            <IconPlus className="text-gray-600 hover:text-gray-900" />
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default InputPriority;
