import {
  Button,
  Dropdown,
  InputNumber,
  Menu,
  Table,
} from "@arco-design/web-react";
import { IconDelete, IconPlus } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { useState } from "react";
import TimesheetNav from "./components/TimesheetNav";
import TaskAdd from "./components/TaskAdd";
import TaskDelete from "./components/TaskDelete";

const Page = () => {
  const [selected, setSelected] = useState(dayjs());
  const [modalTaskAdd, setModalTaskAdd] = useState(false);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const [billable, setBillable] = useState(true);
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
      group: "A Group",
    },
    {
      key: 2,
      name: "B Task",
      group: "A Group",
    },
    {
      key: 3,
      name: "C Task",
      group: "B Group",
    },
    {
      key: 4,
      name: "D Task",
      group: "B Group",
    },
  ];
  const totaltasks = [
    {
      key: 11,
      name: "Total",
    },
  ];
  const customtasks = [];
  let columns = [
    {
      title: "Task",
      dataIndex: "name",
      fixed: "left",
      width: 200,
    },
    {
      title: "Group",
      dataIndex: "group",
      width: 150,
    },
    {
      title: "Total",
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
  ];
  let totalcolumns = [
    {
      title: "Task",
      dataIndex: "name",
      fixed: "left",
      width: 200,
    },
    {
      title: "Total",
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
  ];
  columns.push({
    title: "",
    dataIndex: "action",
    width: 50,
    render: (col, record, index) => {
      return (
        <Button
          type="text"
          size="small"
          shape="circle"
          icon={<IconDelete />}
          iconOnly
        />
      );
    },
  });
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
                    <Table.Summary.Cell />
                    <Table.Summary.Cell>
                      <InputNumber
                        readOnly
                        step={0.5}
                        precision={0}
                        value={0}
                      />
                    </Table.Summary.Cell>
                    <Table.Summary.Cell />
                    {summary}
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            />
            <Button
              size="mini"
              type="text"
              icon={<IconPlus />}
              className="mt-2"
              onClick={() => {
                setModalTaskAdd(true);
              }}
            >
              Add Task
            </Button>
          </div>
        ))}
        <div>
          <h2 className="px-3">Other activities</h2>
          <Table
            columns={totalcolumns}
            data={customtasks}
            pagination={false}
            scroll={{
              x: true,
            }}
            noDataElement={<div>No other activities yet</div>}
            summary={(currentData) => (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell />
                  <Table.Summary.Cell>
                    <InputNumber readOnly step={0.5} precision={0} value={0} />
                  </Table.Summary.Cell>
                  {summary}
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
          <Button
            size="mini"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => {
              setModalTaskAdd(true);
            }}
          >
            Add Task
          </Button>
        </div>
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
      <TaskAdd visible={modalTaskAdd} setVisible={setModalTaskAdd} />
      <TaskDelete visible={modalTaskDelete} setVisible={setModalTaskDelete} />
    </>
  );
};

export default Page;
