import { Modal, Cascader, Select, Input, DatePicker } from "@arco-design/web-react";
const QuotationAdd = (props) => {
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
      title="Add Quotation"
      visible={props.visible}
      okText="Add Quotation"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="mb-4">
          <div className="mb-1">Customer</div>
          <Cascader
            showSearch
            allowClear
            placeholder="Please select ..."
            options={CustomerOptions}
          />
        </div>
        <div className="mb-4">
          <div className="mb-1">Quotation Date</div>
          <DatePicker defaultValue={Date.now()} className="w-full" />
        </div>
        <div className="mb-4">
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
        </div>
        {/* <div className="mb-4">
          <div className="mb-1">Tax</div>
          <Input
            placeholder="Add a tax rate if applicable"
            suffix="%"
            options={CustomerOptions}
          />
        </div> */}
      </div>
    </Modal>
  );
};

export default QuotationAdd;
