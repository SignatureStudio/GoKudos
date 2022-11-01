import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksChartNav from "./components/ChartNav";
import TasksChartStatus from "./components/ChartStatus";
import TasksChartGroup from "./components/ChartGroup";
import TasksChartMember from "./components/ChartMember";
import TasksChartSummary from "./components/ChartSummary";

const TasksChart = (props) => {
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TasksChartNav />
      <div className="overflow-auto p-3 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TasksChartStatus data={tasksData} />
          <TasksChartGroup data={tasksData} />
          <TasksChartMember data={tasksData} />
          <TasksChartSummary data={tasksData} />
        </div>
      </div>
    </>
  );
};
export default TasksChart;
