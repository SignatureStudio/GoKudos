import {
  Modal,
  DatePicker,
  TimePicker,
  Select,
  Input,
  Upload,
} from "@arco-design/web-react";
import InputSelectMember from "../components/InputSelectMember";
const TimeCostAdd = (props) => {
  return (
    <Modal
      title="Add Time Cost"
      visible={props.visible}
      okText="Add Time Cost"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Task</div>
            <Select
              placeholder="Please select"
              defaultValue={"atask"}
              showSearch
              onChange={(value) => console.log(value)}
            >
              <Select.Option value="atask">A Task</Select.Option>
              <Select.Option value="btask">B Task</Select.Option>
              <Select.Option value="ctask">C Task</Select.Option>
              <Select.Option value="dtask">D Task</Select.Option>
            </Select>
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Member</div>
            <InputSelectMember data={[]} multiple="no" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Date & Time</div>
            <DatePicker.RangePicker showTime className="w-full" />
          </label>
        </div>
        {/* <div className="mb-4">
          <label>
            <div className="mb-1">Time</div>
            <TimePicker.RangePicker use12Hours step={{
              minute: 5,
              second: 60
            }} className="w-full" />
          </label>
        </div> */}
      </div>
    </Modal>
  );
};

export default TimeCostAdd;
