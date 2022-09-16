import { Modal, Avatar, Input, Radio } from "@arco-design/web-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { TASK } from "@/constants";

const AddWorkspace = (props) => {
  const [avatarText, setAvatarText] = useState("A");
  const [avatarBg, setAvatarBg] = useState("gray");
  const bgcolor = [];
  return (
    <Modal
      title="Add Workspace"
      visible={props.visible}
      okText="Add Workspace"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="max-w-full"
    >
      <div className="flex">
        <div>
          <Avatar shape="square" size={60} className={`gk-bg ${avatarBg}`}>
            {avatarText}
          </Avatar>
        </div>
        <div className="flex-1 pl-4">
          <div>
            <label>
              Workspace name
              <Input
                allowClear
                placeholder="Add a workspace name"
                onChange={(e) => {
                  setAvatarText(e.charAt(0).toUpperCase() || "A");
                }}
                className="mt-1 mb-6"
              />
            </label>
          </div>
          <div>
            Background color
            <Radio.Group
              defaultValue={avatarBg}
              onChange={(e) => {
                setAvatarBg(e);
              }}
            >
              {TASK.COLORS.map((color) => (
                <Radio key={color} value={color}>
                  {({ checked }) => {
                    return (
                      <div
                        className={`w-8 h-8 rounded-full gk-bg ${color} ${
                          checked ? "" : "border-8 border-white"
                        }`}
                        key={color}
                      ></div>
                    );
                  }}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddWorkspace;
