import { tasksData } from "./utils/sample_data";
import TaskNav from "./components/TaskNav";
import TasksTableTable from "./components/TableTable";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import { useState } from "react";

const TasksTable = (props) => {
  const [displayBy, setDisplayBy] = useState('group')

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TaskNav displayBy={displayBy} setDisplayBy={setDisplayBy}  />
      <TasksTableTable data={tasksData} displayBy={displayBy} />
    </>
  );
};
export default TasksTable;
