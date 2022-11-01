import { IconDragArrow } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import interact from "interactjs";
import { useState } from "react";
import TaskEdit from "./TaskEdit";

const TimelineTableLeft = (props) => {
  const [modalTaskEdit, setModalTaskEdit] = useState(false);
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

  const bgHtml = (item, index) => {
    return (
      <div className="row even:bg-gray-100" key={`${item.name}${index}`}></div>
    );
  };
  const barHtml = (task, current, props, item, parent = null) => {
    const task_start = dayjs(task.startDate);
    const task_end = dayjs(task.endDate);
    const actual_start = dayjs(task.actualStartDate);
    const actual_end = dayjs(task.actualEndDate);
    const timeline_start =
      props.timeScale === "year"
        ? dayjs(new Date(props.start.$y, 0, 1))
        : props.start;
    const scale = current.scale;
    const width = current.width;

    let bar = {
      top: `${bar_offset_top * 2}rem`,
      left: task_start.diff(timeline_start, scale) * width,
      width: task_end.diff(task_start, scale) * width || width,
      actualTop: `${bar_offset_top * 2 + 1.5}rem`,
      actualLeft: actual_start.diff(timeline_start, scale) * width,
      actualWidth: actual_end.diff(actual_start, scale) * width || width,
    };

    if (parent) {
      const parent_start = dayjs(parent.startDate);
      const parent_end = dayjs(parent.endDate);
      bar["parent_left"] = parent_start.diff(timeline_start, scale) * width;
      bar["parent_width"] =
        parent_end.diff(parent_start, scale) * width || width;
    }

    return (
      <>
        {parent && (
          <div
            className={`bar-parent`}
            style={{ 
              //width: bar.parent_width, 
              top: bar.top, left: bar.parent_left }}
            key={`${item.name}${task.id}`}
          >
          </div>
        )}
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
        <div
          className={`bar-actual ${task.status.color}`}
          style={{
            width: bar.actualWidth,
            top: bar.actualTop,
            left: bar.actualLeft,
          }}
          key={`${item.name}${task.id}`}
          data-id={task.id}
        ></div>
      </>
    );
  };

  let bar_offset_top = 0;
  props.data.forEach((item) => {
    item.tasks.map((task, i) => {
      body.bg.push(
        bgHtml(item, i)
        // <div className="row even:bg-gray-100" key={`${item.name}${i}`}></div>
      );

      // const task_start = dayjs(task.startDate);
      // const task_end = dayjs(task.endDate);
      // const actual_start = dayjs(task.actualStartDate);
      // const actual_end = dayjs(task.actualEndDate);
      // const timeline_start =
      //   props.timeScale === "year"
      //     ? dayjs(new Date(props.start.$y, 0, 1))
      //     : props.start;
      // const scale = current.scale;
      // const width = current.width;

      // const bar = {
      //   top: `${bar_offset_top * 2}rem`,
      //   left: task_start.diff(timeline_start, scale) * width,
      //   width: task_end.diff(task_start, scale) * width || width,
      //   actualTop: `${bar_offset_top * 2 + 1.5}rem`,
      //   actualLeft: actual_start.diff(timeline_start, scale) * width,
      //   actualWidth: actual_end.diff(actual_start, scale) * width || width,
      // };

      body.bar.push(
        barHtml(task, current, props, item)
        // <>
        //   <div
        //     className={`bar ${task.status.color}`}
        //     style={{ width: bar.width, top: bar.top, left: bar.left }}
        //     key={`${item.name}${task.id}`}
        //     data-width={bar.width}
        //     data-left={bar.left}
        //     data-id={task.id}
        //   >
        //     <span>{task.name}</span>
        //   </div>
        //   <div
        //     className={`bar-actual ${task.status.color}`}
        //     style={{
        //       width: bar.actualWidth,
        //       top: bar.actualTop,
        //       left: bar.actualLeft,
        //     }}
        //     key={`${item.name}${task.id}`}
        //     data-id={task.id}
        //   ></div>
        // </>
      );
      bar_offset_top++;

      task.children.map((child) => {
        console.log("child", child);
        body.bg.push(bgHtml(child, i));
        body.bar.push(barHtml(child, current, props, item, task));
        bar_offset_top++;
      });
    });
  });

  const roundup = (val, nearest) => {
    return Math.round(val / nearest) * nearest;
  };
  var gridTarget = interact.snappers.grid({
    x: current.width,
    y: current.width,
  });
  let x = 0;
  let y = 0;
  interact(".bar")
    .draggable({
      autoScroll: true,
      lockAxis: "x",
      edges: { top: true, left: true },
      modifiers: [interact.modifiers.snap({ targets: [gridTarget] })],
      listeners: {
        move(e) {
          const left = parseInt(e.target.getAttribute("data-left")) || 0;
          x += roundup(e.dx, current.width);
          e.target.style.left = `${left + x}px`;
        },
        end(e) {
          const taskId = e.target.getAttribute("data-id");
          const left = parseInt(e.target.getAttribute("data-left")) || 0;
          x += roundup(e.dx, current.width);
          console.log({
            id: taskId,
            value: (x - left) / current.width,
            scale: current.scale,
            x: x,
            left: left,
          });
          e.target.setAttribute("data-left", x);
        },
      },
    })
    .resizable({
      edges: { top: false, left: true, bottom: false, right: true },
      modifiers: [interact.modifiers.snap({ targets: [gridTarget] })],
      listeners: {
        move(e) {
          const left = parseInt(e.target.getAttribute("data-left")) || 0;

          let { x } = e.target.dataset;
          x = (parseFloat(x) || 0) + e.deltaRect.left;

          Object.assign(e.target.style, {
            width: `${roundup(e.rect.width, current.width)}px`,
            left: `${left + roundup(x, current.width)}px`,
          });

          Object.assign(e.target.dataset, { x });
        },
        end(e) {
          const dataId = e.target.getAttribute("data-id");
          const dataWidth = parseInt(e.target.getAttribute("data-width"));
          const dataLeft = parseInt(e.target.getAttribute("data-left"));
          const styleWidth = parseInt(e.target.style.width.replace("px", ""));
          const styleLeft = parseInt(e.target.style.left.replace("px", ""));

          console.log({
            id: dataId,
            start: (styleLeft - dataLeft) / current.width,
            duration: styleWidth / current.width,
            unit: current.scale,
          });
        },
      },
    })
    .on("tap", function (e) {
      setModalTaskEdit(true);
    });

  return (
    <>
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
      <TaskEdit visible={modalTaskEdit} setVisible={setModalTaskEdit} />
    </>
  );
};
export default TimelineTableLeft;
