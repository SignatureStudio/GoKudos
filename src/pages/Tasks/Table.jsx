import { tasksData } from "./utils/sample_data";
import { utils } from "./utils/Table.utils";
import { Table, Button, Collapse, Drawer } from "@arco-design/web-react";
import TasksTableNav from "./components/TableNav";
import TasksTableTable from "./components/TableTable";
import TasksHeader from "./components/Header";
// import { displayTasksBy } from "./utils/_utils";
import {
  IconPlus,
  IconCopy,
  IconExport,
  IconToRight,
  IconArchive,
  IconDelete,
} from "@arco-design/web-react/icon";
import { useState } from "react";

const TasksTable = (props) => {
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTableNav />
      <TasksTableTable data={tasksData} />
    </>
  );
};
export default TasksTable;
