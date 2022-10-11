import {
  Modal,
  DatePicker,
  TimePicker,
  Select,
  Input,
  Upload,
} from "@arco-design/web-react";
import InputSelectMember from "../components/InputSelectMember";
const TimeCostAddSimple = (props) => {
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
            <div className="mb-1">Date & Time</div>
            <DatePicker.RangePicker showTime className="w-full" />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default TimeCostAddSimple;
