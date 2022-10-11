import {
  Modal,
  Cascader,
  Select,
  Input,
  Radio,
  Carousel,
  Tag,
} from "@arco-design/web-react";
const SalesOrderAdd = (props) => {
  const CustomerOptions = [
    {
      value: "A Company",
      label: "A Company",
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
      title="Add Sales Order"
      visible={props.visible}
      okText="Add Sales Order"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Customer</div>
            <Cascader
              showSearch
              allowClear
              placeholder="Please select ..."
              options={CustomerOptions}
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Terms</div>
            <Select placeholder="Please select" >
              <Option value="30 Days">"30 Days"</Option>
              <Option value="15 Days">"15 Days"</Option>
              <Option value="7 Days">"7 Days"</Option>
              <Option value="Due on receipt">"Due on receipt"</Option>
            </Select>
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Tax</div>
            <Input
              placeholder="Add a tax rate if applicable"
              suffix="%"
              options={CustomerOptions}
            />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default SalesOrderAdd;
