import { tasksData } from "./utils/sample_data";
import { utils } from "./utils/Table.utils";
import { Table } from "@arco-design/web-react";
import TasksTableNav from "./components/TableNav";

const TasksTable = (props) => {
  const columns = [
    utils.columns.name,
    utils.columns.status,
    utils.columns.duedate,
    utils.columns.members,
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
      <TasksTableNav />
      <div className="p-3">
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
              className="task-table"
              // defaultExpandAllRows={true}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default TasksTable;
