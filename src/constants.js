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
