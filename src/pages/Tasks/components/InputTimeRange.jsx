import { DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { displayTimeRange } from "../utils/_utils";
import { TASK } from "@/constants";

const InputTimeRange = (props) => {
  const data = (props.data instanceof Object) ? props.data : {
    startDate: new Date(),
    endDate: new Date(),
    status: TASK.STATUS[0]
  }
  // console.log(data);
  const [start, setStart] = useState(dayjs(data.startDate));
  const [end, setEnd] = useState(dayjs(data.endDate));
  const [status, setStatus] = useState(data.status);
  return (
    // <div>TimeRange</div>
    <DatePicker.RangePicker
      showTime
      triggerElement={
        <div className="cursor-pointer">
          {displayTimeRange(start, end, status)}
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

export default InputTimeRange;
