import { Modal } from "@arco-design/web-react";

const ClaimDelete = (props) => {
  return (
    <Modal
      title="Delete Claim"
      visible={props.visible}
      okText="Delete Claim"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      okButtonProps={{ status: "danger" }}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-sm"
    >
      <p>Do you want to delete this claim?</p>
    </Modal>
  );
};

export default ClaimDelete;
