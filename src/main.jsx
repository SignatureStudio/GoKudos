import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App'
import "@arco-design/web-react/dist/css/arco.css";
import "@/index.css";
import { ConfigProvider } from "@arco-design/web-react";
import enUS from "@arco-design/web-react/es/locale/en-US";

import AppLayout from "@/layouts/AppLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard/page";
import TasksLayout from "@/pages/Tasks/components/Layout";
import TasksTable from "@/pages/Tasks/Table";
import TasksKanban from "@/pages/Tasks/Kanban";
import TasksCalendar from "@/pages/Tasks/Calendar";
import TasksTimeline from "@/pages/Tasks/Timeline";
import TasksChart from "@/pages/Tasks/Chart";
import TasksBilling from "@/pages/Tasks/Billing";
import TasksBillingInvoiceDetails from "@/pages/Tasks/BillingInvoiceDetails";
import TasksBillingQuotation from "@/pages/Tasks/BillingQuotation";
import TasksBillingQuotationDetails from "@/pages/Tasks/BillingQuotationDetails";
import TasksBillingQuote from "@/pages/Tasks/BillingQuote";
import TasksBillingClaims from "@/pages/Tasks/BillingClaims";
import TasksBillingTimeCost from "@/pages/Tasks/BillingTimeCost";
import TasksArchived from "@/pages/Tasks/Archived";
import TasksArchivedProjects from "@/pages/Tasks/ArchivedProjects";
import TasksWorkspace from "@/pages/Tasks/Workspace";
import Contacts from "@/pages/Contacts/page";
import TimeLayout from "@/pages/Time/components/Layout";
import Time from "@/pages/Time/Timesheet";
import Attendance from "@/pages/Time/Attendance";
import Project from "@/pages/Time/Project";
import Member from "@/pages/Time/Member";
import Invoices from "@/pages/Reports/Invoices";
import InvoicesDetails from "@/pages/Reports/InvoicesDetails";
import Shared from "@/pages/Shared/page";
import SettingsIntegrationsSql from "@/pages/Settings/Integrations/Sql";
import SettingsCompanySubscription from "@/pages/Settings/Company/Subscription";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={enUS}>
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
            <Route path="billing" element={<TasksBilling />} />
            <Route path="billing/invoices" element={<TasksBilling />} />
            <Route
              path="billing/invoices/details"
              element={<TasksBillingInvoiceDetails />}
            />
            <Route
              path="billing/quotations"
              element={<TasksBillingQuotation />}
            />
            <Route
              path="billing/quotations/details"
              element={<TasksBillingQuotationDetails />}
            />
            <Route path="billing/claims" element={<TasksBillingClaims />} />
            <Route path="billing/timecost" element={<TasksBillingTimeCost />} />
            <Route path="archived" element={<TasksArchived />} />
            <Route
              path="archivedprojects"
              element={<TasksArchivedProjects />}
            />
            <Route path="workspace" element={<TasksWorkspace />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/time" element={<TimeLayout />}>
            <Route index element={<Time />} />
            <Route path="timesheet" element={<Time />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="project" element={<Project />} />
            <Route path="member" element={<Member />} />
          </Route>
          <Route path="/reports" element={<Invoices />} />
          <Route path="/reports/details" element={<InvoicesDetails />} />
          <Route path="/shared" element={<Shared />} />
          <Route
            path="/settings/integrations/sql"
            element={<SettingsIntegrationsSql />}
          />
          <Route
            path="/settings/company/subscription"
            element={<SettingsCompanySubscription />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);
