import { Modal, Button } from "@arco-design/web-react";

const ClaimAttachment = (props) => {
  return (
    <Modal
      title="Attachment"
      visible={props.visible}
      okText="Attachment"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      footer={null}
      autoFocus={false}
      focusLock={true}
      wrapClassName="full"
      className="w-full max-w-4xl"
    >
      <div
        className="overflow-auto border-b border-gray-200"
        style={{ height: `${80}vh` }}
      >
        <iframe
          src={props.file}
          frameborder="0"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-3 text-right">
        <Button onClick={() => props.setVisible(false)}>Close</Button>
      </div>
    </Modal>
  );
};

export default ClaimAttachment;
