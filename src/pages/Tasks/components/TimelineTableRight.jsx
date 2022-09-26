import dayjs from "dayjs";
import interact from "interactjs";
import { debounce } from "lodash";

const TimelineTableLeft = (props) => {
  const config = {
    day: {
      width: 60,
      scale: "hour",
    },
    month: {
      width: 30,
      scale: "day",
    },
    year: {
      width: 5,
      scale: "day",
    },
  };
  let head = {
    row1: [],
    row2: [],
  };

  const current = {
    width: config[props.timeScale].width,
    scale: config[props.timeScale].scale,
  };
  switch (props.timeScale) {
    case "day":
      for (
        let d = new Date(props.start.$y, props.start.$M, props.start.$D);
        d < new Date(props.end.$y, props.end.$M, props.end.$D);
        d.setDate(d.getDate() + 1)
      ) {
        const day = dayjs(new Date(d));
        const key = day.format("YYYYMMDD");
        head.row1.push(
          <div
            className="head"
            key={key}
            style={{ width: config.day.width * 24 }}
          >
            {day.format("MMM D, YYYY")}
          </div>
        );
        for (let hr = 0; hr < 24; hr++) {
          let time = hr > 12 ? hr - 12 : hr;
          if (time === 0) {
            time = 12;
          }
          const ampm = hr < 12 ? "AM" : "PM";

          head.row2.push(
            <div
              className="head"
              key={`${key}${hr}`}
              style={{ width: config.day.width }}
            >
              {`${time} ${ampm}`}
            </div>
          );
        }
      }
      break;

    case "month":
      for (
        let d = new Date(props.start.$y, props.start.$M, props.start.$D);
        d < new Date(props.end.$y, props.end.$M, props.end.$D);
        d.setMonth(d.getMonth() + 1)
      ) {
        const month = dayjs(new Date(d));
        const daysInMonth = month.daysInMonth();

        const key = month.format("YYYYMM");
        head.row1.push(
          <div
            className="head"
            key={key}
            style={{ width: config.month.width * daysInMonth }}
          >
            {month.format("MMM YYYY")}
          </div>
        );
        for (let day = 1; day <= daysInMonth; day++) {
          head.row2.push(
            <div
              className="head"
              key={`${key}${day}`}
              style={{ width: config.month.width }}
            >
              {day}
            </div>
          );
        }
      }
      break;

    default:
      for (let year = props.start.$y; year <= props.end.$y; year++) {
        let daysInYear = 365;
        if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
          daysInYear = 366;
        }
        head.row1.push(
          <div
            className="head"
            key={year}
            style={{ width: config.year.width * daysInYear }}
          >
            {year}
          </div>
        );
        for (let month = 0; month < 12; month++) {
          let this_month = dayjs(new Date(year, month, 1));

          head.row2.push(
            <div
              className="head"
              key={`${year}${month}`}
              style={{ width: config.year.width * this_month.daysInMonth() }}
            >
              {this_month.format("MMM")}
            </div>
          );
        }
      }

      break;
  }
  let body = {
    bg: [],
    bar: [],
  };
  let bar_offset_top = 0;
  props.data.forEach((item) => {
    item.tasks.map((task, i) => {
      body.bg.push(
        <div className="row even:bg-gray-100" key={`${item.name}${i}`}></div>
      );

      const task_start = dayjs(task.startDate);
      const task_end = dayjs(task.endDate);
      const timeline_start =
        props.timeScale === "year"
          ? dayjs(new Date(props.start.$y, 0, 1))
          : props.start;
      const scale = current.scale;
      const width = current.width;

      const bar = {
        top: `${bar_offset_top * 2}rem`,
        left: task_start.diff(timeline_start, scale) * width,
        width: task_end.diff(task_start, scale) * width,
      };
      bar_offset_top++;

      body.bar.push(
        <div
          className={`bar ${task.status.color}`}
          style={{ width: bar.width, top: bar.top, left: bar.left }}
          key={`${item.name}${task.id}`}
          data-width={bar.width}
          data-left={bar.left}
          data-id={task.id}
        >
          <span>{task.name}</span>
        </div>
      );
    });
  });

  const roundup = (val, nearest) => {
    return val % nearest >= nearest / 2
      ? parseInt(val / nearest) * nearest + nearest
      : parseInt(val / nearest) * nearest;
  };
  var gridTarget = interact.snappers.grid({
    x: current.width,
    y: current.width,
  });
  let x = 0;
  let y = 0;
  interact(".bar").draggable({
    lockAxis: "x",
    edges: { top: true, left: true },
    modifiers: [interact.modifiers.snap({ targets: [gridTarget] })],
    // listeners: {
    //   move(e) {
    //     // console.log("bounce");
    //     const taskId = e.target.getAttribute("data-id");
    //     const left = parseInt(e.target.getAttribute("data-left"));
    //     x += roundup(e.dx, current.width);
    //     e.target.style.left = `${x}px`;
    //     e.target.setAttribute("data-left", x);

    //       console.log(
    //         {
    //           id: taskId,
    //           value: (x - left) / current.width,
    //           scale: current.scale,
    //           x: x,
    //           left: left,
    //         },
    //         200
    //       );
    //     });
    //   },
    // },
  }).on('dragmove dragend', showEventInfo)

  return (
    <div className="overflow-auto">
      <div className="min-w-fit">
        <div className="divide-y divide-gray-300 border-y border-r border-gray-300">
          <div className="row">{head.row1}</div>
          <div className="row">{head.row2}</div>
        </div>
        <div className="border-y border-r border-gray-300 relative">
          {body.bar}
          {body.bg}
        </div>
      </div>
    </div>
  );
};
export default TimelineTableLeft;
