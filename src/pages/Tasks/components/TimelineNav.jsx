// import { displayTasksBy } from "../utils/_utils";
import { Select, Radio, Button } from "@arco-design/web-react";

const TasksTimelineNav = (props) => {
  return (
    <div className="flex items-center bg-gray-50 px-2 pt-3">
      {/* <div className="flex-1 flex items-center">
        <Select
          placeholder="Please select"
          bordered={false}
          value={props.displayBy}
          onChange={(e) => {
            props.setDisplayBy(e);
            // const data = displayTasksBy[e](props.data)
            // console.log(data);
            // props.setData(data)
          }}
          className="w-24"
        >
          <Select.Option value="group">Group</Select.Option>
          <Select.Option value="status">Status</Select.Option>
          <Select.Option value="member">Member</Select.Option>
        </Select>
      </div> */}
      <Select
        placeholder="Please select"
        bordered={false}
        value={props.timeScale}
        onChange={(e) => {
          props.setTimeScale(e);
        }}
        className="w-24 md:hidden"
      >
        <Select.Option value="day">Day</Select.Option>
        <Select.Option value="month">Month</Select.Option>
        <Select.Option value="year">Year</Select.Option>
      </Select>
      <Radio.Group
        type="button"
        size="small"
        defaultValue={props.timeScale}
        value={props.timeScale}
        onChange={(e) => {
          props.setTimeScale(e);
        }}
        className="hidden md:inline-block"
      >
        <Radio value="day">Day</Radio>
        <Radio value="month">Month</Radio>
        <Radio value="year">Year</Radio>
      </Radio.Group>
    </div>
  );
};
export default TasksTimelineNav;
