import { Tag, Avatar } from "@arco-design/web-react";
import dayjs from "dayjs";

export const displayTasksBy = {
  group: function (list) {
    let result = [];
    list.groups.map((listgroup, i) => {
      result.push({
        name: listgroup.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.group.id === listgroup.id) {
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
  status: function (list) {
    let result = [];
    list.status.map((status, i) => {
      result.push({
        name: status.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.status.name === status.name) {
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
  member: function (list) {
    let result = [];
    list.members.map((member, i) => {
      result.push({
        name: member.name,
        tasks: [],
      });
      list.projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (
              task["members"].filter((e) => e.name === member.name).length > 0
            ) {
              result[i].tasks.push(task);
            }
          });
        });
      });
    });
    return result;
  },
};
export const displayTimeline = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
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
  return `${start.format(startFormat)} - ${end.format(endFormat)}`;
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
    let status = {}
    list.status.map((s, i) => {
      status[s.name] = 0
    })

    let result = [];
    list.groups.map((group, i) => {
      result.push({
        name: group.name,
        ...status
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
    let status = {}
    list.status.map((s, i) => {
      status[s.name] = 0
    })

    let result = [];
    list.members.map((member, i) => {
      result.push({
        name: member.name,
        ...status
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
  let result = []
  list.projects.map(project => {
    project.groups.map(group => {
      group.tasks.map(task => {
        result.push({
          id: task.id,
          title: task.name,
          start: new Date(Date.parse(task.startDate)),
          end: new Date(Date.parse(task.endDate)),
          status: task.status,
        })
        if ('subtask')
        task.subtasks.map(subtask => {
          result.push({
            id: subtask.id,
            title: subtask.name,
            start: subtask.startDate,
            end: subtask.endDate,
            status: subtask.status,
          })
        })
      })
    })
  })
  return result;
}
