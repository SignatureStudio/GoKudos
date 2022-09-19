import { Input } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";

const InputText = (props) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(props.data);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);
  return (
    <div>
      {edit === false ? (
        <div
          className="truncate cursor-pointer"
          onClick={() => {
            setEdit(true);
          }}
        >
          {value ? (
            <div>
              {props.prefix}
              {value}
              {props.suffix}
            </div>
          ) : (
            <div className="cursor-pointer hover:bg-gray-200 px-1">
              <IconPlus className="text-gray-600 hover:text-gray-900" />
            </div>
          )}
        </div>
      ) : (
        <div>
          <Input
            ref={refInput}
            allowClear
            placeholder={props.placeholder}
            defaultValue={value}
            onBlur={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
              setEdit(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default InputText;
