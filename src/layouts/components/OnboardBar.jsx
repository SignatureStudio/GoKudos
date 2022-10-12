import {
  IconLeft,
  IconRight,
  IconClockCircle,
  IconNotification,
  IconSettings,
} from "@arco-design/web-react/icon";
import { Button, Avatar } from "@arco-design/web-react";
import { useEffect } from "react";

const OnboardBar = (props) => {
  return (
    <div className="flex p-3 bg-brand-600 fixed bottom-0 left-0 w-full z-50">
      <div className="flex items-center flex-1 font-bold font-base text-white font-heading">
        <div className="text-brand-100">Easily manage your</div>
        <div className="rotatetext">
          <div className="inner">
            <div className="word">projects</div>
            <div className="word">tasks</div>
            <div className="word">customers</div>
            <div className="word">teams</div>
          </div>
        </div>
      </div>
      <div>
        <Button type="primary" className="font-bold">Start</Button>
      </div>
    </div>
  );
};
export default OnboardBar;
