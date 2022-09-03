import {
  IconLeft,
  IconRight,
  IconClockCircle,
  IconNotification,
  IconSettings,
} from "@arco-design/web-react/icon";
import { Button, Avatar } from "@arco-design/web-react";

const Header = (props) => {
  return (
    <header className="flex items-center h-16 bg-white">
      <div className="flex-1" onClick={() => props.setAside(!props.aside)}>
        <Button type="text" className="px-2">
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
        <IconSettings className="text-gray-600 h-4 w-4" />
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
