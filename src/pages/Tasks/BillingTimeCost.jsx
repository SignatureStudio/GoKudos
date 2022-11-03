import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import InputApproval from "./components/InputApproval";
import TimeCostAdd from "./components/TimeCostAdd";
import TimeCostDetails from "./components/TimeCostDetails";
import { Table, Button, Tag, Avatar } from "@arco-design/web-react";
import {
  IconEdit,
  IconDelete,
  IconPlus,
  IconExport,
  IconAttachment,
} from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";
import { useState } from "react";
function numberWithCommas(num) {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TasksBillingTimeCost = (props) => {
  const [modalTimeCostAdd, setModalTimeCostAdd] = useState(false);
  const [modalTimeCostDetails, setModalTimeCostDetails] = useState(false);
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
      dataIndex: "task",
      title: "Task",
      width: 250,
      render: (col, record, index) => {
        return <div className="truncate cursor-pointer" onClick={() => setModalTimeCostDetails(true)}>{col}</div>;
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
              <img alt="avatar" src={col.avatar} />
            </Avatar>
          </div>
        );
      },
    },
    {
      dataIndex: "rate",
      title: "Rate/Hour",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "duration",
      title: "Duration",
      width: 80,
      align: "center",
      render: (col, record, index) => {
        return <div>{col} hrs</div>;
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
      dataIndex: "status",
      title: "Status",
      width: 100,
      align: "center",
      render: (col, record, index) => {
        return <InputApproval data={col} />;
      },
    },
    // {
    //   dataIndex: "action",
    //   title: "",
    //   width: 60,
    //   bodyCellStyle: {
    //     backgroundColor: "rgb(var(--gray-0))",
    //   },
    //   render: (col, record, index) => {
    //     return (
    //       <div>
    //         <IconEdit className="mx-1 text-gray-300 hover:text-gray-900 cursor-pointer" />
    //         <IconDelete className="mx-1 text-red-200 hover:text-red-500 cursor-pointer" />
    //       </div>
    //     );
    //   },
    // },
  ];
  const data = [
    {
      key: 1,
      task: "Financial Statement",
      member: {
        id: faker.datatype.uuid(),
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
      rate: 50,
      duration: 5,
      amount: 250,
      status: "new",
    },
    {
      key: 2,
      task: "Completion Procedures",
      member: {
        id: faker.datatype.uuid(),
        name: "B Member",
        avatar: "/dummy/face2.jpg",
      },
      rate: 30,
      duration: 10,
      amount: 300,
      status: "approved",
    },
    {
      key: 3,
      task: "Audit Procedures/Execution",
      member: {
        id: faker.datatype.uuid(),
        name: "C Member",
        avatar: "/dummy/face3.jpg",
      },
      rate: 50,
      duration: 4,
      amount: 200,
      status: "rejected",
    },
  ];
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
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
                <Table.Summary.Cell colSpan={4} />
                <Table.Summary.Cell className="text-center font-bold">
                  19 hrs
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(900)}
                </Table.Summary.Cell>
                <Table.Summary.Cell colSpan={2} />
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="flex items-center justify-between py-2">
          <Button
            size="mini"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => setModalTimeCostAdd(true)}
          >
            Add Time Cost
          </Button>
          <Button type="primary" icon={<IconExport />} className="mt-2">
            Export
          </Button>
        </div>
      </div>
      <TimeCostAdd
        visible={modalTimeCostAdd}
        setVisible={setModalTimeCostAdd}
      />
      <TimeCostDetails
        visible={modalTimeCostDetails}
        setVisible={setModalTimeCostDetails}
      />
    </>
  );
};
export default TasksBillingTimeCost;
