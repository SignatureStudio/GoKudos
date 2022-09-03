import { Breadcrumb } from "@arco-design/web-react";
import { Link, Outlet } from "react-router-dom";
import TasksTab from "./Tab";
import TasksHeader from "./Header";

const TasksLayout = (props) => {
  return (
    <section className="bg-white">
      <div>
        <TasksHeader name="Project B" />
        <h1></h1>
        <TasksTab />
        <Outlet />
      </div>
    </section>
  );
};
export default TasksLayout;
