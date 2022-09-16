import {
  Modal,
  Avatar,
  Input,
  Radio,
  Checkbox,
  Popover,
  Collapse,
  Select,
} from "@arco-design/web-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { TASK } from "@/constants";
import { IconInfoCircle, IconRight, IconUp } from "@arco-design/web-react/icon";
import InputSelectMember from "./InputSelectMember";

const AddProject = (props) => {
  const [avatarText, setAvatarText] = useState("A");
  const [avatarBg, setAvatarBg] = useState("gray");
  const [visibility, setVisibility] = useState("public");
  const [showAdvance, setShowAdvance] = useState(false);

  const bgcolor = [];
  return (
    <Modal
      title="Add Project"
      visible={props.visible}
      okText="Add Project"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="max-w-full"
    >
      <div>
        <label>
          <div>Project name</div>
          <Input
            allowClear
            placeholder="Add a project name"
            onChange={(e) => {
              setAvatarText(e.charAt(0).toUpperCase() || "A");
            }}
            className="mt-1 mb-6"
          />
        </label>
      </div>
      <div>
        <label>
          <div>Visibility</div>
          <Radio.Group
            type="button"
            name="visibility"
            defaultValue={visibility}
            onChange={(e) => {
              setVisibility(e);
            }}
          >
            <Radio value="public">Public</Radio>
            <Radio value="member">Member only</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </label>
      </div>
      <hr className="mt-6" />
      <div>
        <div className="my-4">Add property</div>
        <Checkbox.Group
          onChange={(e) => {
            console.log(e);
          }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-3">
            {visibility !== "private" && (
              <>
                <div>
                  <Checkbox value="assignee">Assignee</Checkbox>
                  <Popover
                    trigger="click"
                    content={<span>People who work on the task</span>}
                  >
                    <IconInfoCircle className="text-gray-400" />
                  </Popover>
                </div>
                <div>
                  <Checkbox value="watchers">Watchers</Checkbox>
                  <Popover
                    trigger="click"
                    content={<span>People who can read only</span>}
                  >
                    <IconInfoCircle className="text-gray-400" />
                  </Popover>
                </div>
                <div>
                  <Checkbox value="contacts">Contacts</Checkbox>
                  <Popover
                    trigger="click"
                    content={<span>External party who work on the task</span>}
                  >
                    <IconInfoCircle className="text-gray-400" />
                  </Popover>
                </div>
              </>
            )}
            <div>
              <Checkbox value="tracking">Tracking</Checkbox>
              <Popover
                trigger="click"
                content={<span>Able to track time working on the task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="priority">Priority</Checkbox>
              <Popover
                trigger="click"
                content={<span>Set priority for the task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="tags">Tags</Checkbox>
              <Popover
                trigger="click"
                content={<span>Add tags to the task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="value">Value</Checkbox>
              <Popover
                trigger="click"
                content={<span>Estimated cost for the task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="effort">Effort</Checkbox>
              <Popover
                trigger="click"
                content={<span>Estimated effort in hour for the task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="reminder">Reminder</Checkbox>
              <Popover
                trigger="click"
                content={<span>Set a task reminder before due date</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
            <div>
              <Checkbox value="recurrence">Recurrence</Checkbox>
              <Popover
                trigger="click"
                content={<span>Create recurring task</span>}
              >
                <IconInfoCircle className="text-gray-400" />
              </Popover>
            </div>
          </div>
        </Checkbox.Group>
      </div>
      <hr className="mt-6" />
      {visibility !== "private" && (
        <>
          <div
            className="flex items-center my-4 px-1 cursor-pointer"
            onClick={() => setShowAdvance(!showAdvance)}
          >
            <div className="text-xs mr-1">
              {showAdvance ? <IconUp /> : <IconRight />}
            </div>
            <div>Advance</div>
          </div>
          {showAdvance && (
            <div className="px-3 mb-4 bg-gray-50 rounded grid md:grid-cols-2">
              <div className="py-3">
                <div>Project owner</div>
                <div>
                  <InputSelectMember
                    selected={["6f55ca23-0363-4aec-8ea1-add6d8d512e1"]}
                  />
                </div>
              </div>
              <div className="py-3">
                <div>External party</div>
                <div>
                  <InputSelectMember selected={[]} />
                </div>
              </div>
            </div>
          )}
          <hr />
        </>
      )}
      <div className="mt-4">
        <Checkbox>Save as draft</Checkbox>
      </div>
    </Modal>
  );
};

export default AddProject;
