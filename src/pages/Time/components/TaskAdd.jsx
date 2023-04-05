import { Modal, Cascader, Select, Input, DatePicker } from "@arco-design/web-react";
const TaskAdd = (props) => {
  const CustomerOptions = [
    {
      value: "CR0001Satish",
      label: "CR0001Satish",
      children: [
        {
          value: "A Customer",
          label: "A Customer",
        },
        {
          value: "B Customer",
          label: "B Customer",
        },
        {
          value: "C Customer",
          label: "C Customer",
        },
      ],
    },
    {
      value: "B Company",
      label: "B Company",
      children: [
        {
          value: "A Customer",
          label: "A Customer",
        },
        {
          value: "B Customer",
          label: "B Customer",
        },
        {
          value: "C Customer",
          label: "C Customer",
        },
      ],
    },
  ];
  return (
    <Modal
      title="Add Task"
      visible={props.visible}
      okText="Add Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="mb-4">
          <div className="mb-1">Name</div>
          <Input />
        </div>
      </div>
    </Modal>
  );
};

export default TaskAdd;
