import { Modal } from "@arco-design/web-react";

const TaskMove = (props) => {
  return (
    <Modal
      title="Move Task"
      visible={props.visible}
      okText="Move Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to move this task?</p>
    </Modal>
  );
};

export default TaskMove;
