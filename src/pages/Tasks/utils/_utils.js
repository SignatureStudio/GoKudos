import { Tag, Avatar } from "@arco-design/web-react";
import dayjs from "dayjs";

export const displayTasksBy = {
  status: function(list) {
    let result = []
    list.status.map((status, i) => {
      result.push({
        name: status.name,
        tasks: []
      })
      list.projects.map(project => {
        project.groups.map(group => {
          group.tasks.map(task => {
            if (task.status.name === status.name) {
              result[i].tasks.push(task)
            }
          })
        })
      })
    })
    return result;
  },
  members: function(list) {
    let result = {}
    list.members.map((member, i) => {
      result.push({
        name: member.name,
        tasks: []
      })
      list.projects.map(project => {
        project.groups.map(group => {
          group.tasks.map(task => {
            if (task['members'].filter((e) => e.name === member.name).length > 0) {
              result[i].tasks.push(task);
            }
            })
        })
      })
    })
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
  return `${start.format(startFormat)} - ${end.format(endFormat)}`
}
