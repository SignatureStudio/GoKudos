import { Modal } from "@arco-design/web-react";

const TaskDuplicate = (props) => {
  return (
    <Modal
      title="Duplicate Task"
      visible={props.visible}
      okText="Duplicate Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to duplicate this task?</p>
    </Modal>
  );
};

export default TaskDuplicate;
