import { Modal } from "@arco-design/web-react";

const QuoteSend = (props) => {
  return (
    <Modal
      title="Send Quote"
      visible={props.visible}
      okText="Send Quote"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to send this quote to [recipient name]?</p>
    </Modal>
  );
};
export default QuoteSend;
