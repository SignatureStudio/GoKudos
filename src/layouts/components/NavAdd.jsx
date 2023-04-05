// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Avatar, Menu } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import TaskAdd from "@/pages/Tasks/components/TaskAdd";
import { useState } from "react";

const NavAdd = (props) => {
  const [modalTaskAdd, setModalTaskAdd] = useState(false);
  return (
    <>
      <div
        className="menu mx-1.5"
        onClick={() => {
          setModalTaskAdd(true);
        }}
      >
        <Avatar size={32} className="bg-brand-500">
          <IconPlus />
        </Avatar>
        {props.aside && !props.subnav && (
          <div className="menu-text">Add new</div>
        )}
      </div>
      <TaskAdd visible={modalTaskAdd} setVisible={setModalTaskAdd} />
    </>
  );
};
export default NavAdd;
