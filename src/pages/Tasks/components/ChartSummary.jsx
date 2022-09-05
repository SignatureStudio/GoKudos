import { analyseTasksBy, getAllTasks } from "../utils/_utils";
import { PieChart, Pie } from "recharts";
import { Badge } from "@arco-design/web-react";

const TasksChartSummary = (props) => {
  // const data = analyseTasksBy.summary(props.data);
  const tasks = getAllTasks(props.data);
  return (
    <section className="w-full gk-chart bg-gray-50">
      <header>Summary</header>
      <article>
        <div className="grid grid-cols-3 gap-2">
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Groups
            <div className="text-2xl">{props.data.groups.length}</div>
          </div>
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Tasks
            <div className="text-2xl">{tasks.length}</div>
          </div>
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Members
            <div className="text-2xl">{props.data.members.length}</div>
          </div>
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Duration
            <div className="text-2xl">61d</div>
          </div>
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Conversation
            <div className="text-2xl">39</div>
          </div>
          <div className="px-4 py-8 text-center rounded bg-white shadow">
            Files
            <div className="text-2xl">9</div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default TasksChartSummary;
