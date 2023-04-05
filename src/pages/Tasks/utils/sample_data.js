import dayjs from "dayjs";
import { faker } from "@faker-js/faker";
import { TASK } from "@/constants";

const timeframe = {
  start: dayjs("2022-12-01"),
  end: dayjs("2023-01-31"),
};
export const members = [
  {
    id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
    name: "Dr Ho, SJMC",
    avatar: "/dummy/face1.jpg",
  },
  {
    id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
    name: "Dr Jack, UMSC",
    avatar: "/dummy/face2.jpg",
  },
  {
    id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
    name: "Dr Jane, HKL",
    avatar: "/dummy/face3.jpg",
  },
];
export const watchers = [
  {
    id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
    name: "Dr Loki",
    avatar: "/dummy/face1.jpg",
  },
  {
    id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
    name: "Dr Zaitun",
    avatar: "/dummy/face2.jpg",
  },
  {
    id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
    name: "Dr Hazi",
    avatar: "/dummy/face3.jpg",
  },
];
const groups = [
  {
    id: faker.datatype.uuid(),
    name: "000001",
  },
  {
    id: faker.datatype.uuid(),
    name: "000002",
  },
];

const priorityLevel = ["Low", "Medium", "High"]
const singleProject = (name, groups) => {
  return {
    id: faker.datatype.uuid(),
    name: name,
    status: "published",
    color: null,
    owner: faker.helpers.arrayElements(members),
    contact: faker.helpers.arrayElements(members),
    taskStatus: TASK.STATUS,
    visibility: null,
    description: "",
    groups: groups,
  };
};

const singleGroup = (name, tasks) => {
  return {
    id: faker.datatype.uuid(),
    name: name,
    tasks: tasks,
  };
};

const singleTask = (
  name,
  start,
  duration,
  status,
  project,
  group,
  no_of_comment,
  no_of_attachments,
  value,
  actualvalue,
  subtask,
) => {
  let comments = [];
  for (let i = 0; i < no_of_comment; i++) {
    comments.push({
      member: faker.helpers.arrayElements(members),
      message: faker.lorem.lines(),
      time: faker.date.soon(1, start),
    });
  }
  let attachments = [];
  for (let i = 0; i < no_of_attachments; i++) {
    attachments.push({
      member: faker.helpers.arrayElements(members),
      file: faker.system.commonFileName(),
      time: faker.date.soon(1, start),
    });
  }
  return {
    id: faker.datatype.uuid(),
    name: name,
    status: status,
    startDate: timeframe.start
      .add(start, "day")
      .format("YYYY-MM-DDT00:12:00.000Z"),
    endDate: timeframe.start
      .add(start + duration, "day")
      .format("YYYY-MM-DDT00:23:00.000Z"),
    actualStartDate: timeframe.start
      .add(start, "day")
      .format("YYYY-MM-DDT00:12:00.000Z"),
    actualEndDate: timeframe.start
      .add(start + duration - 1, "day")
      .format("YYYY-MM-DDT00:23:00.000Z"),
    comments: comments,
    attachments: attachments,
    company: "CR0001Satish",
    workspace: "Audit 2022",
    project: project,
    group: group,
    members: faker.helpers.arrayElements(members, 2),
    watchers: faker.helpers.arrayElements(watchers, 1),
    contacts: [],
    value: value,
    actualValue: value + actualvalue,
    description: "",
    effort: null,
    tags: [],
    reminder: null,
    recurrence: null,
    checklist: [],
    tracking: 0,
    priority: faker.helpers.arrayElement(priorityLevel),
    children: subtask,
  };
};

