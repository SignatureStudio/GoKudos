import { Avatar, InputNumber, Table } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import ProjectNav from "./components/ProjectNav";
const Page = () => {
  const [selected, setSelected] = useState(dayjs());
  const projects = [
    {
      id: 'p1',
      name: "A Group",
    },
    {
      id: 'p2',
      name: "B Group",
    },
  ];
  const tasks = [
    {
      id: 1,
      name: "A Task",
      children: [
        {
          id: '1-1',
          name: 'Barry',
          avatar: "/dummy/face1.jpg",
        },
        {
          id: '1-2',
          name: 'Marcus',
          avatar: "/dummy/face2.jpg",
        }
      ]
    },
    {
      id: 2,
      name: "B Task",
      children: [
        {
          id: '1-1',
          name: 'Barry',
          avatar: "/dummy/face1.jpg",
        },
        {
          id: '1-2',
          name: 'Marcus',
          avatar: "/dummy/face2.jpg",
        }
      ]
    },
    {
      id: 3,
      name: "C Task",
      children: [
        {
          id: '1-1',
          name: 'Barry',
          avatar: "/dummy/face1.jpg",
        },
        {
          id: '1-2',
          name: 'Marcus',
          avatar: "/dummy/face2.jpg",
        }
      ]
    },
    {
      id: 4,
      name: "D Task",
      children: [
        {
          id: '1-1',
          name: 'Barry',
          avatar: "/dummy/face1.jpg",
        },
        {
          id: '1-2',
          name: 'Marcus',
          avatar: "/dummy/face2.jpg",
        }
      ]
    },
  ];
  let columns = [
    {
      title: "Task",
      dataIndex: "name",
      fixed: "left",
      width: 200,
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
        )
      }
    },
  ];
  for (let i = 1; i <= selected.daysInMonth(); i++) {
    let d = new Date(selected.year(), selected.month(), i);
    let day = dayjs(d);
    columns.push({
      title: day.format("ddd D"),
      dataIndex: i,
      width: 100,
      render: (col, record, index) => {
        const [value, setValue] = useState(col || 0)
        return <InputNumber min={0} max={24} step={0.5} precision={0} defaultValue={value} value={value} className={value > 0 ? "[&>span>.arco-input-inner-wrapper]:bg-green-100 border border-green-500" : ""} onChange={(e) => {
          setValue(e);
        }} />;
      },
    });
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
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
