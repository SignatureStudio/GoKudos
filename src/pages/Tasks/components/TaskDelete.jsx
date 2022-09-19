import { Modal } from "@arco-design/web-react";

const TaskDelete = (props) => {
  return (
    <Modal
      title="Delete Task"
      visible={props.visible}
      okText="Delete Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to delete this task?</p>
    </Modal>
  );
};

export default TaskDelete;
