import { Modal, Button, Input, Dropdown, Menu } from "@arco-design/web-react";
import { useState } from "react";
import {
  IconShareAlt,
  IconMoreVertical,
  IconHistory,
} from "@arco-design/web-react/icon";
import TaskChecklist from "./TaskChecklist";
import TaskAttachment from "./TaskAttachment";
import TaskDiscussion from "./TaskDiscussion";
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

const TaskEditSingle = (props) => {
  const [taskId, setTaskId] = useState(null);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const [modalTaskDuplicate, setModalTaskDuplicate] = useState(false);
  const [modalTaskMove, setModalTaskMove] = useState(false);
  const [modalTaskArchive, setModalTaskArchive] = useState(false);
  const menuTask = (
    <Menu>
      <Menu.Item key="1">Make a copy</Menu.Item>
      <hr />
      <Menu.Item key="2">Report abuse</Menu.Item>
      <hr />
      <Menu.Item key="3">Delete</Menu.Item>
    </Menu>
  );

  return (
    <section className="bg-white">
      <div className="flex items-center h-14 py-3">
        <h1 className="flex-1">Task Name</h1>
        <div className="pr-2">
          <Dropdown droplist={menuTask} trigger="click">
            <Button type="text" className="px-2">
              <IconMoreVertical className="text-gray-600 h-4 w-4" />
            </Button>
          </Dropdown>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 bg-white">
          <div className="p-1">
            <div className="p-4 text-gray-600">
              Description goes here
            </div>
          </div>
          <TaskChecklist />
          <TaskAttachment />
          <TaskDiscussion />
        </div>
        <div className="col-span-1 border-l border-gray-200 ">
          <div className="divide-y divide-gray-200 bg-white">
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
              <div className="flex-1">Tracking</div>
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
              <div className="flex-1">Project value</div>
              <div className="w-40">
                <InputText data={null} prefix="RM " placeholder="RM" />
              </div>
            </div>
            <div className="px-2 py-3 flex">
              <div className="flex-1">Planned effort</div>
              <div className="w-40">
                <InputText data={null} suffix=" hours" placeholder="Hours" />
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
          <hr />
          {/* <div className="p-1.5 flex">
            <InputProps text="Property" />
          </div> */}
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
    </section>
  );
};

export default TaskEditSingle;
