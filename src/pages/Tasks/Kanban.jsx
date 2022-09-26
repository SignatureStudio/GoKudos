import { tasksData } from "./utils/sample_data";
import TasksNav from "./components/TaskNav";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import KanbanBoard from "./components/KanbanBoard";
import { useState } from "react";

const TasksKanban = (props) => {
  const [displayBy, setDisplayBy] = useState('group')

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TasksNav displayBy={displayBy} setDisplayBy={setDisplayBy} />
      <KanbanBoard data={tasksData} displayBy={displayBy} />
    </>
  );
};
export default TasksKanban;
