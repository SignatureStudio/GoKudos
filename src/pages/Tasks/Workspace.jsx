import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksWorkspaceNav from "./components/WorkspaceNav";
const TasksWorkspace = (props) => {
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TasksWorkspaceNav />
    </>
  );
};
export default TasksWorkspace;
