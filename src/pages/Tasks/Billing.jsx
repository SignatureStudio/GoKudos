import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import { Table, Button, Input } from "@arco-design/web-react";
import {
  IconEdit,
  IconDelete,
  IconPlus,
  IconDownload,
  IconSend
} from "@arco-design/web-react/icon";
function numberWithCommas(num) {
  return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TasksBilling = (props) => {
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
      dataIndex: "item",
      title: "Item",
      width: 300,
    },
    {
      dataIndex: "quantity",
      title: "Quantity",
      width: 100,
      align: "center",
    },
    {
      dataIndex: "price",
      title: "Price (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
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
      dataIndex: "cost",
      title: "Actual Cost (RM)",
      width: 100,
      align: "right",
      bodyCellStyle: {
        backgroundColor: 'rgb(var(--gray-0))',
      },
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "variance",
      title: "Variance (RM)",
      width: 100,
      align: "right",
      bodyCellStyle: {
        backgroundColor: 'rgb(var(--gray-0))',
      },
      render: (col, record, index) => {
        return (
          <div className={`${col < 0 ? "text-red-500" : "text-gray-900"}`}>
            {numberWithCommas(col)}
          </div>
        );
      },
    },
    {
      dataIndex: "action",
      title: "",
      width: 80,
      bodyCellStyle: {
        backgroundColor: 'rgb(var(--gray-0))',
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
      item: "Item A",
      quantity: 1,
      price: 1000,
      amount: 1000,
      cost: 500,
      variance: 500,
    },
    {
      key: 2,
      item: "Item B",
      quantity: 1,
      price: 1500,
      amount: 1500,
      cost: 1750,
      variance: -250,
    },
    {
      key: 3,
      item: "Item C",
      quantity: 2,
      price: 500,
      amount: 1000,
      cost: 500,
      variance: 500,
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
                <Table.Summary.Cell colSpan={4}></Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(3500)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(2750)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(750)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="flex items-center justify-between py-2">
          <Button size="mini" type="text" icon={<IconPlus />} className="mt-2">
            Add Item
          </Button>
          <Button.Group>
            <Button type="primary" icon={<IconDownload />} className="mt-2">
              Download
            </Button>
            <Button type="primary" icon={<IconSend />} className="mt-2">
              Send
            </Button>
          </Button.Group>
        </div>
      </div>
    </>
  );
};
export default TasksBilling;
