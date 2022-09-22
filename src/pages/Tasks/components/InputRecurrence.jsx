import { Cascader } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";
import { TASK } from "@/constants";

const InputRecurrence = (props) => {
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
        <Cascader
          placeholder="Please select"
          defaultValue={null}
          ref={refInput}
          onChange={(value, option) => {
            console.log(value, option);
            setEdit(false);
          }}
          onBlur={(value) => {
            setEdit(false);
          }}
          options={TASK.RECURRENCE}
          allowClear
        />
        //   {.map((recur) => (
        //     <Select.Option key={recur.id} value={recur.id}>
        //       {recur.name}
        //     </Select.Option>
        //   ))}
        // </Cascader>
      )}
    </>
  );
};

export default InputRecurrence;
