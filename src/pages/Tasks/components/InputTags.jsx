import { TreeSelect } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { useState, useRef, useEffect } from "react";

const InputTags = (props) => {
  const [edit, setEdit] = useState(false);
  const [trigger, setTrigger] = useState(
    props.data.length ? (
      props.data.join(", ")
    ) : (
      <div className="cursor-pointer hover:bg-gray-200 px-1">
        <IconPlus className="text-gray-600 hover:text-gray-900" />
      </div>
    )
  );
  const refInput = useRef(null);

  useEffect(() => {
    if (edit) {
      refInput.current.focus();
    }
  }, [edit]);
  return (
    <TreeSelect
      placeholder="Please select"
      defaultValue={props.data ? props.data.id : undefined}
      ref={refInput}
      allowClear
      onChange={(value) => {
        console.log(value);
        setEdit(false);
        setTrigger(
          value.length ? (
            <div className="break-normal">{value.join(", ")}</div>
          ) : (
            <div className="cursor-pointer hover:bg-gray-200">-</div>
          )
        );
      }}
      onBlur={(value) => {
        setEdit(false);
      }}
      treeCheckable
      triggerElement={<div>{trigger}</div>}
    >
      <TreeSelect.Node key="Industries" title="Industries">
        <TreeSelect.Node key="Manufacturing" title="Manufacturing" />
        <TreeSelect.Node key="Furniture" title="Furniture" />
      </TreeSelect.Node>
      <TreeSelect.Node key="Location" title="Location">
        <TreeSelect.Node key="East MY" title="East MY" />
        <TreeSelect.Node key="West MY" title="West MY" />
      </TreeSelect.Node>
      <TreeSelect.Node key="Job Type" title="Job Type">
        <TreeSelect.Node key="In-house" title="In-house" />
        <TreeSelect.Node key="Outsource" title="Outsource" />
      </TreeSelect.Node>
    </TreeSelect>
  );
};

export default InputTags;