export const tasksData = {
  timeframe,
  status: TASK.STATUS,
  members,
  groups,
  projects: [
    singleProject("CR0001Satish", [
      singleGroup("000001", [
        singleTask("Appointment", 0, 0, TASK.STATUS[0], "CR0001Satish", groups[0], 2, 0, 0, 100, [
          singleTask("Last Physician: Dr Jack, UMSC", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Current Location: Subang Jaya, Selangor", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Patient Name: Mdm Anita", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Sex: Female", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Allergies: Desloratadine (Clarinex)", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Sympton: Extreme Fatique", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
        ]),
        singleTask("Pre-diagnosis", 5, 15, TASK.STATUS[1], "CR0001Satish", groups[0], 0, 3, 500, -100, []),
        singleTask("Admission", 8, 8, TASK.STATUS[2], "CR0001Satish", groups[0], 0, 0, 1000, 100, []),
        singleTask("Discharge Summary", 10, 10, TASK.STATUS[3], "CR0001Satish", groups[0], 2, 2, 0, 100, [
          singleTask("Diagnosis: Nausea", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Treatment Rendered: Kaopectate, Pepto-Bismol", 12, 8, TASK.STATUS[3], "CR0001Satish", "000001", 0, 0, 750, 100, []),
          singleTask("Instruction to Patient: Please follow-up with your physician on Wednesday 3/1/23 as previously arranged by patient. Take codeine prescribed by PCP with food and water to prevent nausea.", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
        ]),
      ]),
      singleGroup("000002", [
        singleTask("Appointment", 15, 10, TASK.STATUS[0], "CR0001Satish", groups[1], 0, 0, 0, 100, [
          singleTask("Last Physician: Dr Jack, UMSC", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Current Location: Subang Jaya, Selangor", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Patient Name: Mdm Anita", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Sex: Female", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Allergies: Desloratadine (Clarinex)", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Sympton: Extreme Fatique", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
        ]),
        singleTask("Pre-diagnosis", 20, 15, TASK.STATUS[1], "CR0001Satish", groups[1], 1, 0, 1500, -100, []),
        singleTask("Admission", 25, 8, TASK.STATUS[2], "CR0001Satish", groups[1], 2, 3, 300, 100, []),
        singleTask("Discharge Summary",30, 10, TASK.STATUS[3], "CR0001Satish", groups[1], 0, 2, 0, 100, [
          singleTask("Diagnosis: Migraine", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
          singleTask("Treatment Rendered: Tylenol (acetaminophen)", 12, 8, TASK.STATUS[3], "CR0001Satish", "000001", 0, 0, 750, 100, []),
          singleTask("Instruction to Patient: Please follow-up with your physician on Wednesday 2/3/23 as previously arranged by patient.", 10, 5, TASK.STATUS[2], "CR0001Satish", "000001", 0, 0, 0, 100, []),
        ]),
      ]),
    ]),
    // singleProject("B Project", [
    //   singleGroup("000001", [
    //     singleTask(10, 10, TASK.STATUS[0], "B Project", groups[0], 0, 0, []),
    //     singleTask(15, 15, TASK.STATUS[1], "B Project", groups[0], 2, 0, []),
    //     singleTask(18, 8, TASK.STATUS[2], "B Project", groups[0], 0, 0, []),
    //     singleTask(20, 10, TASK.STATUS[3], "B Project", groups[0], 0, 2, []),
    //   ]),
    //   singleGroup("000002", [
    //     singleTask(25, 10, TASK.STATUS[0], "B Project", groups[1], 0, 2, []),
    //     singleTask(30, 15, TASK.STATUS[1], "B Project", groups[1], 2, 2, []),
    //     singleTask(35, 8, TASK.STATUS[2], "B Project", groups[1], 2, 0, []),
    //     singleTask(40, 10, TASK.STATUS[3], "B Project", groups[1], 2, 0, []),
    //   ]),
    // ]),
  ],
};
export const projectsData = [
  singleProject("CR0001Satish", []),
  singleProject("CR0002Ahmad", []),
  singleProject("CR0003Chan", []),
];

export const subtasksData = [
  singleTask(0, 0, TASK.STATUS[0], "CR0001Satish", groups[0], 2, 0, []),
  singleTask(5, 15, TASK.STATUS[1], "CR0001Satish", groups[0], 0, 3, []),
  singleTask(8, 8, TASK.STATUS[2], "CR0001Satish", groups[0], 0, 0, []),
  singleTask(10, 10, TASK.STATUS[3], "CR0001Satish", groups[0], 2, 2, []),
];
