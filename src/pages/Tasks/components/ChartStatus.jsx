import { analyseTasksBy } from "../utils/_utils";
import { PieChart, Pie } from "recharts";
import { Badge } from "@arco-design/web-react";

const TasksChartStatus = (props) => {
  const data = analyseTasksBy.status(props.data);
  return (
    <section className="w-full gk-chart">
      <header>Status</header>
      <article>
        <div className="flex justify-center">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
            ></Pie>
          </PieChart>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-2">
            {data.map((status) => (
              <div className="pr-8">
                <Badge
                  key={status.id}
                  color={status.color}
                  text={
                    <div>
                      {status.name}
                      <span className="ml-2 inline-block">({status.value})</span>
                    </div>
                    // <div className="flex">
                    //   <div className="w-28">{status.name}</div>
                    //   <div>{status.value}</div>
                    // </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
export default TasksChartStatus;
