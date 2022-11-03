// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Menu } from "@arco-design/web-react";
import {
  IconApps,
  IconClockCircle,
  IconHome,
  IconNav,
  IconSort,
  IconSubscribed,
  IconUser,
} from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

const NavSettings = (props) => {
  return (
    <Menu selectedKeys={props.current}>
      <Link to="/">
        <Menu.Item key="home" className="text-base">
          <IconHome className="w-4 h-4 mx-1" /> Home
        </Menu.Item>
      </Link>
      <Link to="/tasks">
        <Menu.Item key="tasks" className="text-base">
          <IconNav className="w-4 h-4 mx-1" /> My Profile
        </Menu.Item>
      </Link>
      <Link to="/shared">
        <Menu.Item key="shared" className="text-base">
          <IconSubscribed className="w-4 h-4 mx-1" /> Payment
        </Menu.Item>
      </Link>
      <Link to="/contacts">
        <Menu.Item key="contacts" className="text-base">
          <IconUser className="w-4 h-4 mx-1" /> Company
        </Menu.Item>
      </Link>
      <Link to="/attendance">
        <Menu.Item key="attendance" className="text-base">
          <IconClockCircle className="w-4 h-4 mx-1" /> Time Attendance
        </Menu.Item>
      </Link>
      <Menu.SubMenu
        title={
          <>
            <IconApps className="ml-1" /> Integration
          </>
        }
        className="text-base"
      >
        <Link to="/settings/integrations/sql">
          <Menu.Item key="sql" className="text-base">
            SQL Accounting
          </Menu.Item>
        </Link>
        <Link to="/reports">
          <Menu.Item key="reports" className="text-base">
            Requests
          </Menu.Item>
        </Link>
      </Menu.SubMenu>
    </Menu>
  );
};
export default NavSettings;
