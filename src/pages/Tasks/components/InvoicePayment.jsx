import {
  Modal,
  Cascader,
  Select,
  Input,
  DatePicker,
} from "@arco-design/web-react";
const InvoicePayment = (props) => {
  return (
    <Modal
      title="Receive Payment"
      visible={props.visible}
      okText="Confirm"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Date</div>
            <DatePicker value={Date.now()} className="w-full" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="mb-1">Amount</div>
            <Input placeholder="0.00" prefix="RM" />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default InvoicePayment;
