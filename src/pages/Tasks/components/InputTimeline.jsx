import { Button, DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { displayTimeline } from "../utils/_utils";
import { TASK } from "@/constants";

const InputTimeline = (props) => {
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
    // <div>Timeline</div>
    <DatePicker.RangePicker
      showTime
      triggerElement={
        <div className="cursor-pointer">
          {displayTimeline(start, end, status)}
        </div>
      }
      defaultValue={[start, end]}
      onChange={(value) => {
        setStart(dayjs(value[0]))
        setEnd(dayjs(value[1]))
        console.log(value);
      }}
      extra={(<Button>Clear</Button>)}
      // shortcuts={[
      //   {
      //     text: 'Clear',
      //     value: () => dayjs().add(1, 'month'),
      //   },
      // ]}
    />
  );
};

export default InputTimeline;
