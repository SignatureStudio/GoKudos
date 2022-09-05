import { analyseTasksBy } from "../utils/_utils";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Badge } from "@arco-design/web-react";

const TasksChartGroup = (props) => {
  const data = analyseTasksBy.group(props.data);
  const fill = {
    red: "#F53F3F",
    orangered: "#F77234",
    orange: "#FF7D00",
    gold: "#F7BA1E",
    yellow: "#FADC19",
    lime: "#9FDB1D",
    green: "#00B42A",
    cyan: "#14C9C9",
    blue: "#3491FA",
    purple: "#722ED1",
    pinkpurple: "#D91AD9",
    magenta: "#F5319D",
    gray: "#86909c",
  }
  return (
    <section className="w-full gk-chart">
      <header>Group</header>
      <article>
        <div className="flex justify-center">
          <BarChart width={350} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.data.status.map((status) => (
              <Bar
                key={status.id}
                dataKey={status.name}
                color={status.color}
                stackId="a"
                fill={fill[status.color]}
              />
            ))}
          </BarChart>
        </div>
        <div className="flex justify-center">
          <div>
            {/* {data.map((status) => (
              <div>
                <Badge
                  key={status.id}
                  color={status.color}
                  text={
                    <div className="flex">
                      <div className="w-28">{status.name}</div>
                      <div>{status.value}</div>
                    </div>
                  }
                />
              </div>
            ))} */}
          </div>
        </div>
      </article>
    </section>
  );
};
export default TasksChartGroup;
