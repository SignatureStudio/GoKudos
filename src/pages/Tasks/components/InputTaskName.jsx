import { Input, Badge } from "@arco-design/web-react";
import { IconEdit } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";
import TaskEdit from "./TaskEdit";

const InputTaskName = (props) => {
  // console.log("children" in props.record);
  // let children = "";
  // if ("children" in props.record) {
  //   const len = props.record.children.length;
  //   if (len > 0) {
  //     children = <Badge count={len} className="ml-2" />;
  //   }
  // }
  const [modalTaskEdit, setModalTaskEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);
  return (
    <>
      <div className="flex items-center cursor-pointer">
        {edit === false ? (
          <>
            <div
              className="truncate flex-1"
              onClick={() => {
                setModalTaskEdit(true);
              }}
            >
              {props.data}
            </div>
            <IconEdit
              className="text-gray-400 hover:text-gray-900"
              onClick={() => {
                setEdit(true);
              }}
            />
          </>
        ) : (
          <div className="flex-1">
            <Input
              ref={refInput}
              allowClear
              placeholder="Add a task name"
              defaultValue={props.data}
              onBlur={(e) => {
                console.log(e.target.value);
                setEdit(false);
              }}
            />
          </div>
        )}
        {/* {children} */}
      </div>
      <TaskEdit visible={modalTaskEdit} setVisible={setModalTaskEdit} />
    </>
  );
};

export default InputTaskName;
