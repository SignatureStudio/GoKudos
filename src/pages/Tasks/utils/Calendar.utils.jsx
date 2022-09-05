// import { Tag, Avatar, Badge, Button } from "@arco-design/web-react";
// import { IconPlus } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
// import { displayTasksBy, displayTimeline } from "./_utils";

export const utils = {
  getAllTasks: function(list) {
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
};
