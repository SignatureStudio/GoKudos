import { tasksData } from "./utils/sample_data";
import TasksTableNav from "./components/TableNav";
import TasksTableTable from "./components/TableTable";
import TasksHeader from "./components/Header";
import { useState } from "react";

const TasksTable = (props) => {
  const [displayBy, setDisplayBy] = useState('group')

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTableNav displayBy={displayBy} setDisplayBy={setDisplayBy}  />
      <TasksTableTable data={tasksData} displayBy={displayBy} />
    </>
  );
};
export default TasksTable;
