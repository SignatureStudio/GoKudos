import { Modal, Select } from "@arco-design/web-react";

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
      <div className="flex items-center mb-4">
        <div className="w-32">Workspace</div>
        <Select showSearch defaultValue="1">
          <Select.Option value="1">Current workspace</Select.Option>
          <Select.Option value="2">C workspace</Select.Option>
        </Select>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-32">Project</div>
        <Select showSearch defaultValue="1">
          <Select.Option value="1">Current Project</Select.Option>
          <Select.Option value="2">C Project</Select.Option>
        </Select>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-32">Group</div>
        <Select showSearch defaultValue="1">
          <Select.Option value="1">B Group</Select.Option>
        </Select>
      </div>
    </Modal>
  );
};

export default TaskDuplicate;
