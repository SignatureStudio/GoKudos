import { Modal } from "@arco-design/web-react";

const ProjectDelete = (props) => {
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
      className="w-full max-w-sm"
    >
      <p>Do you want to delete this project?</p>
    </Modal>
  );
};

export default ProjectDelete;
