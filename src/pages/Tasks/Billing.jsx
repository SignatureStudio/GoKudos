import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksBillingNav from "./components/BillingNav";
import InputText from "./components/InputText";
import InvoicePreview from "./components/InvoicePreview";
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
  const menuBilling = (type) => {
    return (
    <Menu>
      <Menu.Item key="1" onClick={() => setModalWorkspace(true)}>
        Edit workspace
      </Menu.Item>
      <hr />
      <Menu.Item key="2">
        <Link to="/tasks/archivedprojects" className="flex-1">
          View archived projects
        </Link>
      </Menu.Item>
      <hr />
      <Menu.Item key="4" onClick={() => setModalWorkspaceDelete(true)}>
        Delete workspace
      </Menu.Item>
    </Menu>

    )
  }

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
      dataIndex: "ref",
      title: "Reference",
      width: 100,
      render: (col, record, index) => {
        return <div><Button type="text" className="p-0"><Link to="/tasks/billing/invoices/details">{col}</Link></Button></div>;
      },
    },
    {
      dataIndex: "customer",
      title: "Customer",
      width: 200,
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
      dataIndex: "balance",
      title: "Balance (RM)",
      width: 100,
      align: "right",
      render: (col, record, index) => {
        return <div>{numberWithCommas(col)}</div>;
      },
    },
  ];
  const data = [
    {
      key: 1,
      date: "Dec 12, 2022",
      customer: "TCH Sdn Bhd",
      ref: "INV-10000001",
      billed: 1000,
      balance: 1000,
    },
    {
      key: 2,
      date: "Dec 12, 2022",
      customer: "TCH Sdn Bhd",
      ref: "INV-10000002",
      billed: 1000,
      balance: 500,
    },
    {
      key: 3,
      date: "Dec 12, 2022",
      customer: "TCH Sdn Bhd",
      ref: "INV-10000003",
      billed: 1000,
      balance: 0,
    },
    {
      key: 4,
      date: "Dec 12, 2022",
      customer: "TCH Sdn Bhd",
      ref: "INV-10000004",
      billed: 1000,
      balance: 0,
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
                  {numberWithCommas(4000)}
                </Table.Summary.Cell>
                <Table.Summary.Cell className="text-right font-bold">
                  {numberWithCommas(1500)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        {/* <div className="flex items-center justify-between py-2">
          <Button
            size="mini"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => setModalInvoiceAdd(true)}
          >
            Add Quote
          </Button>
        </div> */}
      </div>
      {/* <div className="overflow-auto p-3 bg-gray-50 text-center">
        <div className="bg-white rounded border border-gray-200 p-10">
          <p className="mb-4">You don't have any quote yet</p>
          <div>
            <Button
              icon={<IconPlus />}
              type="primary"
              onClick={() => setModalInvoiceAdd(true)}
            >
              <span className="hidden md:inline">Add Quote</span>
            </Button>
          </div>
        </div>
      </div> */}
      {/* <InvoicePreview visible={modalInvoice} setVisible={setModalInvoice} /> */}
    </>
  );
};
export default TasksBilling;
