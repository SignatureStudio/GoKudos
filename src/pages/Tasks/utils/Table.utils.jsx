import { Tag, Avatar, Badge, Button } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { displayTasksBy, displayTimeline } from "./_utils";

export const utils = {
  columns: {
    name: {
      dataIndex: "name",
      title: "Name",
      width: 200,
      render: (col, record, index) => {
        let children = "";
        if ("children" in record) {
          const len = record.children.length;
          if (len > 0) {
            children = <Badge count={len} />;
          }
        }
        return (
          <div className="flex">
            <div className="truncate">{col}</div>
            {children}
          </div>
        );
      },
    },
    status: {
      dataIndex: "status",
      title: "Status",
      width: 100,
      render: (col, record, index) => {
        return (
          <Tag color={col.color} bordered className="w-full text-center">
            {col.name}
          </Tag>
        );
      },
    },
    duedate: {
      dataIndex: "duedate",
      title: "Due Date",
      width: 160,
      render: (col, record, index) => {
        const start = dayjs(col.start);
        const end = dayjs(col.end);
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
        return displayTimeline(col.start, col.end)
      },
    },
    members: {
      dataIndex: "members",
      title: "Members",
      width: 100,
      render: (col, record, index) => {
        let avatars = [];
        col.map((member) => {
          avatars.push(
            <Avatar key={member.id}>
              {member.avatar === "" ? (
                member.name.charAt(0)
              ) : (
                <img src={member.avatar} alt={member.name} />
              )}
            </Avatar>
          );
        });
        return <Avatar.Group size={24}>{avatars}</Avatar.Group>;
      },
    },
  },
  mapData: function (data) {
    let projects = [];

    data.projects.map((project) => {
      let groups = [];
      project.groups.map((group) => {
        let tasks = [];
        group.tasks.map((task) => {
          let subtasks = [];
          task.subtask.map((subtask) => {
            subtasks.push({
              key: subtask.id,
              name: subtask.name,
              status: subtask.status,
              duedate: {
                start: subtask.startDate,
                end: subtask.endDate,
              },
              members: subtask.members,
            });
          });
          tasks.push({
            key: task.id,
            name: task.name,
            status: task.status,
            duedate: {
              start: task.startDate,
              end: task.endDate,
            },
            members: task.members,
            children: subtasks,
          });
        });
        groups.push({
          id: group.id,
          name: group.name,
          tasks: tasks,
        });
      });
      projects.push({
        id: project.id,
        name: project.name,
        groups: groups,
      });
    });
    return projects;
  },
};
