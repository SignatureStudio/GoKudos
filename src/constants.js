import { faker } from "@faker-js/faker";

export const TASK = {
  GROUP: ["status", "member", "group"],
  SCALE: ["day", "month", "year"],
  STATUS: [
    {
      id: 1,
      name: "To do",
      color: "blue",
      description: "Represent new task, default status for all tasks"
    },
    {
      id: 2,
      name: "Doing",
      color: "gold",
      description: "Represent in progress task"
    },
    {
      id: 3,
      name: "Done",
      color: "green",
      description: "Represent completed task"
    },
    {
      id: 4,
      name: "On hold",
      color: "red",
      description: "Represent problem, stuck, or rejected task"
    },
  ],
  STATUS2: [
    {
      id: 1,
      name: "New",
      color: "blue",
    },
    {
      id: 2,
      name: "Pending",
      color: "gold",
    },
    {
      id: 3,
      name: "In progress",
      color: "orange",
    },
    {
      id: 4,
      name: "Completed",
      color: "green",
    },
    {
      id: 5,
      name: "Rejected",
      color: "red",
    },
  ],
  REMINDER: [
    {
      id: faker.datatype.uuid(),
      name: "On due date",
    },
    {
      id: faker.datatype.uuid(),
      name: "1 day before",
    },
    {
      id: faker.datatype.uuid(),
      name: "2 days before",
    },
  ],
  RECURRENCE: [
    {
      value: faker.datatype.uuid(),
      label: "Daily",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Everyday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Working day only",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "Weekly",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Monday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Tuesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Wednesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Thursday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Friday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Saturday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Sunday",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "1st Week",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Monday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Tuesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Wednesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Thursday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Friday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Saturday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Sunday",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "2nd Week",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Monday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Tuesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Wednesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Thursday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Friday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Saturday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Sunday",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "3rd Week",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Monday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Tuesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Wednesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Thursday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Friday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Saturday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Sunday",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "4th Week",
      children: [
        {
          value: faker.datatype.uuid(),
          label: "Monday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Tuesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Wednesday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Thursday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Friday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Saturday",
        },
        {
          value: faker.datatype.uuid(),
          label: "Sunday",
        },
      ]
    },
    {
      value: faker.datatype.uuid(),
      label: "Monthly",
    },
    {
      value: faker.datatype.uuid(),
      label: "Yearly",
    },
  ],
  COLORS: [
    "red",   
    "blue",
    "orangered",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "purple",
    "pinkpurple",
    "magenta",
    "gray"
  ],
  COLUMNS: [
    {
      dataIndex: 'name',
      title: 'Name',
      // fixed: 'left',
      width: 200,
    },
    {
      dataIndex: 'status',
      title: 'Status',
      width: 100,
    },
    {
      dataIndex: 'duedate',
      title: 'Due Date',
      width: 200,
    },
    {
      dataIndex: 'members',
      title: 'Members',
      width: 100,
    },
  ]
};
