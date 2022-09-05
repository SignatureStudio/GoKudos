import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import { TASK } from "@/constants";

const timeframe = {
  start: dayjs("2022-12-01"), 
  end: dayjs("2023-01-31")
}
const members = [
  {
    id: faker.datatype.uuid(),
    name: "A Member",
    avatar: "/dummy/face1.jpg",
  },
  {
    id: faker.datatype.uuid(),
    name: "B Member",
    avatar: "/dummy/face2.jpg",
  },
  {
    id: faker.datatype.uuid(),
    name: "C Member",
    avatar: "/dummy/face3.jpg",
  },
];
const groups = [
  {
    id: faker.datatype.uuid(),
    name: "A Group",
  },
  {
    id: faker.datatype.uuid(),
    name: "B Group",
  },
];
const singleProject = (name, groups) => {
  return {
    id: faker.datatype.uuid(),
    name: name,
    status: 'published',
    color: null,
    owner: faker.helpers.arrayElements(members),
    contact: faker.helpers.arrayElements(members),
    taskStatus: TASK.STATUS,
    visibility: null,
    description: "",
    groups: groups
  }
};

const singleGroup = (name, tasks) => {
  return {
    id: faker.datatype.uuid(),
    name: name,
    tasks: tasks
  }
}

const singleTask = (start, duration, status, project, group, no_of_comment, no_of_attachments, subtask) => {
  let comments = []
  for (let i = 0; i < no_of_comment; i++) {
    comments.push({
      member: faker.helpers.arrayElements(members),
      message: faker.lorem.lines(),
      time: faker.date.soon(1, start)
    })
  }
  let attachments = []
  for (let i = 0; i < no_of_attachments; i++) {
    attachments.push({
      member: faker.helpers.arrayElements(members),
      file: faker.system.commonFileName(),
      time: faker.date.soon(1, start)
    })
  }
  return {
    id: faker.datatype.uuid(),
    name: faker.company.catchPhrase(),
    status: status,
    startDate: timeframe.start.add(start, "day").format("YYYY-MM-DDT00:00:00.000Z"),
    endDate: timeframe.start.add(start + duration, "day").format("YYYY-MM-DDT00:00:00.000Z"),
    comments: comments,
    attachments: attachments,
    company: "A Company",
    workspace: "A Workspace",
    project: project,
    group: group,
    members: faker.helpers.arrayElements(members, 2),
    value: null,
    description: "",
    duration: null,
    tags: [],
    reminder: null,
    recurrence: null,
    checklist: [],
    timeTracker: null,
    priority: null,
    subtasks: subtask,
  };
};

export const tasksData = {
  timeframe,
  status: TASK.STATUS,
  members,
  groups,
  projects: [
    singleProject("A Project", [
      singleGroup("A Group", [
        singleTask(0, 10, TASK.STATUS[0], "A Project", groups[0], 2, 0, []),
        singleTask(5, 15, TASK.STATUS[1], "A Project", groups[0], 0, 3, []),
        singleTask(8, 8, TASK.STATUS[2], "A Project", groups[0], 0, 0, []),
        singleTask(10, 10, TASK.STATUS[3], "A Project", groups[0], 2, 2, [
          // singleTask(12, 5, TASK.STATUS[2], "A Project", "A Group", 0, 0, []),
          // singleTask(15, 5, TASK.STATUS[3], "A Project", "A Group", 0, 0, []),  
        ]),
      ]),
      singleGroup("B Group", [
        singleTask(15, 10, TASK.STATUS[0], "A Project", groups[1], 0, 0, []),
        singleTask(20, 15, TASK.STATUS[1], "A Project", groups[1], 1, 0, [
          // singleTask(22, 5, TASK.STATUS[0], "A Project", groups[1], 0, 0, []),
          // singleTask(25, 10, TASK.STATUS[1], "A Project", groups[1], 0, 0, []),  
        ]),
        singleTask(25, 8, TASK.STATUS[2], "A Project", groups[1], 2, 3, []),
        singleTask(30, 10, TASK.STATUS[3], "A Project", groups[1], 0, 2, []),
      ]),
    ]),
    singleProject("B Project", [
      singleGroup("A Group", [
        singleTask(10, 10, TASK.STATUS[0], "B Project", groups[0], 0, 0, []),
        singleTask(15, 15, TASK.STATUS[1], "B Project", groups[0], 2, 0, []),
        singleTask(18, 8, TASK.STATUS[2], "B Project", groups[0], 0, 0, []),
        singleTask(20, 10, TASK.STATUS[3], "B Project", groups[0], 0, 2, []),
      ]),
      singleGroup("B Group", [
        singleTask(25, 10, TASK.STATUS[0], "B Project", groups[1], 0, 2, []),
        singleTask(30, 15, TASK.STATUS[1], "B Project", groups[1], 2, 2, []),
        singleTask(35, 8, TASK.STATUS[2], "B Project", groups[1], 2, 0, []),
        singleTask(40, 10, TASK.STATUS[3], "B Project", groups[1], 2, 0, []),
      ]),
    ]),
  ]
}
export const projectsData = [
  singleProject("A Project", []),
  singleProject("B Project", []),
]