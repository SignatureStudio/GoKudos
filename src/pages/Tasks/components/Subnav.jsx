import SubnavWorkspace from "./SubnavWorkspace"
import SubnavProject from "./SubnavProject"

const TasksSubnav = (props) => {
  return (
    <aside className="subnav">
      <SubnavWorkspace />
      <SubnavProject />
    </aside>
  );
};
export default TasksSubnav;
