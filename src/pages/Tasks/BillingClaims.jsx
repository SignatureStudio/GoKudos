import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
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
import dayjs from "dayjs";
import ClaimAdd from "./components/ClaimAdd";
import ClaimDelete from "./components/ClaimDelete";
import ClaimAttachment from "./components/ClaimAttachment";
import InputApproval from "./components/InputApproval"
import { useState } from "react";

function numberWithCommas(num) {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const TasksBillingClaims = (props) => {
  const [modalClaimAdd, setModalClaimAdd] = useState(false);
  const [modalClaimDelete, setModalClaimDelete] = useState(false);
  const [modalClaimAttachment, setModalClaimAttachment] = useState(false);
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
      dataIndex: "item",
      title: "Task",
      width: 200,
    },
    {
      dataIndex: "description",
      title: "Description",
      width: 200,
      render: (col, record, index) => {
        return <div className="truncate">{col}</div>;
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
      dataIndex: "amount",
      title: "Amount (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "attachment",
      title: "Attachment",
      width: 80,
      align: "center",
      // bodyCellStyle: {
      //   backgroundColor: 'rgb(var(--gray-0))',
      // },
      render: (col, record, index) => {
        return (
          <Button
            icon={<IconAttachment />}
            iconOnly
            size="mini"
            onClick={() => setModalClaimAttachment(true)}
          />
        );
      },
    },
    {
      dataIndex: "status",
      title: "Status",
      width: 100,
      align: "center",
      render: (col, record, index) => {
        return (
          <InputApproval data={col} />
          // <div>
          //   {col === "new" && (
          //     <Tag color="blue" bordered className="w-full">
          //       New
          //     </Tag>
          //   )}
          //   {col === "approved" && (
          //     <Tag color="green" bordered className="w-full">
          //       Approved
          //     </Tag>
          //   )}
          //   {col === "rejected" && (
          //     <Tag color="red" bordered className="w-full">
          //       Rejected
          //     </Tag>
          //   )}
          // </div>
        );
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
            <IconEdit
              className="mx-1 text-gray-300 hover:text-gray-900 cursor-pointer"
              onClick={() => setModalClaimAdd(true)}
            />
            <IconDelete
              className="mx-1 text-red-200 hover:text-red-500 cursor-pointer"
              onClick={() => setModalClaimDelete(true)}
            />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      date: "Dec 12, 2022",
      item: "Financial Statement",
      description: "Mileage Claim",
      member: {
        id: faker.datatype.uuid(),
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
      amount: 25,
      status: "new",
    },
    {
      key: 2,
      date: "Dec 18, 2022",
      item: "Completion Procedures",
      description: "Mileage Claim",
      member: {
        id: faker.datatype.uuid(),
        name: "B Member",
        avatar: "/dummy/face2.jpg",
      },
      amount: 25,
      status: "approved",
    },
    {
      key: 3,
      date: "Dec 24, 2022",
      item: "Audit Procedures/Execution",
      description: "Mileage Claim",
      member: {
        id: faker.datatype.uuid(),
        name: "C Member",
        avatar: "/dummy/face3.jpg",
      },
      amount: 25,
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
                <Table.Summary.Cell colSpan={5} />
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(75)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
                <Table.Summary.Cell />
                <Table.Summary.Cell />
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
            onClick={() => setModalClaimAdd(true)}
          >
            Add Claim
          </Button>
          <Button.Group>
            <Button type="primary" icon={<IconExport />} className="mt-2">
              Export
            </Button>
          </Button.Group>
        </div>
      </div>
      <ClaimAdd visible={modalClaimAdd} setVisible={setModalClaimAdd} />
      <ClaimDelete
        visible={modalClaimDelete}
        setVisible={setModalClaimDelete}
      />
      <ClaimAttachment
        visible={modalClaimAttachment}
        setVisible={setModalClaimAttachment}
        file="/sample.pdf"
      />
    </>
  );
};
export default TasksBillingClaims;
