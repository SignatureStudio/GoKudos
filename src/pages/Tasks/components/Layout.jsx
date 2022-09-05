import { Breadcrumb } from "@arco-design/web-react";
import { Link, Outlet } from "react-router-dom";

const TasksLayout = (props) => {
  return (
    <section className="bg-white">
      <Outlet />
    </section>
  );
};
export default TasksLayout;
