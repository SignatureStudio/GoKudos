import { Modal } from "@arco-design/web-react";

const QuoteVoid = (props) => {
  return (
    <Modal
      title="Void Quote"
      visible={props.visible}
      okText="Void Quote"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to void this quote?</p>
    </Modal>
  );
};
export default QuoteVoid;
