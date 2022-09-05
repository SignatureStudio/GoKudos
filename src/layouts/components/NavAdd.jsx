// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Avatar, Menu } from "@arco-design/web-react";
import {
  IconPlus,
} from "@arco-design/web-react/icon";

const NavAdd = (props) => {
  return (
    <div className="menu mx-1.5">
      <Avatar size={32} className="bg-brand-500">
        <IconPlus />
      </Avatar>
      {props.aside && !props.subnav && (
        <div className="menu-text">Add new</div>
      )}
    </div>
  );
};
export default NavAdd;
