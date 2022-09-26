import { Modal, Input } from "@arco-design/web-react";
import InputStatusColor from "./InputStatusColor";

const StatusAdd = (props) => {
  return (
    <Modal
      title="Add Status"
      visible={props.visible}
      okText="Add Status"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="pb-4">
        <InputStatusColor data={{}} />
        </div>
      </div>
    </Modal>
  );
};

export default StatusAdd;
