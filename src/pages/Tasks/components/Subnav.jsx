import SubnavWorkspace from "./SubnavWorkspace"
import SubnavProject from "./SubnavProject"
import SubnavFooter from "./SubnavFooter"

const TasksSubnav = (props) => {
  return (
    <aside className="subnav">
      <SubnavWorkspace />
      <SubnavProject />
      <SubnavFooter />
    </aside>
  );
};
export default TasksSubnav;
