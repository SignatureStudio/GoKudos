import { displayTasksBy } from "../utils/_utils";
import { Select, Radio, Button } from "@arco-design/web-react";
import TimelineTableLeft from "./TimelineTableLeft"
import TimelineTableRight from "./TimelineTableRight"

const TasksTimelineTable = (props) => {
  const colHeight = 2;
  const data = displayTasksBy[props.displayBy](props.data);

  console.log('data', data);

  return (
    <div className="flex gk-timeline">
      <TimelineTableLeft displayBy={props.displayBy} data={data} colHeight={colHeight} />
      <TimelineTableRight displayBy={props.displayBy} timeScale={props.timeScale} data={data} start={props.data.timeframe.start} end={props.data.timeframe.end} />
    </div>
  );
};
export default TasksTimelineTable;
