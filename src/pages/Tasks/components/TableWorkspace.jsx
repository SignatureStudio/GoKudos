import { tasksData } from "../utils/sample_data";
import {
  Table,
  Button,
  Collapse,
  Drawer,
  Input,
  Tag,
} from "@arco-design/web-react";
import {
  IconPlus,
  IconCopy,
  IconExport,
  IconToRight,
  IconArchive,
  IconDelete,
  IconCheck,
  IconClose,
  IconSearch,
  IconEdit,
} from "@arco-design/web-react/icon";
import { useState } from "react";
import { utils } from "../utils/Table.utils";
import { displayTasksBy } from "../utils/_utils";
import TaskAdd from "./TaskAdd";
import TaskEdit from "./TaskEdit";
import TaskDelete from "./TaskDelete";
import TaskDuplicate from "./TaskDuplicate";
import TaskMove from "./TaskMove";
import TaskArchive from "./TaskArchive";
import InputText from "./InputText";
import SearchFilter from "./SearchFilter";
// import { useSearchParams, useNavigate } from "react-router-dom";
const TasksTableWorkspace = (props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const navigate = useNavigate();

  const columns = [
    utils.columns.name,
    utils.columns.menu,
    utils.columns.allstatus,
    utils.columns.duedate,
    utils.columns.members,
    utils.columns.activity,
    // utils.columns.tracking,
    // utils.columns.priority,
    // utils.columns.value,
    // utils.columns.effort,
    // utils.columns.reminder,
    // utils.columns.recurrence,
    // utils.columns.tags,
    utils.columns.watchers,
    utils.columns.contacts,
    // utils.columns.addprops,
  ];

  const [drawerAction, setDrawerAction] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const [taskId, setTaskId] = useState(null);
  const [modalTaskAdd, setModalTaskAdd] = useState(false);
  const [modalTaskEdit, setModalTaskEdit] = useState(false);
  const [modalTaskDelete, setModalTaskDelete] = useState(false);
  const [modalTaskDuplicate, setModalTaskDuplicate] = useState(false);
  const [modalTaskMove, setModalTaskMove] = useState(false);
  const [modalTaskArchive, setModalTaskArchive] = useState(false);

  const taskAction = {
    task: setTaskId,
    edit: setModalTaskEdit,
    add: setModalTaskAdd,
    subtask: setModalTaskAdd,
    delete: setModalTaskDelete,
    duplicate: setModalTaskDuplicate,
    move: setModalTaskMove,
    archive: setModalTaskArchive,
  };

  // const data = displayTasksBy[props.displayBy](tasksData, taskAction);
  // console.log('data', data);
  const data = [
    {
      id: "d4f9b5c0-7e77-43e9-9233-13e5cd72cf1a",
      name: "A Project",
      tasks: [
        {
          id: "f5959ce2-76b6-49e5-a62b-532986375838",
          name: "A Group",
          status: [
            {
              id: 1,
              name: "To do",
              color: "blue",
              value: 2,
            },
            {
              id: 2,
              name: "Doing",
              color: "gold",
              value: 2,
            },
            {
              id: 3,
              name: "Done",
              color: "green",
              value: 1,
            },
            {
              id: 4,
              name: "On hold",
              color: "red",
              value: 1,
            },
          ],
          startDate: "2022-12-01T00:12:00.000+08:00",
          endDate: "2022-12-01T00:23:00.000+08:00",
          comments: [
            {
              member: [
                {
                  id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
                  name: "C Member",
                  avatar: "/dummy/face3.jpg",
                },
                {
                  id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
                  name: "A Member",
                  avatar: "/dummy/face1.jpg",
                },
              ],
              message:
                "Adipisci repellat alias in illum harum fugit autem occaecati.\nConsectetur deserunt eos tempore cumque.",
              time: "1970-01-01T20:24:35.592Z",
            },
            {
              member: [
                {
                  id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
                  name: "B Member",
                  avatar: "/dummy/face2.jpg",
                },
              ],
              message:
                "Placeat et ea rerum aperiam totam eum dignissimos impedit qui.",
              time: "1970-01-01T07:42:09.054Z",
            },
          ],
          attachments: [],
          company: "TCH Sdn Bhd",
          workspace: "A Workspace",
          project: "A Project",
          group: {
            id: "d4f9b5c0-7e77-43e9-9233-13e5cd72cf1a",
            name: "A Group",
          },
          members: [
            {
              id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
              name: "A Member",
              avatar: "/dummy/face1.jpg",
            },
            {
              id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
              name: "C Member",
              avatar: "/dummy/face3.jpg",
            },
          ],
          watchers: [],
          contacts: [],
          value: null,
          description: "",
          effort: null,
          tags: [],
          reminder: null,
          recurrence: null,
          checklist: [],
          tracking: 0,
          priority: "High",
          children: [],
          key: "f5959ce2-76b6-49e5-a62b-532986375838",
          action: {},
        },
        {
          id: "5f91b11a-5c40-4d47-8ae9-7a2f2745add8",
          name: "B Group",
          status: [
            {
              id: 1,
              name: "To do",
              color: "blue",
              value: 2,
            },
            {
              id: 2,
              name: "Doing",
              color: "gold",
              value: 2,
            },
            {
              id: 3,
              name: "Done",
              color: "green",
              value: 1,
            },
            {
              id: 4,
              name: "On hold",
              color: "red",
              value: 1,
            },
          ],
          startDate: "2022-12-06T00:12:00.000+08:00",
          endDate: "2022-12-21T00:23:00.000+08:00",
          comments: [],
          attachments: [
            {
              member: [
                {
                  id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
                  name: "A Member",
                  avatar: "/dummy/face1.jpg",
                },
                {
                  id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
                  name: "B Member",
                  avatar: "/dummy/face2.jpg",
                },
                {
                  id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
                  name: "C Member",
                  avatar: "/dummy/face3.jpg",
                },
              ],
              file: "deskill.pdf",
              time: "1970-01-01T14:33:12.228Z",
            },
            {
              member: [
                {
                  id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
                  name: "C Member",
                  avatar: "/dummy/face3.jpg",
                },
                {
                  id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
                  name: "A Member",
                  avatar: "/dummy/face1.jpg",
                },
                {
                  id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
                  name: "B Member",
                  avatar: "/dummy/face2.jpg",
                },
              ],
              file: "cyan_principal_json.m2a",
              time: "1970-01-01T08:08:51.696Z",
            },
            {
              member: [
                {
                  id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
                  name: "C Member",
                  avatar: "/dummy/face3.jpg",
                },
              ],
              file: "intranet.pdf",
              time: "1970-01-01T10:52:18.941Z",
            },
          ],
          company: "TCH Sdn Bhd",
          workspace: "A Workspace",
          project: "A Project",
          group: {
            id: "d4f9b5c0-7e77-43e9-9233-13e5cd72cf1a",
            name: "A Group",
          },
          members: [
            {
              id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
              name: "B Member",
              avatar: "/dummy/face2.jpg",
            },
            {
              id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
              name: "A Member",
              avatar: "/dummy/face1.jpg",
            },
          ],
          watchers: [],
          contacts: [],
          value: null,
          description: "",
          effort: null,
          tags: [],
          reminder: null,
          recurrence: null,
          checklist: [],
          tracking: 0,
          priority: "High",
          children: [],
          key: "5f91b11a-5c40-4d47-8ae9-7a2f2745add8",
          action: {},
        },
      ],
    },
    {
      id: "b097a7dc-e957-4063-9ed1-e94df0b42056",
      name: "B Project",
      tasks: [
        {
          id: "f2445423-d7dc-4dac-b95f-8e584e20d67f",
          name: "A Group",
          status: [
            {
              id: 1,
              name: "To do",
              color: "blue",
              value: 2,
            },
            {
              id: 2,
              name: "Doing",
              color: "gold",
              value: 2,
            },
            {
              id: 3,
              name: "Done",
              color: "green",
              value: 1,
            },
            {
              id: 4,
              name: "On hold",
              color: "red",
              value: 1,
            },
          ],
          startDate: "2022-12-16T00:12:00.000+08:00",
          endDate: "2022-12-26T00:23:00.000+08:00",
          comments: [],
          attachments: [],
          company: "TCH Sdn Bhd",
          workspace: "A Workspace",
          project: "A Project",
          group: {
            id: "b097a7dc-e957-4063-9ed1-e94df0b42056",
            name: "B Group",
          },
          members: [
            {
              id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
              name: "A Member",
              avatar: "/dummy/face1.jpg",
            },
            {
              id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
              name: "B Member",
              avatar: "/dummy/face2.jpg",
            },
          ],
          watchers: [],
          contacts: [],
          value: null,
          description: "",
          effort: null,
          tags: [],
          reminder: null,
          recurrence: null,
          checklist: [],
          tracking: 0,
          priority: "High",
          children: [],
          key: "f2445423-d7dc-4dac-b95f-8e584e20d67f",
          action: {},
        },
        {
          id: "8c7d5622-eef1-4dc8-86e1-79508a02f031",
          name: "B Group",
          status: [
            {
              id: 1,
              name: "To do",
              color: "blue",
              value: 2,
            },
            {
              id: 2,
              name: "Doing",
              color: "gold",
              value: 2,
            },
            {
              id: 3,
              name: "Done",
              color: "green",
              value: 1,
            },
            {
              id: 4,
              name: "On hold",
              color: "red",
              value: 1,
            },
          ],
          startDate: "2022-12-21T00:12:00.000+08:00",
          endDate: "2023-01-05T00:23:00.000+08:00",
          comments: [
            {
              member: [
                {
                  id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
                  name: "A Member",
                  avatar: "/dummy/face1.jpg",
                },
              ],
              message: "Eum omnis dolorem reiciendis quas quo dolore neque.",
              time: "1970-01-01T00:39:27.793Z",
            },
          ],
          attachments: [],
          company: "TCH Sdn Bhd",
          workspace: "A Workspace",
          project: "A Project",
          group: {
            id: "b097a7dc-e957-4063-9ed1-e94df0b42056",
            name: "B Group",
          },
          members: [
            {
              id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
              name: "C Member",
              avatar: "/dummy/face3.jpg",
            },
            {
              id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
              name: "B Member",
              avatar: "/dummy/face2.jpg",
            },
          ],
          watchers: [],
          contacts: [],
          value: null,
          description: "",
          effort: null,
          tags: [],
          reminder: null,
          recurrence: null,
          checklist: [],
          tracking: 0,
          priority: "High",
          children: [],
          key: "8c7d5622-eef1-4dc8-86e1-79508a02f031",
          action: {},
        },
      ],
    },
  ];

  return (
    <>
      <div className="p-3 bg-gray-50 gk-table">
        <SearchFilter />
        {data.map((group) => (
          <div key={group.id}>
            <Collapse bordered={false} defaultActiveKey={group.id}>
              <Collapse.Item
                header={
                  <h2 className="-mt-1.5">
                    <InputText
                      data={group.name}
                      placeholder="Add a group name"
                    />
                  </h2>
                }
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
                      count > 0
                        ? setDrawerAction(true)
                        : setDrawerAction(false);
                    },
                  }}
                  columns={columns}
                  data={group.tasks}
                  pagination={false}
                  noDataElement={<div>NOTHING</div>}
                  className="border-gray-300 border rounded"
                />
              </Collapse.Item>
            </Collapse>
          </div>
        ))}
        {props.displayBy === "group" && (
          <Button
            size="mini"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => {
              setModalTaskEdit(true);
            }}
          >
            Add Group
          </Button>
        )}
      </div>
      <TaskAdd visible={modalTaskAdd} setVisible={setModalTaskAdd} />
      <TaskEdit visible={modalTaskEdit} setVisible={setModalTaskEdit} />
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
export default TasksTableWorkspace;
