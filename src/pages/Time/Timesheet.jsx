import { InputNumber, Table } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import TimesheetNav from "./components/TimesheetNav";
const Page = () => {
  const [selected, setSelected] = useState(dayjs());
  const projects = [
    {
      id: 1,
      name: "A Project",
    },
    {
      id: 2,
      name: "B Project",
    },
  ];
  const tasks = [
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
      <h1 className="py-4">Timesheet</h1>
      <TimesheetNav selected={selected} setSelected={setSelected} />
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
