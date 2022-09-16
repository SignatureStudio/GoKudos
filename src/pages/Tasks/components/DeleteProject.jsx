import { Modal } from "@arco-design/web-react";

const DeleteProject = (props) => {
  return (
    <Modal
      title="Delete Project"
      visible={props.visible}
      okText="Delete Project"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="max-w-full"
    >
      <p>Do you want to delete this project?</p>
    </Modal>
  );
};

export default DeleteProject;
