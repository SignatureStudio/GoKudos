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
  function numberWithCommas(num) {
    num = Number(num);
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    return (
    <div>
      {edit === false ? (
        <div
          className="truncate cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setEdit(true);
          }}
        >
          {value ? (
            <div>
              {props.prefix}
              {props.number ? numberWithCommas(value) : value }
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
            prefix={props.prefix}
            suffix={props.suffix}
            defaultValue={value}
            onBlur={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
              setEdit(false);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                console.log("save", e.target.value);
                setValue(e.target.value);
                setEdit(false);
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default InputText;
