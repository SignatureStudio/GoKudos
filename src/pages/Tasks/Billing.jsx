import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import InputText from "./components/InputText";
import InvoicePreview from "./components/InvoicePreview";
import QuoteAdd from "./components/QuoteAdd";
import { Table, Button } from "@arco-design/web-react";
import { IconEdit, IconDelete, IconPlus } from "@arco-design/web-react/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

function numberWithCommas(num) {
  num = Number(num);
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TasksBilling = (props) => {
  const [modalInvoice, setModalInvoice] = useState(false);
  const [modalQuoteAdd, setModalQuoteAdd] = useState(false);
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
      dataIndex: "customer",
      title: "Customer",
      width: 200,
    },
    {
      dataIndex: "quote",
      title: "Quote",
      width: 100,
      render: (col, record, index) => {
        return (
          <div>
            {col ? (
              <Button size="small">
                <Link to="/tasks/billing/quote">{col}</Link>
              </Button>
            ) : (
              "-"
            )}
          </div>
        );
      },
    },
    {
      dataIndex: "invoice",
      title: "Invoice",
      width: 100,
      render: (col, record, index) => {
        return (
          <div>
            {col ? (
              <Button size="small" onClick={() => setModalInvoice(true)}>
                {col}
              </Button>
            ) : (
              "-"
            )}
          </div>
        );
      },
    },
    {
      dataIndex: "billed",
      title: "Billed (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "paid",
      title: "Paid (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return (
          <div>
            <InputText data={col} number={true} placeholder="RM" />
          </div>
        );
      },
    },
    // {
    //   dataIndex: "action",
    //   title: "",
    //   width: 80,
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
      customer: "A Company",
      quote: "Q-000001",
      invoice: "I-000001",
      billed: 1000,
      paid: 1000,
    },
    {
      key: 2,
      customer: "A Company",
      quote: "Q-000002",
      invoice: null,
      billed: 1500,
      paid: 0,
    },
    {
      key: 3,
      customer: "A Company",
      quote: "Q-000003",
      invoice: null,
      billed: 500,
      paid: 0,
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
                  {numberWithCommas(3000)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(1000)}
                </Table.Summary.Cell>
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
            onClick={() => setModalQuoteAdd(true)}
          >
            Add Quote
          </Button>
        </div>
      </div>
      <div className="overflow-auto p-3 bg-gray-50 text-center">
        <div className="bg-white rounded border border-gray-200 p-10">
          <p className="mb-4">You don't have any quote yet</p>
          <div>
            <Button
              icon={<IconPlus />}
              type="primary"
              onClick={() => setModalQuoteAdd(true)}
            >
              <span className="hidden md:inline">Add Quote</span>
            </Button>
          </div>
        </div>
      </div>
      <InvoicePreview visible={modalInvoice} setVisible={setModalInvoice} />
      <QuoteAdd visible={modalQuoteAdd} setVisible={setModalQuoteAdd} />
    </>
  );
};
export default TasksBilling;
