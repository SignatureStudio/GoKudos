import {
  Modal,
  Avatar,
  Input,
  Radio,
  Carousel,
  Tag,
} from "@arco-design/web-react";
const InvoiceAdd = (props) => {
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
      <div className="flex-1 pl-4">
        <div>
          <label>
            <div>Do you want to create a new invoice from this quote?</div>
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceAdd;
