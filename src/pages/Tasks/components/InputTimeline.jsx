import { DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";
import { useState } from "react";
import { displayTimeline } from "../utils/_utils";

const InputTimeline = (props) => {
  const [start, setStart] = useState(dayjs(props.data.start));
  const [end, setEnd] = useState(dayjs(props.data.end));
  let startFormat = "MMM D, YYYY";
  let endFormat = "MMM D, YYYY";

  if (start.$y === end.$y) {
    if (start.$M === end.$M) {
      startFormat = "MMM D";
      endFormat = "D";
    } else {
      startFormat = "MMM D";
      endFormat = "MMM D";
    }
  }
  return (
    <DatePicker.RangePicker
      triggerElement={
        <div className="cursor-pointer">
          {displayTimeline(start, end)}
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

export default InputTimeline;
