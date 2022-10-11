import { Modal } from "@arco-design/web-react";

const QuoteDeleteItem = (props) => {
  return (
    <Modal
      title="Delete Item"
      visible={props.visible}
      okText="Delete Item"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to delete this item?</p>
    </Modal>
  );
};
export default QuoteDeleteItem;
