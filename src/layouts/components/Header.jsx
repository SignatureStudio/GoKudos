import {
  IconLeft,
  IconRight,
  IconClockCircle,
  IconNotification,
  IconSettings,
} from "@arco-design/web-react/icon";
import { Button, Avatar, Dropdown, Progress } from "@arco-design/web-react";
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
      <Dropdown
        droplist={
          <div className="bg-white shadow w-48 divide-y divide-gray-300">
            <div className="p-3 font-bold">
              Starter Plan
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div>Teams</div>
                <div className="text-xs text-gray-600">1 of 1 used</div>
              </div>
              <div>
                <Progress percent={100} showText={false} status="error" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div>Members</div>
                <div className="text-xs text-gray-600">1 of 3 used</div>
              </div>
              <div>
                <Progress percent={33.3333} showText={false} status="success" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div>Storage</div>
                <div className="text-xs text-gray-600">25 of 50GB used</div>
              </div>
              <div>
                <Progress percent={50} showText={false} status="success" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div>Invoices</div>
                <div className="text-xs text-gray-600">4 of 5 used</div>
              </div>
              <div>
                <Progress percent={80} showText={false} status="success" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div>Reports</div>
                <div className="text-xs text-gray-600">3 of 5 used</div>
              </div>
              <div>
                <Progress percent={60} showText={false} status="success" />
              </div>
            </div>
            <div className="p-3">
              <Button type="primary" className="w-full">Upgrade your plan</Button>
            </div>
          </div>
        }
        trigger="click"
      >
      <Button type="text" shape="round" className="px-2">
        <Progress size='mini' type='circle' percent={60} />
      </Button>
      </Dropdown>
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
