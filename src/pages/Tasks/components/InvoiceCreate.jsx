import { Modal, Cascader, Select, Input, DatePicker } from "@arco-design/web-react";
const InvoiceCreate = (props) => {
  return (
    <Modal
      title="Create Invoice"
      visible={props.visible}
      okText="Create Invoice"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <p>Do you want to create invoice from this quotation?</p>
    </Modal>
  );
};

export default InvoiceCreate;
