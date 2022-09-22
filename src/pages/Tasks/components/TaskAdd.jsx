import { Modal, Select, Input } from "@arco-design/web-react";
import InputSelectStatus from "./InputSelectStatus";
import InputTimeline from "./InputTimeline";
import InputSelectMember from "./InputSelectMember";

const TaskAdd = (props) => {
  return (
    <Modal
      title="Add Task"
      visible={props.visible}
      okText="Add Task"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="pb-4">
          <label>
            <div className="mb-1">Task name</div>
            <Input
              allowClear
              placeholder="Add a task name"
              // className="bg-white large font-semibold"
            />
          </label>
        </div>
        <div>
          <div className="mb-1">Properties</div>
          <div className="p-0.5 bg-gray-100">
            <div className="border border-gray-200 rounded divide-y divide-gray-200 bg-white">
              <div className="px-2 py-3 flex items-center">
                <div className="flex-1">Group</div>
                <div className="w-40">
                  <Select>
                    <Select.Option value="1">A Group</Select.Option>
                    <Select.Option value="2">B Group</Select.Option>
                    <Select.Option value="3">C Group</Select.Option>
                  </Select>
                </div>
              </div>
              <div className="px-2 py-3 flex items-center">
                <div className="flex-1">Status</div>
                <div className="w-40">
                  <InputSelectStatus data={{}} />
                </div>
              </div>
              <div className="px-2 py-3 flex items-center">
                <div className="flex-1">Timeline</div>
                <div className="w-40 pl-2">
                  <InputTimeline data={null} />
                </div>
              </div>
              <div className="px-2 py-3 flex items-center">
                <div className="flex-1">Assignee</div>
                <div className="w-40">
                  <InputSelectMember data={[]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TaskAdd;
