// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Avatar, Button, Dropdown, Menu } from "@arco-design/web-react";
import { IconDown, IconPlus } from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";

const workspaces = {
  selected: {
    id: 1,
    name: "A Workspace",
    avatar: "",
  },
  list: [
    {
      id: 1,
      name: "B Workspace",
      avatar: "",
    },
    {
      id: 2,
      name: "C Workspace",
      avatar: "",
    },
  ],
};

const SubnavWorkspace = (props) => {
  const droplistWorkspace = (
    <Menu className="w-72">
      {workspaces.list.map((workspace) => {
        return (
          <Menu.Item key={workspace.id} className="flex items-center h-12">
            <Avatar shape="square" size={32}>
              {workspace.avatar === "" ? (
                workspace.name.charAt(0)
              ) : (
                <img src={workspace.avatar} alt={workspace.name} />
              )}
            </Avatar>
            <div className="menu-text">{workspace.name}</div>
          </Menu.Item>
        );
      })}
      <hr className="my-2" />
      <Menu.Item>
        <IconPlus /> <span className="menu-text">Add workspace</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="p-2">
      <Dropdown droplist={droplistWorkspace} trigger="click">
        <div className="menu border">
          <Avatar shape="square" size={32}>
            {workspaces.selected.avatar === "" ? (
              workspaces.selected.name.charAt(0)
            ) : (
              <img
                src={workspaces.selected.avatar}
                alt={workspaces.selected.name}
              />
            )}
          </Avatar>
          <div className="menu-text">{workspaces.selected.name}</div>
          <IconDown />
        </div>
      </Dropdown>
    </div>
  );
};
export default SubnavWorkspace;
