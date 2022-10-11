import {
  Modal,
  DatePicker,
  Select,
  Input,
  Upload,
} from "@arco-design/web-react";
const ClaimAdd = (props) => {
  return (
    <Modal
      title="Add Claim"
      visible={props.visible}
      okText="Add Claim"
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
            <div className="mb-1">Date</div>
            <DatePicker className="w-full" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Description</div>
            <Input placeholder="Add a description" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Amount</div>
            <Input prefix="RM" placeholder="0.00" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Attachment</div>
            <Upload action="/" />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default ClaimAdd;
