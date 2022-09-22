import { DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { displayTimeline } from "../utils/_utils";

const InputActivity = (props) => {
  // console.log(props.data);
  const [start, setStart] = useState(dayjs(props.data.startDate));
  const [end, setEnd] = useState(dayjs(props.data.endDate));
  return (
    // <div>Timeline</div>
    <DatePicker.RangePicker
      showTime
      triggerElement={
        <div className="cursor-pointer">
          {displayTimeline(start, end, props.data.status)}
        </div>
      }
      defaultValue={[start, end]}
      onChange={(value) => {
        setStart(dayjs(value[0]))
        setEnd(dayjs(value[1]))
        console.log(value);
      }}
    />
  );
};

export default InputActivity;
