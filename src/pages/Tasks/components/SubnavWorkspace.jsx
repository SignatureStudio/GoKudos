// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Avatar, Button, Dropdown, Menu, Input } from "@arco-design/web-react";
import { IconDown, IconPlus } from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import WorkspaceAdd from "./WorkspaceAdd";

const workspaces = {
  selected: {
    id: 1,
    name: "Central Region",
    avatar: "",
  },
  list: [
    {
      id: 1,
      name: "Central Region",
      avatar: "",
    },
    {
      id: 2,
      name: "Northern Region",
      avatar: "",
    },
    {
      id: 3,
      name: "Southern Region",
      avatar: "",
    },
    {
      id: 4,
      name: "East Coast",
      avatar: "",
    },
    {
      id: 5,
      name: "Sarawak",
      avatar: "",
    },
    {
      id: 6,
      name: "Sabah & Labuan",
      avatar: "",
    },
  ],
};

const SubnavWorkspace = (props) => {
  const [modalWorkspace, setModalWorkspace] = useState(false);
  const droplistWorkspace = (
    <div className="bg-white">
      <div className="h-40 overflow-y-auto">
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
        </Menu>
      </div>
      <hr className="my-2" />
      <Menu className="w-72">
        <Menu.Item onClick={() => setModalWorkspace(true)}>
          <div>
            <IconPlus /> <span className="menu-text">Add area</span>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );

  return (
    <>
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
      <WorkspaceAdd visible={modalWorkspace} setVisible={setModalWorkspace} />
    </>
  );
};
export default SubnavWorkspace;
