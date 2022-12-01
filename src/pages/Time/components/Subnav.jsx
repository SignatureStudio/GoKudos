import { Button, Dropdown, Menu } from "@arco-design/web-react";
import { IconMoreVertical } from "@arco-design/web-react/icon";
import { Link, useLocation } from "react-router-dom";

const TasksSubnav = (props) => {
  const pathname = useLocation().pathname.split("/");
  let currentPath = pathname[2] || "timeline";

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
        <hr className="mt-5" />
        <div className="text-sm font-bold py-3">Projects</div>
        <Link to="/time/project">
          <Menu.Item key="project" className="!p-0">
            <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
              TCH Sdn Bhd
            </div>
          </Menu.Item>
        </Link>
        <Link to="/time/project">
          <Menu.Item key="project" className="!p-0">
            <div className=" bg-gray-100 hover:bg-gray-200 pl-2">
              Nature Freight
            </div>
          </Menu.Item>
        </Link>
      </Menu>
    </aside>
  );
};
export default TasksSubnav;
