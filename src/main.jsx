import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App'
import "@arco-design/web-react/dist/css/arco.css";
import "@/index.css";

import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard/page";
import TasksLayout from "@/pages/Tasks/components/Layout";
import TasksTable from "@/pages/Tasks/Table";
import TasksKanban from "@/pages/Tasks/Kanban";
import TasksCalendar from "@/pages/Tasks/Calendar";
import TasksTimeline from "@/pages/Tasks/Timeline";
import TasksChart from "@/pages/Tasks/Chart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<TasksLayout />}>
          <Route index element={<TasksTable />} />
          <Route path="kanban" element={<TasksKanban />} />
          <Route path="calendar" element={<TasksCalendar />} />
          <Route path="timeline" element={<TasksTimeline />} />
          <Route path="chart" element={<TasksChart />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
