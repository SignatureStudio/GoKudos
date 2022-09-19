import { Modal } from "@arco-design/web-react";

const TaskArchive = (props) => {
  return (
    <Modal
      title="Archive Task"
      visible={props.visible}
      okText="Archive Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to archive this task?</p>
    </Modal>
  );
};

export default TaskArchive;
