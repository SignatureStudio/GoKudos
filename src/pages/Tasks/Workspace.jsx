import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TaskNav from "./components/TaskNav";
import TasksTableWorkspace from "./components/TableWorkspace";
import { useState } from "react";

const TasksWorkspace = (props) => {
  const [displayBy, setDisplayBy] = useState('group')
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab workspace={true} />
      <TaskNav displayBy={displayBy} setDisplayBy={setDisplayBy}  />
      <TasksTableWorkspace data={tasksData} displayBy={displayBy} />
    </>
  );
};
export default TasksWorkspace;
