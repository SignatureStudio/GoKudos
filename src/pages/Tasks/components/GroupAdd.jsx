import { Modal, Input } from "@arco-design/web-react";

const GroupAdd = (props) => {
  return (
    <Modal
      title="Add Group"
      visible={props.visible}
      okText="Add Group"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="pb-4">
          <label>
            <div className="mb-1">Group name</div>
            <Input
              allowClear
              placeholder="Add a group name"
            />
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default GroupAdd;
