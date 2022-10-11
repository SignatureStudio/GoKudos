import { Select, Tag } from "@arco-design/web-react";
import { useState, useEffect, useRef } from "react";

const InputSelectStatus = (props) => {
  const [edit, setEdit] = useState(false);
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);

  // console.log((props.data instanceof Object));

  const selectedValue = props.data || "new";

  let color = "blue";
  if (selectedValue === "approved") {
    color = "green";
  } else if (selectedValue === "rejected") {
    color = "red";
  }

  return (
    <>
      {edit === false ? (
        <Tag
          color={color}
          bordered
          className="w-full text-center cursor-pointer capitalize"
          onClick={() => {
            setEdit(true);
          }}
        >
          {selectedValue}
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
          <Select.Option value="new">New</Select.Option>
          <Select.Option value="approved">Approve</Select.Option>
          <Select.Option value="rejected">Reject</Select.Option>
        </Select>
      )}
    </>
  );
};

export default InputSelectStatus;
