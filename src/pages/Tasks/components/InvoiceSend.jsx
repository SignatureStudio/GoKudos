import { Modal } from "@arco-design/web-react";

const InvoiceSend = (props) => {
  return (
    <Modal
      title="Send Invoice"
      visible={props.visible}
      okText="Send Invoice"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to send this invoice to [recipient name]?</p>
    </Modal>
  );
};
export default InvoiceSend;
