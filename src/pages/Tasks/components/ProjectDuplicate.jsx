import { Modal, Select } from "@arco-design/web-react";

const ProjectDuplicate = (props) => {
  return (
    <Modal
      title="Duplicate Project"
      visible={props.visible}
      okText="Duplicate Project"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Duplicate project to</p>
      <Select defaultValue="1">
        <Select.Option value="1">Same workspace</Select.Option>
        <Select.Option value="2">B workspace</Select.Option>
        <Select.Option value="3">C workspace</Select.Option>
      </Select>
    </Modal>
  );
};

export default ProjectDuplicate;
