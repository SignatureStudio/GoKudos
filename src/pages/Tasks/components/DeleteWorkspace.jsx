import { Modal } from "@arco-design/web-react";

const DeleteWorkspace = (props) => {
  return (
    <Modal
      title="Delete Workspace"
      visible={props.visible}
      okText="Delete Workspace"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="max-w-full"
    >
      <p>Do you want to delete this workspace?</p>
    </Modal>
  );
};

export default DeleteWorkspace;
