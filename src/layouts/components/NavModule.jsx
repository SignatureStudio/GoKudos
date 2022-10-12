// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Menu } from "@arco-design/web-react";
import { IconClockCircle, IconHome, IconNav, IconSort, IconSubscribed, IconUser } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

const NavModule = (props) => {
  return (
    <Menu selectedKeys={props.current}>
      <Link to="/">
        <Menu.Item key="home" className="text-base">
          <IconHome className="w-4 h-4 mx-1" /> Home
        </Menu.Item>
      </Link>
      <Link to="/tasks">
        <Menu.Item key="tasks" className="text-base">
          <IconNav className="w-4 h-4 mx-1" /> Tasks
        </Menu.Item>
      </Link>
      <Link to="/shared">
        <Menu.Item key="shared" className="text-base">
          <IconSubscribed className="w-4 h-4 mx-1" /> Shared with me
        </Menu.Item>
      </Link>
      <Link to="/contacts">
        <Menu.Item key="contacts" className="text-base">
          <IconUser className="w-4 h-4 mx-1" /> Contacts
        </Menu.Item>
      </Link>
      <Link to="/attendance">
        <Menu.Item key="attendance" className="text-base">
          <IconClockCircle className="w-4 h-4 mx-1" /> Attendance
        </Menu.Item>
      </Link>
      <Link to="/reports">
        <Menu.Item key="reports" className="text-base">
          <IconSort className="w-4 h-4 mx-1" /> Reports
        </Menu.Item>
      </Link>
    </Menu>
  );
};
export default NavModule;
