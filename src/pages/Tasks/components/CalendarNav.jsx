import { Radio, Button, DatePicker, Select } from "@arco-design/web-react";
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { displayTimelineText } from "../utils/_utils";

const TasksCalendarNav = (props) => {
  return (
    <div className="flex items-center bg-gray-50 px-2 pt-4">
      <div className="flex-1 flex items-center">
        <div>
          {props.calendarScale === "month" && (
            <>
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.subtract(1, "month"));
                }}
              >
                <IconLeft className="text-gray-400 ml-1" />
              </Button>
              <DatePicker.MonthPicker
                defaultPickerValue={props.defaultDate}
                value={props.defaultDate}
                triggerElement={
                  <Button size="small" type="link">
                    <span className="text-gray-900 text-base font-heading">
                      {props.defaultDate.format("MMMM YYYY")}
                    </span>
                  </Button>
                }
                onChange={(e) => {
                  // console.log(dayjs(e));
                  props.setDefaultDate(dayjs(e));
                }}
              />
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.add(1, "month"));
                }}
              >
                <IconRight className="text-gray-400 ml-1" />
              </Button>
            </>
          )}
          {props.calendarScale === "week" && (
            <>
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.subtract(1, "week"));
                }}
              >
                <IconLeft className="text-gray-400 ml-1" />
              </Button>
              <DatePicker.WeekPicker
                defaultPickerValue={props.defaultDate}
                value={props.defaultDate}
                triggerElement={
                  <Button size="small" type="link">
                    <span className="text-gray-900 text-base font-heading">
                      Week {props.defaultDate.week()},{" "}
                      {props.defaultDate.format("YYYY")}
                    </span>
                  </Button>
                }
                onChange={(e) => {
                  let week = Number(e.split("-")[1].slice(0, -2));
                  props.setDefaultDate(dayjs().week(week));
                }}
              />
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.add(1, "week"));
                }}
              >
                <IconRight className="text-gray-400 ml-1" />
              </Button>
            </>
          )}
          {props.calendarScale === "day" && (
            <>
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.subtract(1, "day"));
                }}
              >
                <IconLeft className="text-gray-400 ml-1" />
              </Button>
              <DatePicker
                defaultPickerValue={props.defaultDate}
                value={props.defaultDate}
                triggerElement={
                  <Button size="small" type="link">
                    <span className="text-gray-900 text-base font-heading">
                      {props.defaultDate.format("MMM D, YYYY")}
                    </span>
                  </Button>
                }
                onChange={(e) => {
                  // console.log(e);
                  props.setDefaultDate(dayjs(e));
                }}
              />
              <Button
                size="small"
                type="link"
                className="p-0"
                onClick={() => {
                  props.setDefaultDate(props.defaultDate.add(1, "day"));
                }}
              >
                <IconRight className="text-gray-400 ml-1" />
              </Button>
            </>
          )}
          {props.calendarScale === "agenda" && (
            <span className="text-gray-900 text-base font-heading">
              {displayTimelineText(props.start, props.end)}
            </span>
          )}
        </div>
      </div>
      <Select
        placeholder="Please select"
        bordered={false}
        value={props.calendarScale}
        onChange={(e) => {
          props.setCalendarScale(e);
        }}
        className="w-24 md:hidden"
      >
        <Select.Option value="month">Month</Select.Option>
        <Select.Option value="week">Week</Select.Option>
        <Select.Option value="day">Day</Select.Option>
        <Select.Option value="agenda">Agenda</Select.Option>
      </Select>
      <Radio.Group
        type="button"
        size="small"
        defaultValue={props.calendarScale}
        onChange={(e) => {
          props.setCalendarScale(e);
        }}
        className="hidden md:inline-block"
      >
        <Radio value="month">Month</Radio>
        <Radio value="week">Week</Radio>
        <Radio value="day">Day</Radio>
        <Radio value="agenda">Agenda</Radio>
      </Radio.Group>
    </div>
  );
};
export default TasksCalendarNav;
