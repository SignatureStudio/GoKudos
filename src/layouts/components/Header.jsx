import {
  IconLeft,
  IconRight,
  IconClockCircle,
  IconNotification,
  IconSettings,
} from "@arco-design/web-react/icon";
import { Button, Avatar } from "@arco-design/web-react";
import { Link } from "react-router-dom";

const Header = (props) => {
  // const moduleWithSubnavPath = ["tasks"];
  // props.setSubnav(true)
  return (
    <header
      className={`flex items-center bg-white shadow-md w-full h-16 fixed top-0 left-0 z-30 transition-all ${
        props.aside ? "pl-72" : "pl-16"
      }`}
    >
      <div className="flex-1">
        <Button
          type="text"
          className="px-2"
          onClick={() => {
            props.setAside(!props.aside);
            if (!props.moduleWithSubnavPath.includes(props.currentModulePath)) {
              props.aside ? props.setSubnav(true) : props.setSubnav(false);
            }
          }}
        >
          <span className="text-gray-400">
            {props.aside ? <IconLeft /> : <IconRight />}
          </span>
        </Button>
      </div>
      <Button type="text" shape="round" className="px-2">
        <IconClockCircle className="text-gray-600 h-4 w-4" />
      </Button>
      <Button type="text" shape="round" className="px-2">
        <IconNotification className="text-gray-600 h-4 w-4" />
      </Button>
      <Button type="text" shape="round" className="px-2">
        <Link to="/settings/integrations/sql">
          <IconSettings className="text-gray-600 h-4 w-4" />
        </Link>
      </Button>
      <Button type="text" shape="round" className="p-0 mx-4">
        <Avatar size={30} className="bg-brand-600">
          U
        </Avatar>
      </Button>
    </header>
  );
};
export default Header;
