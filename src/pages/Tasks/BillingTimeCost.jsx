import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksBillingNav from "./components/BillingNav";
import { Table, Button, Tag, Avatar } from "@arco-design/web-react";
import {
  IconEdit,
  IconDelete,
  IconPlus,
  IconExport,
  IconAttachment,
} from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";
function numberWithCommas(num) {
  return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TasksBillingTimeCost = (props) => {
  const columns = [
    {
      dataIndex: "index",
      title: "#",
      width: 25,
      align: "center",
      render: (col, record, index) => {
        return <div className="text-gray-300">{index + 1}</div>;
      },
    },
    {
      dataIndex: "date",
      title: "Date",
      width: 100,
    },
    {
      dataIndex: "timein",
      title: "Time-in",
      width: 80,
    },
    {
      dataIndex: "timeout",
      title: "Time-out",
      width: 80,
    },
    {
      dataIndex: "task",
      title: "Task",
      width: 200,
      render: (col, record, index) => {
        return (
          <div className="truncate">
            {col}
          </div>
        );
      },
    },
    {
      dataIndex: "member",
      title: "Member",
      width: 80,
      align: "center",
      render: (col, record, index) => {
        return (
          <div className="truncate">
            <Avatar size={24}>
              <img
                alt="avatar"
                src={col.avatar}
              />
            </Avatar>
          </div>
        );
      },
    },
    {
      dataIndex: "duration",
      title: "Duration",
      width: 80,
      align: "center",
      render: (col, record, index) => {
        return <div>{col}</div>;
      },
    },
    {
      dataIndex: "amount",
      title: "Amount (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "action",
      title: "",
      width: 60,
      bodyCellStyle: {
        backgroundColor: "rgb(var(--gray-0))",
      },
      render: (col, record, index) => {
        return (
          <div>
            <IconEdit className="mx-1 text-gray-300 hover:text-gray-900 cursor-pointer" />
            <IconDelete className="mx-1 text-red-200 hover:text-red-500 cursor-pointer" />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      date: "Dec 12, 2022",
      timein: "10:00 AM",
      timeout: "3:00 PM",
      task: faker.company.catchPhrase(),
      member: {
        id: faker.datatype.uuid(),
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
      duration: "5 Hours",
      amount: 300,
    },
    {
      key: 2,
      date: "Dec 18, 2022",
      timein: "10:00 AM",
      timeout: "3:00 PM",
      task: faker.company.catchPhrase(),
      member: {
        id: faker.datatype.uuid(),
        name: "B Member",
        avatar: "/dummy/face2.jpg",
      },
      duration: "5 Hours",
      amount: 300,
    },
    {
      key: 3,
      date: "Dec 24, 2022",
      timein: "10:00 AM",
      timeout: "3:00 PM",
      task: faker.company.catchPhrase(),
      member: {
        id: faker.datatype.uuid(),
        name: "C Member",
        avatar: "/dummy/face3.jpg",
      },
      duration: "5 Hours",
      amount: 300,
    },
  ];
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksBillingNav />
      <div className="overflow-auto p-3 bg-gray-50">
        <Table
          size="small"
          scroll={{ x: true }}
          columns={columns}
          data={data}
          pagination={false}
          noDataElement={<div>NOTHING</div>}
          className="border-gray-300 border rounded"
          summary={(currentData) => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={7} />
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(900)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="flex items-center justify-between py-2">
          <Button size="mini" type="text" icon={<IconPlus />} className="mt-2">
            Add Time Cost
          </Button>
          <Button.Group>
            <Button type="primary" icon={<IconExport />} className="mt-2">
              Export
            </Button>
          </Button.Group>
        </div>
      </div>
    </>
  );
};
export default TasksBillingTimeCost;
