import { Select, Button, Dropdown, Menu } from "@arco-design/web-react";
import { IconSearch, IconDown } from "@arco-design/web-react/icon";
import { useState } from "react";
import TaskAdd from "./TaskAdd";
import TaskImport from "./TaskImport";
import TaskSearch from "./TaskSearch";
import GroupAdd from "./GroupAdd";

const TasksTableNav = (props) => {
  const [modalTaskAdd, setModalTaskAdd] = useState(false);
  const [modalTaskImport, setModalTaskImport] = useState(false);
  const [modalTaskSearch, setModalTaskSearch] = useState(false);
  const [modalGroupAdd, setModalGroupAdd] = useState(false);
  const addList = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          setModalGroupAdd(true);
        }}
      >
        Add group
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          setModalTaskImport(true);
        }}
      >
        Import tasks
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="flex items-center h-12 border-b border-gray-300 px-2">
        <div>
          <Dropdown.Button
            type="primary"
            droplist={addList}
            trigger="click"
            icon={<IconDown />}
            size="small"
            onClick={() => {
              setModalTaskAdd(true);
            }}
          >
            + Task
          </Dropdown.Button>
        </div>
        <div className="flex-1 pl-2">
          <Select
            placeholder="Please select"
            // bordered={false}
            value={props.displayBy}
            onChange={(e) => {
              props.setDisplayBy(e);
            }}
            className="w-24"
          >
            <Select.Option value="group">Group</Select.Option>
            <Select.Option value="status">Status</Select.Option>
            <Select.Option value="member">Member</Select.Option>
          </Select>
        </div>
        <div>
          <Button
            icon={<IconSearch />}
            iconOnly
            onClick={() => {
              setModalTaskSearch(true);
            }}
          />
        </div>
      </div>
      <TaskAdd visible={modalTaskAdd} setVisible={setModalTaskAdd} />
      <TaskImport visible={modalTaskImport} setVisible={setModalTaskImport} />
      <TaskSearch visible={modalTaskSearch} setVisible={setModalTaskSearch} />
      <GroupAdd visible={modalGroupAdd} setVisible={setModalGroupAdd} />
    </>
  );
};
export default TasksTableNav;
