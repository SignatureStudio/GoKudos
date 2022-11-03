import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import InvoiceEdit from "./components/InvoiceEdit";
import InvoicePreview from "./components/InvoicePreview";
import InvoicePayment from "./components/InvoicePayment";
import InvoiceItemEdit from "./components/InvoiceItemEdit";
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

const TasksBillingInvoiceDetails = (props) => {
  const [modalInvoicePayment, setModalInvoicePayment] = useState(false);
  const [modalInvoiceEdit, setModalInvoiceEdit] = useState(false);
  const [modalInvoicePreview, setModalInvoicePreview] = useState(false);
  const [modalInvoiceItemEdit, setModalInvoiceItemEdit] = useState(false);
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
              onClick={() => setModalInvoiceItemEdit(true)}
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
      item: "Item A",
      planned: 1000,
      actual: 500,
      variance: 500,
      discount: 0,
      tax: 0,
      billed: 1000,
    },
    {
      key: 2,
      item: "Item B",
      planned: 1000,
      actual: 1500,
      variance: -500,
      discount: 0,
      tax: 0,
      billed: 2000,
    },
    {
      key: 3,
      item: "Item C",
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
            <Link to="/tasks/billing/invoices">
              <Button icon={<IconArrowLeft />} iconOnly />
            </Link>
            <div className="font-bold text-base px-2">INV-10000001</div>
            <Button
              icon={<IconEdit />}
              iconOnly
              onClick={() => setModalInvoiceEdit(true)}
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
              onClick={() => setModalInvoicePreview(true)}
            >
              <span className="hidden md:inline">Preview</span>
            </Button>
            </Button.Group> */}
            <Button
              icon={<IconPlus />}
              size="small"
              type="primary"
              onClick={() => setModalInvoiceItemEdit(true)}
            >
              <span className="hidden md:inline">Item</span>
            </Button>
          </div>
        </div>
        <div className="bg-white p-2 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4  divide-x divide-gray-200 mb-2">
            <div className="col-span-2 p-2">
              <div className="text-xs text-gray-500">Customer</div>
              <div>A Company</div>
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
                  <Table.Summary.Cell colSpan={5} className="text-right">
                    Total (RM)
                  </Table.Summary.Cell>
                  <Table.Summary.Cell className="text-right font-bold">
                    {numberWithCommas(2000)}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={5} className="text-right">
                    Balance Due (RM)
                  </Table.Summary.Cell>
                  <Table.Summary.Cell className="text-right font-bold">
                    {numberWithCommas(2000)}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
          <div className="flex items-center justify-between pt-2">
            <div>
              <Button onClick={() => setModalInvoicePayment(true)}>
                <span className="hidden md:inline">Receive Payment</span>
              </Button>
            </div>
            <div>
              <Button
                icon={<IconEye />}
                type="primary"
                onClick={() => setModalInvoicePreview(true)}
              >
                <span className="hidden md:inline">Preview</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="py-2">
          <Button type="text">Delete Invoice</Button>
        </div>
      </div>
      <InvoicePayment
        visible={modalInvoicePayment}
        setVisible={setModalInvoicePayment}
      />
      <InvoiceItemEdit
        visible={modalInvoiceItemEdit}
        setVisible={setModalInvoiceItemEdit}
      />
      {/* <QuoteItems visible={modalQuoteItems} setVisible={setModalQuoteItems} />
      <QuoteDeleteItem
        visible={modalQuoteDeleteItem}
        setVisible={setModalQuoteDeleteItem}
      />*/}
      <InvoiceEdit
        visible={modalInvoiceEdit}
        setVisible={setModalInvoiceEdit}
      />
      <InvoicePreview
        visible={modalInvoicePreview}
        setVisible={setModalInvoicePreview}
      />
    </>
  );
};
export default TasksBillingInvoiceDetails;
