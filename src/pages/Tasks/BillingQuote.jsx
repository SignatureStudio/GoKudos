import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import QuoteEdit from "./components/QuoteEdit";
import QuotePreview from "./components/QuotePreview";
import InvoiceAdd from "./components/InvoiceAdd";
import QuoteItems from "./components/QuoteItems";
import QuoteDeleteItem from "./components/QuoteDeleteItem";
import InputText from "./components/InputText";
import { Table, Button, Input, Select } from "@arco-design/web-react";
import {
  IconEdit,
  IconDelete,
  IconPlus,
  IconDownload,
  IconSend,
  IconEye,
  IconArrowLeft,
} from "@arco-design/web-react/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

function numberWithCommas(num) {
  num = Number(num);
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TasksBillingQuote = (props) => {
  const [modalQuoteEdit, setModalQuoteEdit] = useState(false);
  const [modalQuotePreview, setModalQuotePreview] = useState(false);
  const [modalQuoteItems, setModalQuoteItems] = useState(false);
  const [modalQuoteDeleteItem, setModalQuoteDeleteItem] = useState(false);
  const [modalInvoiceAdd, setModalInvoiceAdd] = useState(false);
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
      dataIndex: "planned",
      title: "Planned (RM)",
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
    {
      dataIndex: "actual",
      title: "Actual (RM)",
      width: 100,
      align: "right",
      bodyCellStyle: {
        backgroundColor: "rgb(var(--gray-0))",
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
        backgroundColor: "rgb(var(--gray-0))",
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
      dataIndex: "billed",
      title: "Billed (RM)",
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
    {
      dataIndex: "action",
      title: "",
      width: 80,
      bodyCellStyle: {
        backgroundColor: "rgb(var(--gray-0))",
      },
      render: (col, record, index) => {
        return (
          <div>
            <IconDelete className="mx-1 text-red-200 hover:text-red-500 cursor-pointer" onClick={() => setModalQuoteDeleteItem(true)} />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      item: "Item A",
      planned: 1000,
      actual: 500,
      variance: 500,
      billed: 1000,
    },
    {
      key: 2,
      item: "Item B",
      planned: 1000,
      actual: 1500,
      variance: -500,
      billed: 2000,
    },
    {
      key: 3,
      item: "Item C",
      planned: 0,
      actual: 0,
      variance: 0,
      billed: 0,
    },
  ];
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TasksBillingNav />
      <div className="overflow-auto p-3 bg-gray-50">
        <div className="mb-2 flex items-center">
          <div className="flex-1 flex items-center">
            <div className="font-bold text-base px-2">Q-000001</div>
            <Button
              icon={<IconEdit />}
              iconOnly
              onClick={() => setModalQuoteEdit(true)}
            />
          </div>
          <div>
            <Button.Group>
              <Button icon={<IconArrowLeft />}>
                <Link to="/tasks/billing">
                  Back <span className="hidden md:inline">to list</span>
                </Link>
              </Button>
              <Button
                icon={<IconEye />}
                onClick={() => setModalQuotePreview(true)}
              >
                <span className="hidden md:inline">Preview</span>
              </Button>
            </Button.Group>
          </div>
        </div>
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
                <Table.Summary.Cell colSpan={2}></Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(2000)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(2000)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(0)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(3000)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <div className="flex items-center justify-between py-2">
          <Button
            size="small"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => setModalQuoteItems(true)}
          >
            Unbilled Item
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => setModalInvoiceAdd(true)}
          >
            Create Invoice
          </Button>
        </div>
      </div>
      <InvoiceAdd visible={modalInvoiceAdd} setVisible={setModalInvoiceAdd} />
      <QuoteItems visible={modalQuoteItems} setVisible={setModalQuoteItems} />
      <QuoteDeleteItem visible={modalQuoteDeleteItem} setVisible={setModalQuoteDeleteItem} />
      <QuoteEdit visible={modalQuoteEdit} setVisible={setModalQuoteEdit} />
      <QuotePreview
        visible={modalQuotePreview}
        setVisible={setModalQuotePreview}
      />
    </>
  );
};
export default TasksBillingQuote;
