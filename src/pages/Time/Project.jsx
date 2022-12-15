import { Avatar, InputNumber, Table } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import ProjectNav from "./components/ProjectNav";
const Page = () => {
  const [selected, setSelected] = useState(dayjs());
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
      title: "Total",
      dataIndex: "total",
      fixed: "left",
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
  ];
  let summary = [];
  for (let i = 1; i <= selected.daysInMonth(); i++) {
    let d = new Date(selected.year(), selected.month(), i);
    let day = dayjs(d);
    columns.push({
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
    });
    summary.push(
      <Table.Summary.Cell>
        <InputNumber readOnly step={0.5} precision={0} value={0} />
      </Table.Summary.Cell>
    );
  }

  return (
    <>
      <h1 className="py-4">TCH Sdn Bhd</h1>
      <ProjectNav selected={selected} setSelected={setSelected} />
      <div className="overflow-auto p-3 bg-gray-50">
        {projects.map((project) => (
          <div key={project.id}>
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
    </>
  );
};

export default Page;
