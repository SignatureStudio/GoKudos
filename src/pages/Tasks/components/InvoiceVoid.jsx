import { Modal } from "@arco-design/web-react";

const InvoiceVoid = (props) => {
  return (
    <Modal
      title="Void Invoice"
      visible={props.visible}
      okText="Void Invoice"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to void this invoice?</p>
    </Modal>
  );
};
export default InvoiceVoid;
