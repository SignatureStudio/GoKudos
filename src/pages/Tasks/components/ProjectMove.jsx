import { Modal, Select } from "@arco-design/web-react";

const ProjectMove = (props) => {
  return (
    <Modal
      title="Move Project"
      visible={props.visible}
      okText="Move Project"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      // okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Move project to</p>
      <Select defaultValue="1">
        <Select.Option value="1">B workspace</Select.Option>
        <Select.Option value="2">C workspace</Select.Option>
      </Select>
    </Modal>
  );
};

export default ProjectMove;
