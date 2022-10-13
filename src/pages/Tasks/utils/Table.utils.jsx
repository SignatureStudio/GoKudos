import {
  Tag,
  Avatar,
  Badge,
  Button,
  Input,
  Select,
  DatePicker,
  Dropdown,
  Menu,
  TreeSelect,
} from "@arco-design/web-react";
import {
  IconPlus,
  IconPlayArrow,
  IconPause,
  IconMessage,
  IconAttachment,
  IconMoreVertical,
} from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import {
  displayTasksBy,
  displayTimeline,
  displayTimeFromSeconds,
  getAllSelectedId,
} from "./_utils";
import { TASK } from "@/constants";
import { members as MEMBERS } from "./sample_data";
import InputTaskName from "../components/InputTaskName"
import InputSelectStatus from "../components/InputSelectStatus"
import InputAllStatus from "../components/InputAllStatus"
import InputTimeline from "../components/InputTimeline"
import InputSelectMember from "../components/InputSelectMember"
import InputTracking from "../components/InputTracking"
import InputPriority from "../components/InputPriority"
import InputText from "../components/InputText"
import InputReminder from "../components/InputReminder"
import InputRecurrence from "../components/InputRecurrence"
import InputTags from "../components/InputTags"
import InputProps from "../components/InputProps"

