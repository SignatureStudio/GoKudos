import { tasksData } from "./utils/sample_data";
import { utils } from "./utils/Table.utils";
import { Table, Button } from "@arco-design/web-react";
import TasksTableNav from "./components/TableNav";
import TasksHeader from "./components/Header";
import { IconPlus } from "@arco-design/web-react/icon";

const TasksTable = (props) => {
  const columns = [
    utils.columns.name,
    utils.columns.status,
    utils.columns.duedate,
    utils.columns.members,
    utils.columns.tracking,
    {
      dataIndex: "addproperty",
      title: <span className="text-lg">+</span>,
      width: 30,
      align: "center",
    },
  ];

  const projects = utils.mapData(tasksData)
  // console.log(projects);

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTableNav />
      <div className="p-3 bg-gray-50">
        {projects[0].groups.map((group) => (
          <div key={group.id}>
            <h2>{group.name}</h2>
            <Table
              size="small"
              scroll={{ x: true }}
              rowSelection={{
                type: "checkbox",
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log(selectedRowKeys, selectedRows);
                },
              }}
              columns={columns}
              data={group.tasks}
              pagination={false}
              noDataElement={<div>NOTHING</div>}
              className="border-gray-300 border rounded"
              // defaultExpandAllRows={true}
            />
            <Button size="mini" type="text" icon={<IconPlus />} className="mt-2">Add Task</Button>
          </div>
        ))}
      </div>
    </>
  );
};
export default TasksTable;
