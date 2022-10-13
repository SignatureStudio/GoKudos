import {
  Modal,
  Radio,
  Button,
  Input,
  Checkbox,
  Popover,
  Badge,
  Menu,
  Dropdown,
  Switch,
  Trigger,
} from "@arco-design/web-react";
import { useState } from "react";
import {
  IconInfoCircle,
  IconPlus,
  IconNotification,
  IconMoreVertical,
} from "@arco-design/web-react/icon";
import { TASK } from "@/constants";
import { faker } from "@faker-js/faker";
import InputStatusColor from "./InputStatusColor";

const ProjectTemplate = (props) => {
  const templates = [
    {
      id: 1,
      name: "Default template",
      property: [1, 2, 3, 4],
      status: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: "Custom template with long name 1",
      property: [1, 2, 3, 4, 5, 6],
      status: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 3,
      name: "Custom template 2",
      property: [1, 2, 3, 4, 5, 6],
      status: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: 4,
      name: "Custom template 2",
      property: [1, 2, 3, 4, 5, 6],
      status: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ];
  const [detail, setDetail] = useState(false);
  const [data, setData] = useState(templates[0]);
  const [action, setAction] = useState(false);
  const privateProject = false;
  const defaultStatus = TASK.STATUS;
  const [customStatus, setCustomStatus] = useState([
    {
      id: 1,
      name: "New status",
      color: "cyan",
    },
  ]);
  const menuStatusDefault = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex items-center w-32">
          <div className="flex-1">Notification</div>
          <div>
            <Checkbox checked />
            {/* <Switch size="small" defaultChecked /> */}
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );
  const menuStatusCustom = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex items-center w-32">
          <div className="flex-1">Notification</div>
          <div>
            <Checkbox />
            {/* <Switch size="small" defaultChecked className="bg-black" /> */}
          </div>
        </div>
      </Menu.Item>
      <hr />
      <Menu.Item key="3">Delete</Menu.Item>
    </Menu>
  );
  return (
    <div className="mt-2 bg-gray-100 rounded">
      {detail ? (
        <div className="p-3">
          <div className="mb-4">
            <div className="mb-1">Template name</div>
            <Input value={data.name} className="bg-white" />
          </div>
          <div className="mb-4">
            <div className="mb-1">Properties</div>
            <Checkbox.Group
              onChange={(e) => {
                console.log(e);
              }}
              className="w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-3">
                {!privateProject && (
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
                        content={
                          <span>External party who work on the task</span>
                        }
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
                    content={
                      <span>Able to track time working on the task</span>
                    }
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
          <div className="mb-4">
            <div className="mb-1">Status</div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                {defaultStatus.map((status) => (
                  <div className="flex items-center" key={status.id}>
                    <div className="px-1">
                      <Badge
                        key={status.id}
                        color={status.color}
                        dotStyle={{ width: 12, height: 12 }}
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        value={status.name}
                        placeholder="Add a status name"
                        className="px-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <Dropdown droplist={menuStatusDefault} trigger="click">
                        <div className="px-1">
                          <IconMoreVertical className="text-gray-400" />
                        </div>
                      </Dropdown>
                      <Popover
                        trigger="click"
                        content={<span>{status.description}</span>}
                      >
                        <IconInfoCircle className="text-gray-400" />
                      </Popover>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {customStatus.map((status) => (
                  <div className="flex items-center">
                    <InputStatusColor data={status} className="flex-1" />
                    <Dropdown droplist={menuStatusCustom} trigger="click">
                        <div className="px-1">
                          <IconMoreVertical className="text-gray-400" />
                        </div>
                      </Dropdown>
                    {/* <Checkbox value={true}>
                      {({ checked }) => {
                        return (
                          <IconNotification
                            className={
                              checked ? "text-gray-900" : "text-gray-400"
                            }
                          />
                        );
                      }}
                    </Checkbox>
                    <Popover
                      trigger="click"
                      content={<span>People who work on the task</span>}
                    ></Popover> */}
                  </div>
                ))}
                <Button
                  type="text"
                  className="px-1"
                  onClick={() => {
                    setCustomStatus([
                      ...customStatus,
                      {
                        id: faker.datatype.uuid(),
                        name: "",
                        color: "gray",
                      },
                    ]);
                  }}
                >
                  <div className="text-gray-600 hover:text-red-600">
                    <IconPlus className="mr-1" /> Add custom status
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="p-2 flex border-t border-gray-200 bg-gray-50">
            <div className="flex-1">
              <Button
                type="primary"
                size="small"
                onClick={() => setDetail(false)}
              >
                Confirm
              </Button>
              <Button size="small" onClick={() => setDetail(false)}>
                Cancel
              </Button>
            </div>
            <div>
              <Button size="small" type="text" onClick={() => setDetail(false)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="px-3 py-4">
            <Radio.Group
              defaultValue={1}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {templates.map((template) => (
                <Radio key={template.id} value={template.id}>
                  {({ checked }) => {
                    return (
                      <div
                        className={`rounded border p-2 h-40 -mr-5 -ml-1 bg-white ${
                          checked ? "border-red-600" : "border-gray-300"
                        }`}
                      >
                        <div className="h-16 font-bold">{template.name}</div>
                        <div className="text-gray-600">
                          <div>{template.property.length} Properties</div>
                          <div>{template.status.length} Status</div>
                        </div>
                        <div
                          className="text-brand-600 hover:text-brand-400 mt-2 z-50"
                          onClick={() => {
                            setAction(true);
                            setDetail(true);
                          }}
                        >
                          View/edit
                        </div>
                      </div>
                    );
                  }}
                </Radio>
              ))}
              <div
                className="border-2 border-dashed border-gray-300 text-center py-10 rounded hover:border-gray-900"
                onClick={() => {
                  setAction(true);
                  setDetail(true);
                }}
              >
                <IconPlus className="text-3xl text-gray-400 mb-2" />
                <div>Add template</div>
              </div>
            </Radio.Group>
          </div>
          <div className="p-3 text-center border-t border-gray-200 bg-gray-50">
            <Button
              size="small"
              className="mr-2"
              onClick={() => props.visible(false)}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="small"
              onClick={() => props.visible(false)}
            >
              Confirm
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectTemplate;