export const utils = {
  columns: {
    name: {
      dataIndex: "name",
      title: "Name",
      width: 300,
      render: (col, record, index) => {
        return (<InputTaskName data={col} record={record} />)
      },
    },
    status: {
      dataIndex: "status",
      title: "Status",
      width: 100,
      render: (col, record, index) => {
        // console.log(col);
        return (<InputSelectStatus data={col} />)
      },
    },
    allstatus: {
      dataIndex: "status",
      title: "Status",
      width: 100,
      render: (col, record, index) => {
        // console.log(col);
        return (<InputAllStatus data={col} />)
      },
    },
    duedate: {
      dataIndex: "duedate",
      title: "Timeline",
      width: 160,
      render: (col, record, index) => {
        return (<InputTimeline data={record} />)
      },
    },
    members: {
      dataIndex: "members",
      title: "Assignee",
      width: 160,
      render: (col, record, index) => {
        return (<InputSelectMember data={getAllSelectedId(col)} />)
      },
    },
    watchers: {
      dataIndex: "watchers",
      title: "Watchers",
      width: 160,
      render: (col, record, index) => {
        return (<InputSelectMember data={getAllSelectedId(col)} />)
      },
    },
    contacts: {
      dataIndex: "contacts",
      title: "Contacts",
      width: 160,
      render: (col, record, index) => {
        return (<InputSelectMember data={getAllSelectedId(col)} />)
      },
    },
    activity: {
      dataIndex: "activity",
      title: "Activity",
      width: 100,
      render: (col, record, index) => {
        return (
          <div className="flex cursor-pointer" onClick={() => {
            col.task(col.id)
            col.edit(true)
          }}>
            <div className="ml-1.5">
              <Badge count={record.comments.length} dot>
                <IconMessage
                  className={`w-4 h-4 ${
                    record.comments.length === 0 && "text-gray-300"
                  }`}
                />
              </Badge>
            </div>
            <div className="ml-1.5">
              <Badge count={record.attachments.length} dot className="ml-2">
                <IconAttachment
                  className={`w-4 h-4 ${
                    record.attachments.length === 0 && "text-gray-300"
                  }`}
                />
              </Badge>
            </div>
          </div>
        );
      },
    },
    tracking: {
      dataIndex: "tracking",
      title: "Tracking",
      width: 100,
      render: (col, record, index) => {
        return (<InputTracking data={col} />)
      },
    },
    priority: {
      dataIndex: "priority",
      title: "Priority",
      width: 100,
      render: (col, record, index) => {
        return (<InputPriority data={col} />)
      },
    },
    value: {
      dataIndex: "value",
      title: "Project value",
      width: 100,
      render: (col, record, index) => {
        return (<InputText data={col} prefix="RM " placeholder="RM" />)
      },
    },
    effort: {
      dataIndex: "effort",
      title: "Planned effort",
      width: 100,
      render: (col, record, index) => {
        return (<InputText data={col} suffix=" hours" placeholder="Hours" />)
      },
    },
    reminder: {
      dataIndex: "reminder",
      title: "Reminder",
      width: 150,
      render: (col, record, index) => {
        return (<InputReminder data={col} />)
      },
    },
    recurrence: {
      dataIndex: "recurrence",
      title: "Recurrence",
      width: 150,
      render: (col, record, index) => {
        return (<InputRecurrence data={col} />)
      },
    },
    tags: {
      dataIndex: "tags",
      title: "Tags",
      width: 150,
      render: (col, record, index) => {
        return (<InputTags data={col} />)
      },
    },
    menu: {
      dataIndex: "menu",
      title: "",
      width: 30,
      render: (col, record, index) => {
        // console.log(record);
        return (
          <Dropdown trigger="click" droplist={
            <Menu>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.edit(true)
              }}>View Detail</Menu.Item>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.duplicate(true)
              }}>Duplicate</Menu.Item>
              {/* <Menu.Item>Export</Menu.Item> */}
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.move(true)
              }}>Move</Menu.Item>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.archive(true)
              }}>Archive</Menu.Item>
              <hr />
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.subtask(true)
              }}>Add Subtask</Menu.Item>
              <hr />
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.delete(true)
              }}>Delete</Menu.Item>
            </Menu>
          }>
            <Button type="text" size="small" icon={<IconMoreVertical className="text-gray-600" />} />
          </Dropdown>
        );
      },
    },
    submenu: {
      dataIndex: "menu",
      title: "",
      width: 30,
      render: (col, record, index) => {
        // console.log(record);
        return (
          <Dropdown trigger="click" droplist={
            <Menu>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.edit(true)
              }}>View Detail</Menu.Item>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.duplicate(true)
              }}>Duplicate</Menu.Item>
              {/* <Menu.Item>Export</Menu.Item> */}
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.move(true)
              }}>Move</Menu.Item>
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.archive(true)
              }}>Archive</Menu.Item>
              <hr />
              {/* <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.subtask(true)
              }}>Add Subtask</Menu.Item> */}
              <hr />
              <Menu.Item onClick={() => {
                record.action.task(record.id)
                record.action.delete(true)
              }}>Delete</Menu.Item>
            </Menu>
          }>
            <Button type="text" size="small" icon={<IconMoreVertical className="text-gray-600" />} />
          </Dropdown>
        );
      },
    },
    addprops: {
      dataIndex: "addproperty",
      title: (<InputProps />),
      width: 160,
      render: (col, record, index) => {
        return <div></div>;
      },
    },
  },
  mapData: function (data, taskAction) {
    let projects = [];

    data.projects.map((project) => {
      let groups = [];
      project.groups.map((group) => {
        let tasks = [];
        group.tasks.map((task) => {
          let subtasks = [];
          task.subtasks.map((subtask) => {
            subtasks.push({
              key: subtask.id,
              name: subtask.name,
              status: subtask.status,
              duedate: {
                start: subtask.startDate,
                end: subtask.endDate,
              },
              members: subtask.members,
              watchers: subtask.watchers,
              contacts: subtask.contacts,
              children: subtasks,
              priority: subtask.priority,
              value: subtask.value,
              effort: subtask.effort,
              reminder: subtask.reminder,
              tracking: subtask.tracking,
              recurrence: subtask.recurrence,
              tags: subtask.tags,
              comments: subtask.comments,
              attachments: subtask.attachments,
              menu: taskAction(subtask.id),
              activity: taskAction(subtask.id),
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
            watchers: task.watchers,
            contacts: task.contacts,
            children: subtasks,
            priority: task.priority,
            value: task.value,
            effort: task.effort,
            reminder: task.reminder,
            tracking: task.tracking,
            recurrence: task.recurrence,
            tags: task.tags,
            comments: task.comments,
            attachments: task.attachments,
            menu: taskAction(task.id),
            activity: taskAction(task.id),
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
