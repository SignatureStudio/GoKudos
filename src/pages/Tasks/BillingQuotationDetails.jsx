import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import QuoteEdit from "./components/QuoteEdit";
import QuotePreview from "./components/QuotePreview";
import InvoiceCreate from "./components/InvoiceCreate";
import InvoiceItemAdd from "./components/InvoiceItemAdd";
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

const TasksBillingQuotationDetails = (props) => {
  const [modalQuoteEdit, setModalQuoteEdit] = useState(false);
  const [modalQuotePreview, setModalQuotePreview] = useState(false);
  const [modalQuoteItems, setModalQuoteItems] = useState(false);
  const [modalQuoteDeleteItem, setModalQuoteDeleteItem] = useState(false);
  const [modalInvoiceCreate, setModalInvoiceCreate] = useState(false);
  const [modalInvoiceItemAdd, setModalInvoiceItemAdd] = useState(false);
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
      fixed: "left",
      render: (col, record, index) => {
        return (
          <div>
            <Button
              type="text"
              className="p-0"
              onClick={() => setModalInvoiceItemAdd(true)}
            >
              {col}
            </Button>
          </div>
        );
      },
    },
    {
      dataIndex: "planned",
      title: "Planned (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
        // return (
        //   <div>
        //     <InputText data={col} number={true} placeholder="RM" />
        //   </div>
        // );
      },
    },
    // {
    //   dataIndex: "actual",
    //   title: "Actual (RM)",
    //   width: 100,
    //   align: "right",
    //   bodyCellStyle: {
    //     backgroundColor: "rgb(var(--gray-0))",
    //   },
    //   render: (col, record, index) => {
    //     return <div>{numberWithCommas(col)}</div>;
    //   },
    // },
    // {
    //   dataIndex: "variance",
    //   title: "Variance (RM)",
    //   width: 100,
    //   align: "right",
    //   bodyCellStyle: {
    //     backgroundColor: "rgb(var(--gray-0))",
    //   },
    //   render: (col, record, index) => {
    //     return (
    //       <div className={`${col < 0 ? "text-red-500" : "text-gray-900"}`}>
    //         {numberWithCommas(col)}
    //       </div>
    //     );
    //   },
    // },
    {
      dataIndex: "discount",
      title: "Disc (%)",
      width: 60,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "tax",
      title: "Tax (%)",
      width: 60,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
    {
      dataIndex: "billed",
      title: "Billed (RM)",
      width: 100,
      align: "right",
      fixed: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
        // return (
        //   <div>
        //     <InputText data={col} number={true} placeholder="RM" />
        //   </div>
        // );
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
    //         <IconDelete className="mx-1 text-red-200 hover:text-red-500 cursor-pointer" onClick={() => setModalQuoteDeleteItem(true)} />
    //       </div>
    //     );
    //   },
    // },
  ];
  const data = [
    {
      key: 1,
      item: "Financial Statement",
      planned: 1000,
      actual: 500,
      variance: 500,
      discount: 0,
      tax: 0,
      billed: 1000,
    },
    {
      key: 2,
      item: "Completion Procedures",
      planned: 1000,
      actual: 1500,
      variance: -500,
      discount: 0,
      tax: 0,
      billed: 2000,
    },
    {
      key: 3,
      item: "Audit Procedures/Execution",
      planned: 0,
      actual: 0,
      variance: 0,
      discount: 0,
      tax: 0,
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
            <Link to="/tasks/billing/quotations">
              <Button icon={<IconArrowLeft />} iconOnly />
            </Link>
            <div className="font-bold text-base px-2">Q-10000001</div>
            <Button
              icon={<IconEdit />}
              iconOnly
              onClick={() => setModalQuoteEdit(true)}
            />
          </div>
          <div>
            {/* <Button.Group>
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
            </Button.Group> */}
            <Button
              icon={<IconPlus />}
              size="small"
              type="primary"
              onClick={() => setModalInvoiceItemAdd(true)}
            >
              <span className="hidden md:inline">Item</span>
            </Button>
          </div>
        </div>
        <div className="bg-white p-2 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4  divide-x divide-gray-200 mb-2">
            <div className="col-span-2 p-2">
              <div className="text-xs text-gray-500">Customer</div>
              <div>TCH Sdn Bhd</div>
            </div>
            <div className="p-2">
              <div className="text-xs text-gray-500">Terms</div>
              <div>Net 30</div>
            </div>
            <div className="p-2">
              <div className="text-xs text-gray-500">Date</div>
              <div>Dec 12, 2022</div>
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
                  <Table.Summary.Cell colSpan={5} className="text-right">
                    Discount (RM)
                  </Table.Summary.Cell>
                  <Table.Summary.Cell className="text-right font-bold">
                    {numberWithCommas(0)}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={5} className="text-right">
                    Tax (RM)
                  </Table.Summary.Cell>
                  <Table.Summary.Cell className="text-right font-bold">
                    {numberWithCommas(0)}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={5}></Table.Summary.Cell>
                  <Table.Summary.Cell className="text-right font-bold">
                    {numberWithCommas(2000)}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </div>
        <div className="flex items-center justify-between p-2">
          <div>
            <Button
              size="small"
              type="primary"
              onClick={() => setModalInvoiceCreate(true)}
            >
              Create Invoice
            </Button>
          </div>
          <div>
            <Button
              icon={<IconEye />}
              onClick={() => setModalQuotePreview(true)}
            >
              <span className="hidden md:inline">Preview</span>
            </Button>
          </div>
        </div>
      </div>
      <InvoiceCreate visible={modalInvoiceCreate} setVisible={setModalInvoiceCreate} />
      <InvoiceItemAdd
        visible={modalInvoiceItemAdd}
        setVisible={setModalInvoiceItemAdd}
      />
      {/* <QuoteItems visible={modalQuoteItems} setVisible={setModalQuoteItems} />
      <QuoteDeleteItem
        visible={modalQuoteDeleteItem}
        setVisible={setModalQuoteDeleteItem}
      /> 
      <QuoteEdit visible={modalQuoteEdit} setVisible={setModalQuoteEdit} />*/}
      <QuotePreview
        visible={modalQuotePreview}
        setVisible={setModalQuotePreview}
      />
    </>
  );
};
export default TasksBillingQuotationDetails;
