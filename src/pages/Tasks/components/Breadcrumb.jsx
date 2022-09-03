import { Menu } from "@arco-design/web-react";
import { Link, useLocation } from "react-router-dom";

const TaskBreadcrumb = (props) => {
  return (
    <Breadcrumb className="mb-2">
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Tasks</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default TaskBreadcrumb;
