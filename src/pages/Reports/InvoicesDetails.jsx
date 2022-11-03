import {
  Button,
  DatePicker,
  Dropdown,
  Menu,
  Radio,
  Select,
  Table,
} from "@arco-design/web-react";
import { IconExport, IconPlus } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = () => {
  function numberWithCommas(num) {
    num = Number(num);
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        return <div>{col}</div>;
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
      customer: "A Company",
      ref: "INV-10000001",
      billed: 1000,
      balance: 1000,
    },
    {
      key: 2,
      date: "Dec 12, 2022",
      customer: "A Company",
      ref: "INV-10000002",
      billed: 1000,
      balance: 500,
    },
    {
      key: 3,
      date: "Dec 12, 2022",
      customer: "A Company",
      ref: "INV-10000003",
      billed: 1000,
      balance: 0,
    },
    {
      key: 4,
      date: "Dec 12, 2022",
      customer: "A Company",
      ref: "INV-10000004",
      billed: 1000,
      balance: 0,
    },
  ];
  return (
    <section className="bg-white">
      <h1 className="py-4">Invoice Report</h1>
      <div className="flex px-4">
        <div className="flex-1">
          <Button type="primary" icon={<IconPlus />}>
            Generate New
          </Button>
        </div>
        <div>
          <Dropdown
            trigger="click"
            droplist={
              <Menu>
                <Menu.Item key="1">Microsoft Excel</Menu.Item>
                <Menu.Item key="2">SQL Accounting</Menu.Item>
              </Menu>
            }
          >
            <Button icon={<IconExport />}>Export</Button>
          </Dropdown>
        </div>
      </div>
      <div className="p-4">
        <div className="overflow-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Page;
