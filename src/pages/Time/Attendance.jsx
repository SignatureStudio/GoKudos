import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Menu,
  Select,
  Table,
  Tabs,
} from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import TimesheetNav from "./components/TimesheetNav";
const Page = () => {
  return (
    <>
      <h1 className="pt-4">Attendance</h1>
      <Menu
        mode="horizontal"
        selectedKeys="1"
        className="border-b border-gray-300 nav"
      >
        <Link to="/time/attendance">
          <Menu.Item key="1">Time Entries</Menu.Item>
        </Link>
        <Link to="/time/attendance">
          <Menu.Item key="2">Approval (0)</Menu.Item>
        </Link>
      </Menu>
      <div className="p-1">
        <div className="lg:flex justify-between">
          <div className="p-1">
            <Select value={1} className="w-72">
              <Select.Option value={1}>All (3)</Select.Option>
              <Select.Option>Full Time</Select.Option>
              <Select.Option>Part Time</Select.Option>
              <Select.Option>No Time</Select.Option>
              <Select.Option>(No Schedule)</Select.Option>
            </Select>
          </div>
          <div className="p-1">
            <Input.Search placeholder="Search member" className="w-72" />
          </div>
        </div>
        <div className="lg:flex justify-between">
          <div className="p-1">
            <Input.Group compact>
              <Select value={1} className="w-24">
                <Select.Option value={1}>Daily</Select.Option>
                <Select.Option>Weekly</Select.Option>
                <Select.Option>Monthly</Select.Option>
              </Select>
              <DatePicker defaultValue={Date.now()} className="w-32" />
              <Button className="px-0 w-16">Today</Button>
            </Input.Group>
          </div>
          <div className="p-1">
            <Select value={1} className="w-72">
              <Select.Option value={1}>All Timezone</Select.Option>
              <Select.Option>Asia/Kuala Lumpur</Select.Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="overflow-auto p-3 bg-gray-50">
        <Table
          columns={[
            {
              title: "Member",
              dataIndex: "name",
            },
            {
              title: "Employee Type",
              dataIndex: "type",
            },
            {
              title: "Location",
              dataIndex: "location",
            },
            {
              title: "First In",
              dataIndex: "First In",
            },
            {
              title: "Last Out",
              dataIndex: "Last Out",
            },
            {
              title: "Overtime",
              dataIndex: "Overtime",
            },
            {
              title: "Total Time",
              dataIndex: "Total Time",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Page;
