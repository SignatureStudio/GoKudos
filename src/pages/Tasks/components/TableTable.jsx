import { tasksData } from "../utils/sample_data";
import { Table, Button, Collapse, Drawer } from "@arco-design/web-react";
import {
  IconPlus,
  IconCopy,
  IconExport,
  IconToRight,
  IconArchive,
  IconDelete,
} from "@arco-design/web-react/icon";
import { useState } from "react";
import { utils } from "../utils/Table.utils";
import { displayTasksBy } from "../utils/_utils";
import TaskAdd from "./TaskAdd";
import TaskDelete from "./TaskDelete";
import TaskDuplicate from "./TaskDuplicate";
import TaskMove from "./TaskMove";
import TaskArchive from "./TaskArchive";

const TasksTableTable = (props) => {
  const columns = [
    utils.columns.name,
    utils.columns.menu,
    utils.columns.status,
    utils.columns.duedate,
    utils.columns.members,
    utils.columns.activity,
    utils.columns.tracking,
    utils.columns.priority,
    utils.columns.value,
    utils.columns.effort,
    utils.columns.reminder,
    utils.columns.recurrence,
    utils.columns.tags,
    utils.columns.watchers,
    utils.columns.contacts,
    utils.columns.addprops,
  ];


  const [drawerAction, setDrawerAction] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const [taskId, setTaskId] = useState(null);
  const [modalTaskAdd, setModalTaskAdd] = useState(false);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const [modalTaskDuplicate, setModalTaskDuplicate] = useState(false);
  const [modalTaskMove, setModalTaskMove] = useState(false);
  const [modalTaskArchive, setModalTaskArchive] = useState(false);

  const taskAction = (id) => {
    return {
      id: id,
      task: setTaskId,
      edit: setModalTaskAdd,
      add: setModalTaskAdd,
      subtask: setModalTaskAdd,
      delete: setModalTaskDelete,
      duplicate: setModalTaskDuplicate,
      move: setModalTaskMove,
      archive: setModalTaskArchive,
    }
  }

  const projects = utils.mapData(tasksData, taskAction);
  return (
    <>
      <div className="p-3 bg-gray-50 gk-table">
        {projects[0].groups.map((group) => (
          <div key={group.id}>
            <Collapse bordered={false} defaultActiveKey={group.id}>
              <Collapse.Item
                header={<h2 className="py-0">{group.name}</h2>}
                name={group.id}
                className="p-0 bg-gray-50"
              >
                <Table
                  size="small"
                  scroll={{ x: true }}
                  rowSelection={{
                    type: "checkbox",
                    onChange: (selectedRowKeys, selectedRows) => {
                      // console.log(selectedRows.length)
                    },
                    onSelect: (record, selectedRows) => {
                      console.log(selectedCount);
                      const count = record
                        ? selectedCount + 1
                        : selectedCount - 1;
                      setSelectedCount(count);
                      // record ? count++ : count--

                      // console.log(selectedCount);
                      count > 0
                        ? setDrawerAction(true)
                        : setDrawerAction(false);
                      // console.log(record, selectedRows);
                    },
                  }}
                  columns={columns}
                  data={group.tasks}
                  pagination={false}
                  noDataElement={<div>NOTHING</div>}
                  className="border-gray-300 border rounded"
                  // defaultExpandAllRows={true}
                />
                <Button
                  size="mini"
                  type="text"
                  icon={<IconPlus />}
                  className="mt-2"
                  onClick={() => {
                    setModalTaskAdd(true)
                  }}
                >
                  Add Task
                </Button>
              </Collapse.Item>
            </Collapse>
          </div>
        ))}
      </div>
      <TaskAdd visible={modalTaskAdd} setVisible={setModalTaskAdd} />
      <TaskDelete visible={modalTaskDelete} setVisible={setModalTaskDelete} />
      <TaskDuplicate visible={modalTaskDuplicate} setVisible={setModalTaskDuplicate} />
      <TaskMove visible={modalTaskMove} setVisible={setModalTaskMove} />
      <TaskArchive visible={modalTaskArchive} setVisible={setModalTaskArchive} />
      <Drawer
        visible={drawerAction}
        placement="bottom"
        mask={false}
        title={null}
        footer={null}
        height={100}
        className="border-t border-gray-300 shadow-2xl"
      >
        <div className="text-center pt-2">
          <h3 className="mb-2">
            {selectedCount} {selectedCount > 1 ? "tasks" : "task"} selected
          </h3>
          <Button className="mx-1.5" icon={<IconCopy />}>
            Duplicate
          </Button>
          <Button className="mx-1.5" icon={<IconExport />}>
            Export
          </Button>
          <Button className="mx-1.5" icon={<IconToRight />}>
            Move
          </Button>
          <Button className="mx-1.5" icon={<IconArchive />}>
            Archive
          </Button>
          <Button status="danger" className="mx-1.5" icon={<IconDelete />}>
            Delete
          </Button>
        </div>
      </Drawer>
    </>
  );
};
export default TasksTableTable;
