import { Modal, Cascader, Select, Input } from "@arco-design/web-react";
const InvoiceEdit = (props) => {
  const CustomerOptions = [
    {
      value: "TCH Sdn Bhd",
      label: "TCH Sdn Bhd",
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
      title="Edit Invoice"
      visible={props.visible}
      okText="Update"
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
            <Select
              placeholder="Please select"
              defaultValue={"net30"}
              showSearch
              onChange={(value) => console.log(value)}
            >
              <Select.Option value="net30">Net 30</Select.Option>
              <Select.Option value="net15">Net 15</Select.Option>
              <Select.Option value="net7">Net 7</Select.Option>
              <Select.Option value="dur">Due upon receipt</Select.Option>
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

export default InvoiceEdit;
