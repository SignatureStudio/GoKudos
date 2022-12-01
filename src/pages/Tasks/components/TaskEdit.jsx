import {
  Modal,
  Button,
  Input,
  Dropdown,
  Menu,
  Tabs,
  Badge,
} from "@arco-design/web-react";
import { useState } from "react";
import {
  IconShareAlt,
  IconMoreVertical,
  IconHistory,
  IconStarFill,
} from "@arco-design/web-react/icon";
import TaskChecklist from "./TaskChecklist";
import TaskAttachment from "./TaskAttachment";
import TaskDiscussion from "./TaskDiscussion";
import TaskActivities from "./TaskActivities";
import TaskSignature from "./TaskSignature";
import InputSelectStatus from "./InputSelectStatus";
import InputTimeline from "./InputTimeline";
import InputSelectMember from "./InputSelectMember";
import InputTracking from "./InputTracking";
import InputPriority from "./InputPriority";
import InputText from "./InputText";
import InputReminder from "./InputReminder";
import InputRecurrence from "./InputRecurrence";
import InputTags from "./InputTags";
import InputProps from "./InputProps";
import TaskDelete from "./TaskDelete";
import TaskDuplicate from "./TaskDuplicate";
import TaskMove from "./TaskMove";
import TaskArchive from "./TaskArchive";
import { subtasksData } from "../utils/sample_data";
import TableSubtask from "./TableSubtask";

const TaskEdit = (props) => {
  const [taskId, setTaskId] = useState(null);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const [modalTaskDuplicate, setModalTaskDuplicate] = useState(false);
  const [modalTaskMove, setModalTaskMove] = useState(false);
  const [modalTaskArchive, setModalTaskArchive] = useState(false);

  return (
    <Modal
      title={
        <div className="flex items-center pr-4">
          <div className="flex-1">Edit Task</div>
          {/* <div>
            <Button
              size="mini"
              type="text"
              className="text-gray-400 text-sm pl-3 pr-0 pt-1"
            >
              <IconHistory className="text-gray-600 h-4 w-4" />
            </Button>
          </div> */}
          <div>
            <Button
              size="mini"
              type="text"
              className="text-gray-400 text-sm pl-3 pr-0 pt-1"
            >
              <IconShareAlt className="text-gray-600 h-4 w-4" />
            </Button>
          </div>
          <div>
            <Dropdown
              trigger="click"
              droplist={
                <Menu>
                  <Menu.Item
                    onClick={() => {
                      setTaskId(1);
                      setModalTaskDuplicate(true);
                    }}
                  >
                    Duplicate
                  </Menu.Item>
                  {/* <Menu.Item>Export</Menu.Item> */}
                  <Menu.Item
                    onClick={() => {
                      setTaskId(1);
                      setModalTaskMove(true);
                    }}
                  >
                    Move
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      setTaskId(1);
                      setModalTaskArchive(true);
                    }}
                  >
                    Archive
                  </Menu.Item>
                  <hr />
                  <Menu.Item
                    onClick={() => {
                      setTaskId(1);
                      setModalTaskSubtask(true);
                    }}
                  >
                    Add Subtask
                  </Menu.Item>
                  <hr />
                  <Menu.Item
                    onClick={() => {
                      setTaskId(1);
                      setModalTaskDelete(true);
                    }}
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              }
            >
              <Button
                type="text"
                size="small"
                icon={<IconMoreVertical className="text-gray-600" />}
              />
            </Dropdown>
            {/* <Button
              size="mini"
              type="text"
              className="text-gray-400 text-sm pl-3 pr-0 pt-1"
            >
              <IconMoreVertical className="text-gray-600 h-4 w-4" />
            </Button> */}
          </div>
        </div>
      }
      visible={props.visible}
      okText="Add Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-5xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 -my-6 -mx-5">
        <div className="col-span-2 overflow-auto border-b md:h-screen md:max-h-[60vh] md:border-r md:border-b-0 border-gray-200">
          <div className="p-1">
            <div className="">
              <label>
                {/* <div>Task name</div> */}
                <Input
                  allowClear
                  placeholder="Add a task name"
                  className="bg-white large font-semibold"
                />
              </label>
            </div>
            <div className="">
              <label>
                {/* <div>Description</div> */}
                <Input.TextArea
                  allowClear
                  autoSize
                  placeholder="Add a description"
                  className="bg-white text-gray-600"
                />
              </label>
            </div>
          </div>
          <Tabs defaultActiveTab="1">
            <Tabs.TabPane key="1" title="Details">
              <TaskChecklist />
              <TaskAttachment />
              <TaskDiscussion />
            </Tabs.TabPane>
            <Tabs.TabPane key="2" title="Subtasks">
              <TableSubtask data={subtasksData} />
            </Tabs.TabPane>
            <Tabs.TabPane key="3" title="Activities">
              <TaskActivities />
            </Tabs.TabPane>
            <Tabs.TabPane key="4" title="Signature">
              <TaskSignature />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="col-span-1 overflow-auto md:h-screen md:max-h-[60vh] p-2 bg-gray-100">
          <div className="border border-gray-200 rounded divide-y divide-gray-200 bg-white">
            <div className="px-2 py-3 flex">
              <div className="flex-1">Status</div>
              <div className="w-40">
                <InputSelectStatus data={{}} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Timeline</div>
              <div className="w-40 pl-2">
                <InputTimeline data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Assignee</div>
              <div className="w-40">
                <InputSelectMember data={[]} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Watchers</div>
              <div className="w-40">
                <InputSelectMember data={[]} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Contacts</div>
              <div className="w-40">
                <InputSelectMember data={[]} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">
                Tracking
                {/* <Badge
                  count={
                    <IconStarFill style={{ fontSize: 12, color: "#D6001C" }} />
                  }
                  offset={[15, -1]}
                >
                  Tracking
                </Badge> */}
              </div>
              <div className="w-40">
                <InputTracking data={{}} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Priority</div>
              <div className="w-40">
                <InputPriority data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Budget value</div>
              <div className="w-40">
                <InputText data={500} prefix="RM " placeholder="RM" />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Budget hours</div>
              <div className="w-40">
                <InputText data={3} suffix=" hours" placeholder="Hours" />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Reminder</div>
              <div className="w-40">
                <InputReminder data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Recurrence</div>
              <div className="w-40">
                <InputRecurrence data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Tags</div>
              <div className="w-40">
                <InputTags data={[]} />
              </div>
            </div>
          </div>
          <div className="p-1.5 flex">
            <InputProps text="Property" />
          </div>
          <hr />
          <h4 className="p-2">Actual</h4>
          <div className="border border-gray-200 rounded divide-y divide-gray-200 bg-white">
            <div className="px-2 py-3 flex">
              <div className="flex-1">Timeline</div>
              <div className="w-40 pl-2">
                <InputTimeline data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Actual value</div>
              <div className="w-40">
                <InputText data={null} prefix="RM " placeholder="RM" />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Actual hours</div>
              <div className="w-40">
                <InputText data={null} suffix=" hours" placeholder="Hours" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TaskDelete visible={modalTaskDelete} setVisible={setModalTaskDelete} />
      <TaskDuplicate
        visible={modalTaskDuplicate}
        setVisible={setModalTaskDuplicate}
      />
      <TaskMove visible={modalTaskMove} setVisible={setModalTaskMove} />
      <TaskArchive
        visible={modalTaskArchive}
        setVisible={setModalTaskArchive}
      />
    </Modal>
  );
};

export default TaskEdit;
