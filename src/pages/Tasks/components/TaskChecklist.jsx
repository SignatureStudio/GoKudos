import { Table, Button, Checkbox, Input } from "@arco-design/web-react";
import { Link, useLocation } from "react-router-dom";
import {
  IconDelete,
  IconCaretDown,
  IconCaretRight,
} from "@arco-design/web-react/icon";
import { useEffect, useRef, useState } from "react";

const TaskChecklist = (props) => {
  const [showContent, setShowContent] = useState(true);
  const columns = [
    {
      title: "",
      dataIndex: "completed",
      width: 20,
      render: (col, record, index) => {
        return (
          <Checkbox
            checked={col}
            onChange={(e) => {
              console.log("save", e, record.key);
            }}
          />
        );
      },
    },
    {
      title: "",
      dataIndex: "name",
      render: (col, record, index) => {
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
                className="truncate"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col}
              </div>
            ) : (
              <div>
                <Input
                  ref={refInput}
                  allowClear
                  placeholder="Add a task name"
                  defaultValue={col}
                  onBlur={(e) => {
                    console.log("save", e.target.value, record.key);
                    setEdit(false);
                  }}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      console.log("save", e.target.value, record.key);
                      setEdit(false);
                    }
                  }}
                />
              </div>
            )}
          </>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      width: 20,
      render: (col, record, index) => {
        return (
          <Button
            size="mini"
            type="text"
            iconOnly
            icon={
              <IconDelete
                className="text-gray-600 hover:text-red-500"
                onClick={() => {
                  console.log("Delete", record.key);
                }}
              />
            }
          />
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      completed: false,
      name: "Checklist A",
    },
    {
      key: 2,
      completed: false,
      name: "Checklist B",
    },
    {
      key: 3,
      completed: true,
      name: "Checklist C",
    },
  ];
  return (
    <div className="m-2 p-2">
      <div
        className="font-bold cursor-pointer"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {showContent ? <IconCaretDown /> : <IconCaretRight />}
        <span className="ml-1">Checklist</span>
      </div>
      {showContent && (
        <div className="bg-gray-100 rounded p-0.5 mt-2">
          {data.length > 0 && (
            <Table
              size="small"
              border={false}
              columns={columns}
              data={data}
              showHeader={false}
              pagination={false}
              noDataElement={<div>No checklist</div>}
            />
          )}
          <Input
            allowClear
            placeholder="Add a checklist"
            onBlur={(e) => {
              console.log("save", e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                console.log("save", e.target.value);
              }
            }}
            className="my-0.5 bg-gray-100 hover:bg-white"
          />
        </div>
      )}
    </div>
  );
};

export default TaskChecklist;
