import { Tag, Avatar } from "@arco-design/web-react";
import dayjs from "dayjs";
import { IconDownload, IconUpload } from "@arco-design/web-react/icon";
import { useState } from "react";
import { faker } from "@faker-js/faker";

export const displayTasksBy = {
  group: function (list, action) {
    // console.log(action);
    let result = [];
    list.groups.map((listgroup, i) => {
      result.push({
        id: listgroup.id,
        name: listgroup.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.group.id === listgroup.id) {
              task["key"] = task.id;
              if (action instanceof Object) {
                task["action"] = action;
              }
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
  status: function (list, action) {
    let result = [];
    list.status.map((status, i) => {
      result.push({
        id: status.id,
        name: status.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.status.name === status.name) {
              task["key"] = task.id;
              if (action instanceof Object) {
                task["action"] = action;
              }
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
  member: function (list, action) {
    let result = [];
    list.members.map((member, i) => {
      result.push({
        id: member.id,
        name: member.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (
              task["members"].filter((e) => e.name === member.name).length > 0
            ) {
              task["key"] = task.id;
              if (action instanceof Object) {
                task["action"] = action;
              }
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
};
export const displayTimelineText = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  let startFormat = "MMM D, YYYY";
  let endFormat = "MMM D, YYYY";
  if (start.$y === end.$y) {
    if (start.$M === end.$M) {
      startFormat = "MMM D";
      endFormat = "D";
      if (start.$D === end.$D) {
        endFormat = " ";
      }
    } else {
      startFormat = "MMM D";
      endFormat = "MMM D";
    }
  }
  return (
    <div>
      {start.format(startFormat)} &ndash; {end.format(endFormat)}
    </div>
  );
};
export const displayTimeRange = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  let startFormat = "MMM D 'YY";
  let endFormat = "MMM D 'YY";
  const startTimeFormat = start.format("m") === "0" ? "hA" : "h:mmA";
  const endTimeFormat = end.format("m") === "0" ? "hA" : "h:mmA";
  if (start.$y === end.$y) {
    startFormat = "MMM D";
    endFormat = "MMM D";
  }
  return (
    <div className={`relative h-12 -m-2 w-full`}>
      <div className={`flex items-center h-full w-full absolute top-0 left-0`}>
        <div className="w-1/2 pl-2 py-2">
          <div>
            <span className="font-bold text-gray-300 mr-2">IN</span>
            {start.format(startFormat)}
            <Tag bordered className="ml-2 font-bold">
              {start.format(startTimeFormat)}
            </Tag>
          </div>
        </div>
        <div className="w-1/2 pl-2 py-2 border-l border-gray-200">
          <div>
            <span className="font-bold text-gray-300 mr-2">OUT</span>
            {end.format(endFormat)}
            <Tag bordered className="ml-2 font-bold">
              {start.format(endTimeFormat)}
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};
export const displayTimeline = (startDate, endDate, status) => {
  const doneId = 3;
  const onHoldId = 4;
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  let startFormat = "MMM D 'YY";
  let endFormat = "MMM D 'YY";
  const startTimeFormat = start.format("m") === "0" ? "hA" : "h:mmA";
  const endTimeFormat = end.format("m") === "0" ? "hA" : "h:mmA";
  const today = dayjs("12/21/2022"); // assumption

  const duration = end.diff(start, "h") + 1;
  const fromToday = today.diff(start, "h") + 1;
  let progressWidth = 0;
  let progressBg = "bg-gold-500";
  let progressBorder = "border-transparent";
  let textColor = "text-gray-900";
  let bgColor = "bg-gray-50";

  if (fromToday > 0) {
    if (fromToday < duration) {
      progressWidth = `${(fromToday / duration) * 100}%`;
    } else {
      progressWidth = `100%`;
    }
  }
  if (status.id === doneId) {
    progressBg = "bg-green-500";
    // progressBorder = "border-green-600";
    textColor = "text-green-600";
    progressWidth = `100%`;
    // bgColor = "bg-green-50"
  } else if (status.id === onHoldId) {
    progressBg = "bg-gray-200";
    progressWidth = `100%`;
    textColor = "text-gray-400";
  } else {
    // overdue
    if (today > end) {
      progressBg = "bg-red-500";
      // progressBorder = "border-red-600";
      textColor = "text-red-600";
      bgColor = "bg-red-50 font-bold";
    }
  }

  if (start.$y === end.$y) {
    // if (start.$M === end.$M) {
    //   startFormat = "MMM D";
    //   endFormat = "D";
    //   if (start.$D === end.$D) {
    //     endFormat = " ";
    //   }
    // } else {
    startFormat = "MMM D";
    endFormat = "MMM D";
    // }
  }
  return (
    <div className={`relative h-12 -m-2 w-full ${bgColor}`}>
      <div
        className={`h-1 absolute bottom-0 left-0 border ${progressBg} ${progressBorder}`}
        style={{ width: progressWidth }}
      ></div>
      <div
        className={`flex items-center h-full w-full absolute top-0 left-0 ${textColor}`}
      >
        <div className="w-1/2 pl-2 py-2">
          <div className="leading-none">{start.format(startFormat)}</div>
          <div className="text-xs opacity-50">
            {start.format(startTimeFormat)}
          </div>
        </div>
        <div className="w-1/2 pl-2 py-2 border-l border-gray-200">
          <div className="leading-none">{end.format(endFormat)}</div>
          <div className="text-xs opacity-50">{end.format(endTimeFormat)}</div>
        </div>
      </div>
    </div>
  );
};
export const analyseTasksBy = {
  status: function (list) {
    let result = [];
    list.status.map((status, i) => {
      result.push({
        id: status.id,
        name: status.name,
        color: status.color,
        value: 0,
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.status.id === status.id) {
              result[i].value++;
            }
          });
        });
      });
    });
    return result;
  },
  group: function (list) {
    let status = {};
    list.status.map((s, i) => {
      status[s.name] = 0;
    });

    let result = [];
    list.groups.map((group, i) => {
      result.push({
        name: group.name,
        ...status,
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.group.name === group.name) {
              result[i][task.status.name]++;
            }
          });
        });
      });
    });
    return result;
  },
  member: function (list) {
    let status = {};
    list.status.map((s, i) => {
      status[s.name] = 0;
    });

    let result = [];
    list.members.map((member, i) => {
      result.push({
        name: member.name,
        ...status,
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (
              task["members"].filter((e) => e.name === member.name).length > 0
            ) {
              result[i][task.status.name]++;
            }
          });
        });
      });
    });
    return result;
  },
};

export const getAllTasks = (list) => {
  let result = [];
  list.projects.map((project) => {
    project.groups.map((group) => {
      group.tasks.map((task) => {
        result.push({
          id: task.id,
          title: task.name,
          start: new Date(Date.parse(task.startDate)),
          end: new Date(Date.parse(task.endDate)),
          status: task.status,
        });
        if ("subtask")
          task.children.map((subtask) => {
            result.push({
              id: subtask.id,
              title: subtask.name,
              start: subtask.startDate,
              end: subtask.endDate,
              status: subtask.status,
            });
          });
      });
    });
  });
  return result;
};

export const displayTimeFromSeconds = (secs) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  return `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
};
export const getAllSelectedId = (arr) => {
  let result = [];
  arr.map((item) => result.push(item.id));
  return result;
};
