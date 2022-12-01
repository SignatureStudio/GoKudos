import { Badge, Menu } from "@arco-design/web-react";
import { IconStarFill } from "@arco-design/web-react/icon";
import { Link, useLocation } from "react-router-dom";

const TasksTab = (props) => {
  const current = useLocation().pathname.split("/")[2] || "table";
  return (
    <Menu
      mode="horizontal"
      selectedKeys={current}
      className="border-b border-gray-300 nav"
    >
      <Link to="/tasks/">
        <Menu.Item key="table">Table</Menu.Item>
      </Link>
      {!props.workspace && (
        <Link to="/tasks/kanban">
          <Menu.Item key="kanban">
            Kanban
            {/* <Badge
              count={
                <IconStarFill style={{ fontSize: 12, color: "#D6001C" }} />
              }
              offset={[15, -1]}
            >
              Kanban
            </Badge> */}
          </Menu.Item>
        </Link>
      )}
      <Link to="/tasks/calendar">
        <Menu.Item key="calendar">Calendar</Menu.Item>
      </Link>
      <Link to="/tasks/timeline">
        <Menu.Item key="timeline">Timeline</Menu.Item>
      </Link>
      <Link to="/tasks/chart">
        <Menu.Item key="chart">Chart</Menu.Item>
      </Link>
      <Link to="/tasks/billing">
        <Menu.Item key="billing">Billing</Menu.Item>
      </Link>
    </Menu>
  );
};

export default TasksTab;
