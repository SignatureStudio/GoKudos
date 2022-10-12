import { Dropdown, Input, Menu } from "@arco-design/web-react";
import { IconFolder, IconMoreVertical } from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

const SharedSubnav = (props) => {
  const taskData = [
    {
      id: faker.datatype.uuid(),
      name: faker.company.catchPhrase(),
    },
    {
      id: faker.datatype.uuid(),
      name: faker.company.catchPhrase(),
    },
    {
      id: faker.datatype.uuid(),
      name: faker.company.catchPhrase(),
    },
    {
      id: faker.datatype.uuid(),
      name: faker.company.catchPhrase(),
    },
  ];
  const menuTask = (
    <Menu>
      <Menu.Item key="1">Make a copy</Menu.Item>
      <hr />
      <Menu.Item key="2">Report abuse</Menu.Item>
      <hr />
      <Menu.Item key="3">Delete</Menu.Item>
    </Menu>
  );
  return (
    <aside className="subnav">
      <div className="p-2">
        <Input.Search
          placeholder="Enter keyword to search"
          className="border border-gray-300 my-2"
        />
      </div>
      <div className="font-heading text-xs mt-4 mb-2 px-2">Shared with me</div>
      <Menu selectedKeys="1" className="bg-gray-100">
        {taskData.map((task, index) => (
          <Menu.Item key={index} className="text-base" style={{ padding: 0 }}>
            <div className="flex items-center bg-gray-100 hover:bg-gray-200">
              <Link to="/tasks" key={task.id} className="flex-1 truncate pl-2">
                {task.name}
              </Link>
              <Dropdown droplist={menuTask} trigger="click">
                <div className="-mr-4 px-1">
                  <IconMoreVertical className="h-4 w-4" />
                </div>
              </Dropdown>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </aside>
  );
};
export default SharedSubnav;
