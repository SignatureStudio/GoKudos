import {
  Modal,
  Avatar,
  Input,
  Radio,
  Checkbox,
  Popover,
  Collapse,
  Select,
  Button,
} from "@arco-design/web-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { TASK } from "@/constants";
import {
  IconInfoCircle,
  IconCaretRight,
  IconCaretUp,
  IconApps,
} from "@arco-design/web-react/icon";
import InputSelectMember from "./InputSelectMember";
import ProjectTemplate from "./ProjectTemplate";

const ProjectAdd = (props) => {
  const [avatarText, setAvatarText] = useState("A");
  const [avatarBg, setAvatarBg] = useState("gray");
  const [visibility, setVisibility] = useState("public");
  const [showAdvance, setShowAdvance] = useState(false);
  const selectedTemplate = "Default";
  const [modalProjectTemplate, setModalProjectTemplate] = useState(false);

  const bgcolor = [];
  return (
    <>
      <Modal
        title="Add Project"
        visible={props.visible}
        okText="Add Project"
        onOk={() => props.setVisible(false)}
        onCancel={() => props.setVisible(false)}
        autoFocus={false}
        focusLock={true}
        className="w-full max-w-lg"
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
          <div className="mt-4 mb-1">Project template</div>
          {!modalProjectTemplate ? (
            <div
              className="flex items-center cursor-pointer bg-gray-100 hover:bg-gray-200 py-1.5 px-3"
              onClick={() => setModalProjectTemplate(true)}
            >
              <div className="flex-1">Default template</div>
              <IconApps className="text-gray-600" />
            </div>
          ) : (
            <ProjectTemplate visible={setModalProjectTemplate} />
          )}
        </div>
        <hr className="mt-6" />
        {visibility !== "private" && (
          <>
            <div
              className="flex items-center my-4 px-1 cursor-pointer"
              onClick={() => setShowAdvance(!showAdvance)}
            >
              <div className="text-xs mr-1">
                {showAdvance ? <IconCaretUp /> : <IconCaretRight />}
              </div>
              <div>Advance</div>
            </div>
            {showAdvance && (
              <div className="px-3 mb-4 bg-gray-50 rounded grid md:grid-cols-2">
                <div className="py-3">
                  <div>Project owner</div>
                  <div>
                    <InputSelectMember
                      data={["6f55ca23-0363-4aec-8ea1-add6d8d512e1"]}
                    />
                  </div>
                </div>
                <div className="py-3">
                  <div>External party</div>
                  <div>
                    <InputSelectMember data={[]} />
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
      {/* <ProjectTemplate
        visible={modalProjectTemplate}
        setVisible={setModalProjectTemplate}
      /> */}
    </>
  );
};

export default ProjectAdd;
