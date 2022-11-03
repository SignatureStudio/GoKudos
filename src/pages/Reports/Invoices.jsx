import { Button, DatePicker, Radio, Select } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = () => {
  const today = dayjs();
  const [dateRange, setDateRange] = useState([
    dayjs(`${today.$y}-${today.$M}-1`),
    dayjs(`${today.$y}-${today.$M}-${today.daysInMonth()}`),
  ]);
  console.log(dateRange);
  return (
    <section className="bg-white">
      <h1 className="py-4">Reports</h1>
      <div className="max-w-xl mx-auto py-8 px-4">
        <div className="grid md:grid-cols-4 gap-4 items-center">
          <div>
            Modal <span className="text-red-600">*</span>
          </div>
          <div className="md:col-span-3">
            <Select defaultValue="invoice">
              <Select.Option value="projects">Projects and Tasks</Select.Option>
              <Select.Option value="time">Time Attendance</Select.Option>
              <Select.Option value="invoice">Invoices</Select.Option>
            </Select>
          </div>
          <div>Date Range</div>
          <div className="md:col-span-3">
            <Radio.Group
              defaultValue="1"
              type="button"
              size="small"
              onChange={(e) => {
                if (e === "1") {
                  setDateRange([
                    dayjs(`${today.$y}-${today.$M + 1}-1`),
                    dayjs(`${today.$y}-${today.$M + 1}-${today.daysInMonth()}`),
                  ]);
                } else if (e === "2") {
                  const lastmonth = today.subtract(1, "month");
                  setDateRange([
                    dayjs(`${lastmonth.$y}-${lastmonth.$M + 1}-1`),
                    dayjs(
                      `${lastmonth.$y}-${
                        lastmonth.$M + 1
                      }-${lastmonth.daysInMonth()}`
                    ),
                  ]);
                }
              }}
            >
              <Radio value="1">This month</Radio>
              <Radio value="2">Last month</Radio>
              <Radio value="3">Custom</Radio>
            </Radio.Group>
          </div>
          <div></div>
          <div className="md:col-span-3">
            <div>
              <DatePicker.RangePicker value={dateRange} className="w-full" />
            </div>
          </div>
          <div>Workspace</div>
          <div className="md:col-span-3">
            <Select defaultValue="1">
              <Select.Option value="1">All</Select.Option>
              <Select.Option value="2">A Workspace</Select.Option>
              <Select.Option value="3">B Workspace</Select.Option>
            </Select>
          </div>
        </div>
        <div className="mt-8 text-right">
          <Button>Reset</Button>
          <Link to="/reports/details">
            <Button type="primary" className="ml-2">
              Generate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
