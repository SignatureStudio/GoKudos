import {
  Button,
  Dropdown,
  Input,
  Menu,
  Pagination,
  Radio,
  Tabs,
} from "@arco-design/web-react";
import { IconMoreVertical } from "@arco-design/web-react/icon";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TasksSubnav = (props) => {
  const pathname = useLocation().pathname.split("/");
  let currentPath = pathname[2] || "timeline";
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <aside className="subnav py-1">
      <Menu selectedKeys={currentPath} className="bg-gray-100 text-base">
        <Link to="/time/timesheet">
          <Menu.Item key="timesheet" className="!p-0">
            <div className=" bg-gray-100 hover:bg-gray-200 pl-2">Timesheet</div>
          </Menu.Item>
        </Link>
        <Link to="/time/attendance">
          <Menu.Item key="attendance" className="!p-0">
            <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
              Attendance
            </div>
          </Menu.Item>
        </Link>
      </Menu>
      <Tabs activeTab={activeTab} onChange={setActiveTab} className="mt-5">
        <Tabs.TabPane key="projects" title="Projects">
          <div className="px-3 mb-3">
            <Input.Search className="border border-gray-400" />
          </div>
          <Menu selectedKeys={currentPath} className="bg-gray-100 text-base">
            <Link to="/time/project">
              <Menu.Item key="project" className="!p-0">
                <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
                  TCH Sdn Bhd
                </div>
              </Menu.Item>
            </Link>
            <Link to="/time/project">
              <Menu.Item key="project1" className="!p-0">
                <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
                  Nature Freight
                </div>
              </Menu.Item>
            </Link>
          </Menu>
          <Pagination total={30} size="mini" className="mt-5" />
        </Tabs.TabPane>
        <Tabs.TabPane key="members" title="Members">
          <div className="px-3 mb-3">
            <Input.Search className="border border-gray-400" />
          </div>
          <Menu selectedKeys={currentPath} className="bg-gray-100 text-base">
            <Link to="/time/member">
              <Menu.Item key="member" className="!p-0">
                <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
                  Barry
                </div>
              </Menu.Item>
            </Link>
            <Link to="/time/member">
              <Menu.Item key="member1" className="!p-0">
                <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
                  Marcus
                </div>
              </Menu.Item>
            </Link>
          </Menu>
          <Pagination total={30} size="mini" className="mt-5" />
        </Tabs.TabPane>
      </Tabs>
    </aside>
  );
};
export default TasksSubnav;
