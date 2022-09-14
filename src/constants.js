import { faker } from "@faker-js/faker";

export const TASK = {
  GROUP: ["status", "member", "group"],
  SCALE: ["day", "month", "year"],
  STATUS: [
    {
      id: faker.datatype.uuid(),
      name: "To do",
      color: "blue",
    },
    {
      id: faker.datatype.uuid(),
      name: "Doing",
      color: "gold",
    },
    {
      id: faker.datatype.uuid(),
      name: "Done",
      color: "green",
    },
    {
      id: faker.datatype.uuid(),
      name: "On hold",
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
      id: faker.datatype.uuid(),
      name: "Daily",
    },
    {
      id: faker.datatype.uuid(),
      name: "Weekly",
    },
    {
      id: faker.datatype.uuid(),
      name: "1st Week",
    },
    {
      id: faker.datatype.uuid(),
      name: "2nd Week",
    },
    {
      id: faker.datatype.uuid(),
      name: "3rd Week",
    },
    {
      id: faker.datatype.uuid(),
      name: "4th Week",
    },
    {
      id: faker.datatype.uuid(),
      name: "Monthly",
    },
    {
      id: faker.datatype.uuid(),
      name: "Yearly",
    },
  ],
  COLORS: [
    "status-gray",
    "status-orange",
    "status-yellow",
    "status-green",
    "status-emerald",
    "status-cyan",
    "status-blue",
    "status-indigo",
    "status-violet",
    "status-purple",
    "status-fuchsia",
    "status-rose",
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
