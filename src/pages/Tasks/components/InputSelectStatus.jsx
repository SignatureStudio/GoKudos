import { Select, Tag } from "@arco-design/web-react";
import { useState, useEffect, useRef } from "react";
import { TASK } from "@/constants";

const InputSelectStatus = (props) => {
  const [edit, setEdit] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);

  // console.log((props.data instanceof Object));

  const selectedValue =
    props.data instanceof Object ? props.data : TASK.STATUS[0];

  return (
    <>
      {edit === false ? (
        <Tag
          color={selectedValue.color}
          bordered
          className="w-full text-center cursor-pointer"
          onClick={() => {
            setEdit(true);
          }}
        >
          {selectedValue.name}
        </Tag>
      ) : (
        <Select
          placeholder="Please select"
          defaultValue={selectedValue.id}
          ref={refInput}
          onChange={(value) => {
            console.log(value);
            setEdit(false);
          }}
          onBlur={(value) => {
            setEdit(false);
          }}
        >
          {TASK.STATUS.map((status) => (
            <Select.Option key={status.id} value={status.id}>
              {status.name}
            </Select.Option>
          ))}
        </Select>
      )}
    </>
  );
};

export default InputSelectStatus;
