import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksTab from "./components/Tab";
import TasksNav from "./components/TaskNav";
import TasksTimelineNav from "./components/TimelineNav";
import TasksTimelineTable from "./components/TimelineTable";
import { useState } from "react";

const TasksTimeline = (props) => {
  const [displayBy, setDisplayBy] = useState('group')
  const [timeScale, setTimeScale] = useState('month')
  const [data, setData] = useState(tasksData)

  console.log('tasksData', tasksData);

  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksTab />
      <TasksNav displayBy={displayBy} setDisplayBy={setDisplayBy} />
      <TasksTimelineNav displayBy={displayBy} setDisplayBy={setDisplayBy} timeScale={timeScale} setTimeScale={setTimeScale} data={tasksData} setData={setData} />
      <div className="overflow-auto p-3 bg-gray-50">
        <TasksTimelineTable displayBy={displayBy} timeScale={timeScale} data={tasksData} />
      </div>
    </>
  );
};
export default TasksTimeline;
