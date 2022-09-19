import { Select, Menu, Badge } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";
import { TASK } from "@/constants";

const InputReminder = (props) => {
  const [edit, setEdit] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);
  return (
    <>
      {edit === false ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            setEdit(true);
          }}
        >
          {props.data ? (
            <div>{props.data}</div>
          ) : (
            <div className="cursor-pointer hover:bg-gray-200 px-1">
              <IconPlus className="text-gray-600 hover:text-gray-900" />
            </div>
          )}
        </div>
      ) : (
        <Select
          placeholder="Please select"
          defaultValue={props.data ? props.data.id : undefined}
          ref={refInput}
          onChange={(value) => {
            console.log(value);
            setEdit(false);
          }}
          onBlur={(value) => {
            setEdit(false);
          }}
        >
          {TASK.REMINDER.map((reminder) => (
            <Select.Option key={reminder.id} value={reminder.id}>
              {reminder.name}
            </Select.Option>
          ))}
        </Select>
      )}
    </>
  );
};

export default InputReminder;
