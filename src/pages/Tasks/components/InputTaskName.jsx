import { Input } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";

const InputTaskName = (props) => {
  let children = "";
  if ("children" in props.record) {
    const len = props.record.children.length;
    if (len > 0) {
      children = <Badge count={len} />;
    }
  }
  const [edit, setEdit] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);
  return (
    <div className="flex">
      {edit === false ? (
        <div
          className="truncate"
          onClick={() => {
            setEdit(true);
          }}
        >
          {props.data}
        </div>
      ) : (
        <div>
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
      {children}
    </div>
  );
};

export default InputTaskName;
