import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksWorkspaceNav from "./components/WorkspaceNav";
const TasksWorkspace = (props) => {
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksWorkspaceNav />
    </>
  );
};
export default TasksWorkspace;
