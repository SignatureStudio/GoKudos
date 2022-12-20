import {
  Avatar,
  Button,
  Checkbox,
  Input,
  InputNumber,
  Table,
} from "@arco-design/web-react";
import { IconCheck, IconDelete } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { useState } from "react";
import ProjectNav from "./components/ProjectNav";
import TaskDelete from "./components/TaskDelete";
const Page = () => {
  const [selected, setSelected] = useState(dayjs());
  const [view, setView] = useState("group");
  const [billable, setBillable] = useState(true);
  const [approve, setApprove] = useState(false);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const projects = [
    {
      key: "p1",
      name: "A Group",
    },
    {
      key: "p2",
      name: "B Group",
    },
  ];
  const members = [
    {
      key: "1-1",
      name: "Barry",
      avatar: "/dummy/face1.jpg",
    },
    {
      key: "1-2",
      name: "Marcus",
      avatar: "/dummy/face2.jpg",
    },
  ];
  const totaltasks = [
    {
      key: 1,
      name: "Total",
    }
  ]

  const tasks = [
    {
      key: 1,
      name: "A Task",
      children: [
        {
          key: "1-1",
          name: "Barry",
          avatar: "/dummy/face1.jpg",
        },
        {
          key: "1-2",
          name: "Marcus",
          avatar: "/dummy/face2.jpg",
        },
      ],
    },
    {
      key: 2,
      name: "B Task",
      children: [
        {
          key: "2-1",
          name: "Barry",
          avatar: "/dummy/face1.jpg",
        },
        {
          key: "2-2",
          name: "Marcus",
          avatar: "/dummy/face2.jpg",
        },
      ],
    },
    {
      key: 3,
      name: "C Task",
      children: [
        {
          key: "3-1",
          name: "Barry",
          avatar: "/dummy/face1.jpg",
        },
        {
          key: "3-2",
          name: "Marcus",
          avatar: "/dummy/face2.jpg",
        },
      ],
    },
    {
      key: 4,
      name: "D Task",
      children: [
        {
          key: "4-1",
          name: "Barry",
          avatar: "/dummy/face1.jpg",
        },
        {
          key: "4-2",
          name: "Marcus",
          avatar: "/dummy/face2.jpg",
        },
      ],
    },
  ];
  const membertasks = [
    {
      key: 1,
      name: "A Task",
    },
    {
      key: 2,
      name: "B Task",
    },
    {
      key: 3,
      name: "C Task",
    },
    {
      key: 4,
      name: "D Task",
    },
  ];
  let columns = [
    {
      title: "Task",
      dataIndex: "name",
      fixed: "left",
      width: 150,
      render: (col, record, index) => {
        return (
          <div className="truncate">
            {record.avatar && (
              <Avatar size={24} className="mr-2">
                {record.avatar === "" ? (
                  record.name.charAt(0)
                ) : (
                  <img src={record.avatar} alt={record.name} />
                )}
              </Avatar>
            )}
            {col}
          </div>
        );
      },
    },
    {
      title: "Total hours",
      dataIndex: "total",
      width: 100,
      render: (col, record, index) => {
        const [value, setValue] = useState(col || 0);
        return (
          <InputNumber
            readOnly
            min={0}
            max={24}
            step={0.5}
            precision={0}
            defaultValue={value}
            value={value}
            className={
              value > 0
                ? "[&>span>.arco-input-inner-wrapper]:bg-green-100 border border-green-500"
                : ""
            }
            onChange={(e) => {
              setValue(e);
            }}
          />
        );
      },
    },
    {
      title: "Rate (RM)",
      dataIndex: "rate",
      width: 100,
      render: (col, record, index) => {
        const [value, setValue] = useState(col || 0);
        return (
          <Input
            min={0}
            max={24}
            step={0.5}
            precision={0}
            defaultValue={value}
            value={value}
            className={
              value > 0
                ? "[&>span>.arco-input-inner-wrapper]:bg-green-100 border border-green-500"
                : ""
            }
            onChange={(e) => {
              setValue(e);
            }}
          />
        );
      },
    },
    {
      title: "Total (RM)",
      dataIndex: "total",
      width: 100,
      render: (col, record, index) => {
        const [value, setValue] = useState(col || 0);
        return (
          <Input
            readOnly
            min={0}
            max={24}
            step={0.5}
            precision={0}
            defaultValue={value}
            value={value}
            className={
              value > 0
                ? "[&>span>.arco-input-inner-wrapper]:bg-green-100 border border-green-500"
                : ""
            }
            onChange={(e) => {
              setValue(e);
            }}
          />
        );
      },
    },
  ];
  let totalcolumns = columns;
  columns.push([
    {
      title: "Action",
      dataIndex: "action",
      width: 130,
      render: (col, record, index) => {
        return (
          <div>
            <Button
              size="small"
              shape="circle"
              className={billable ? "!bg-brand-500 !text-white" : ""}
              title="Billable"
              onClick={() => {
                setBillable(!billable);
              }}
            >
              $
            </Button>
            <Button
              size="small"
              shape="circle"
              className={approve ? "!bg-green-500 !text-white ml-1" : " ml-1"}
              icon={<IconCheck />}
              onClick={() => {
                setApprove(!approve);
              }}
            />
            <Button
              type="text"
              size="small"
              shape="circle"
              className=" ml-1"
              icon={<IconDelete />}
              onClick={() => {
                setModalTaskAdd(true);
              }}
            />
          </div>
        );
      },
    },
  ]);
  let summary = [];
  for (let i = 1; i <= selected.daysInMonth(); i++) {
    let d = new Date(selected.year(), selected.month(), i);
    let day = dayjs(d);
    let sum = {
      title: day.format("ddd D"),
      dataIndex: i,
      width: 100,
      render: (col, record, index) => {
        const [value, setValue] = useState(col || 0);
        return (
          <InputNumber
            min={0}
            max={24}
            step={0.5}
            precision={0}
            defaultValue={value}
            value={value}
            className={
              value > 0
                ? "[&>span>.arco-input-inner-wrapper]:bg-green-100 border border-green-500"
                : ""
            }
            onChange={(e) => {
              setValue(e);
            }}
          />
        );
      },
    };
    columns.push(sum);
    totalcolumns.push(sum);
    summary.push(
      <Table.Summary.Cell>
        <InputNumber readOnly step={0.5} precision={0} value={0} />
      </Table.Summary.Cell>
    );
  }

  return (
    <>
      <h1 className="py-4">TCH Sdn Bhd</h1>
      <ProjectNav
        selected={selected}
        setSelected={setSelected}
        view={view}
        setView={setView}
      />
      <div className="overflow-auto p-3 bg-gray-50">
        {view === "group" &&
          projects.map((project) => (
            <div key={project.key}>
              <h2 className="px-3">{project.name}</h2>
              <Table
                columns={columns}
                data={tasks}
                pagination={false}
                scroll={{
                  x: true,
                }}
                summary={(currentData) => (
                  <Table.Summary>
                    <Table.Summary.Row>
                      <Table.Summary.Cell />
                      <Table.Summary.Cell>
                        <InputNumber
                          readOnly
                          step={0.5}
                          precision={0}
                          value={0}
                        />
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Input readOnly step={0.5} precision={0} value={0} />
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <Input readOnly step={0.5} precision={0} value={0} />
                      </Table.Summary.Cell>
                      <Table.Summary.Cell />
                      {summary}
                    </Table.Summary.Row>
                  </Table.Summary>
                )}
              />
            </div>
          ))}
        {view === "member" &&
          members.map((member) => (
            <div key={member.key}>
              <h2 className="px-3">
                <Avatar size={24} className="mr-2">
                  {member.avatar === "" ? (
                    member.name.charAt(0)
                  ) : (
                    <img src={member.avatar} alt={member.name} />
                  )}
                </Avatar>
                {member.name}
              </h2>
              <Table
                columns={columns}
                data={membertasks}
                pagination={false}
                scroll={{
                  x: true,
                }}
                summary={(currentData) => (
                  <Table.Summary>
                    <Table.Summary.Row>
                      <Table.Summary.Cell />
                      {summary}
                      <Table.Summary.Cell>
                        <InputNumber
                          readOnly
                          step={0.5}
                          precision={0}
                          value={0}
                        />
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                )}
              />
            </div>
          ))}
      </div>
      <div className="overflow-auto p-3 bg-white border-t-8 border-gray-200">
        <h2 className="px-3 pt-0">Total</h2>
        <Table
          columns={totalcolumns}
          data={totaltasks}
          pagination={false}
          scroll={{
            x: true,
          }}
        />
      </div>
      <TaskDelete visible={modalTaskDelete} setVisible={setModalTaskDelete} />
    </>
  );
};

export default Page;
