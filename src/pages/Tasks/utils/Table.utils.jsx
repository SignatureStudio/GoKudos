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

const priorityColor = {
  High: "red",
  Medium: "gold",
  Low: "lime",
};
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
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <div className="flex">
            {edit === false ? (
              <div
                className="truncate"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col}
              </div>
            ) : (
              <div>
                <Input
                  ref={refInput}
                  allowClear
                  placeholder="Add a task name"
                  defaultValue={col}
                  onBlur={(e) => {
                    console.log(e.target.value);
                    setEdit(false);
                  }}
                />
              </div>
            )}
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
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <>
            {edit === false ? (
              <Tag
                color={col.color}
                bordered
                className="w-full text-center cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col.name}
              </Tag>
            ) : (
              <Select
                placeholder="Please select"
                defaultValue={col.id}
                ref={refInput}
                onChange={(value) => {
                  console.log(value);
                  setEdit(false);
                }}
                onBlur={(value) => {
                  setEdit(false);
                }}
              >
                {TASK.STATUS.map((status) => (
                  <Select.Option key={status.id} value={status.id}>
                    {status.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          </>
        );
      },
    },
    duedate: {
      dataIndex: "duedate",
      title: "Due Date",
      width: 180,
      render: (col, record, index) => {
        // const { RangePicker } = DatePicker;
        // const [edit, setEdit] = useState(false);
        // const refInput = useRef(null);

        // useEffect(() => {
        //   if (edit) {
        //     console.log(refInput);
        //     // refInput.current.focus();
        //   }
        // }, [edit]);
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
        return (
          <DatePicker.RangePicker
            triggerElement={
              <div className="cursor-pointer">
                {displayTimeline(col.start, col.end)}
              </div>
            }
            defaultValue={[col.start, col.end]}
            onChange={(value) => {
              console.log(value);
            }}
          />
        );
      },
    },
    members: {
      dataIndex: "members",
      title: "Members",
      width: 160,
      render: (col, record, index) => {
        const refSelect = useRef(null);
        const [selectedMembers, setSelectedMembers] = useState(
          getAllSelectedId(col)
        );

        return (
          <Select
            defaultValue={selectedMembers}
            showSearch
            mode="multiple"
            onChange={(e) => {
              console.log(e);
              setSelectedMembers(e);
            }}
            triggerElement={
              <div className="w-40">
                {selectedMembers.length ? (
                  <Avatar.Group size={24}>
                    {MEMBERS.map((member) => (
                      <span key={member.id}>
                        {selectedMembers.includes(member.id) && (
                          <Avatar key={member.id}>
                            {member.avatar === "" ? (
                              member.name.charAt(0)
                            ) : (
                              <img src={member.avatar} alt={member.name} />
                            )}
                          </Avatar>
                        )}
                      </span>
                    ))}
                  </Avatar.Group>
                ) : (
                  <div className="cursor-pointer hover:bg-gray-200">-</div>
                )}
              </div>
            }
          >
            {MEMBERS.map((member) => (
              <Select.Option value={member.id} key={member.id}>
                {member.name}
              </Select.Option>
            ))}
          </Select>
        );
      },
    },
    watchers: {
      dataIndex: "watchers",
      title: "Watchers",
      width: 160,
      render: (col, record, index) => {
        const refSelect = useRef(null);
        const [selectedWatchers, setSelectedWatchers] = useState(
          getAllSelectedId(col)
        );

        return (
          <Select
            defaultValue={selectedWatchers}
            showSearch
            mode="multiple"
            onChange={(e) => {
              console.log(e);
              setSelectedWatchers(e);
            }}
            triggerElement={
              <div className="w-40">
                {selectedWatchers.length ? (
                  <Avatar.Group size={24}>
                    {MEMBERS.map((member) => (
                      <>
                        {selectedWatchers.includes(member.id) && (
                          <Avatar key={member.id}>
                            {member.avatar === "" ? (
                              member.name.charAt(0)
                            ) : (
                              <img src={member.avatar} alt={member.name} />
                            )}
                          </Avatar>
                        )}
                      </>
                    ))}
                  </Avatar.Group>
                ) : (
                  <div className="cursor-pointer hover:bg-gray-200">-</div>
                )}
              </div>
            }
          >
            {MEMBERS.map((member) => (
              <Select.Option value={member.id} key={member.id}>
                {member.name}
              </Select.Option>
            ))}
          </Select>
        );
      },
    },
    contacts: {
      dataIndex: "contacts",
      title: "Contacts",
      width: 160,
      render: (col, record, index) => {
        const refSelect = useRef(null);
        const [selectedContacts, setSelectedContacts] = useState(
          getAllSelectedId(col)
        );

        return (
          <Select
            defaultValue={selectedContacts}
            showSearch
            mode="multiple"
            onChange={(e) => {
              console.log(e);
              setSelectedContacts(e);
            }}
            triggerElement={
              <div className="w-40">
                {selectedContacts.length ? (
                  <Avatar.Group size={24}>
                    {MEMBERS.map((member) => (
                      <>
                        {selectedContacts.includes(member.id) && (
                          <Avatar key={member.id}>
                            {member.avatar === "" ? (
                              member.name.charAt(0)
                            ) : (
                              <img src={member.avatar} alt={member.name} />
                            )}
                          </Avatar>
                        )}
                      </>
                    ))}
                  </Avatar.Group>
                ) : (
                  <div className="cursor-pointer hover:bg-gray-200">-</div>
                )}
              </div>
            }
          >
            {MEMBERS.map((member) => (
              <Select.Option value={member.id} key={member.id}>
                {member.name}
              </Select.Option>
            ))}
          </Select>
        );
      },
    },
    // members: {
    //   dataIndex: "members",
    //   title: "Members",
    //   width: 100,
    //   render: (col, record, index) => {
    //     const refSelect = useRef(null);
    //     const [members, setMembers] = useState(col || []);
    //     // console.log(members);

    //     const memberIds = getAllSelectedId(members);

    //     let menuItem = [];
    //     MEMBERS.map((member) => {
    //       if (!memberIds.includes(member.id)) {
    //         // const [active, setActive] = useState(false);
    //         menuItem.push(
    //           <Menu.Item
    //             key="member.id"
    //             onClick={() => {
    //               setMembers([...members, member]);
    //               // setActive(true);
    //             }}
    //             // className={active ? "hidden" : ""}
    //           >
    //             <Avatar size={24} className="mr-2">
    //               <img src={member.avatar} alt={member.name} />
    //             </Avatar>
    //             {member.name}
    //           </Menu.Item>
    //         );
    //       }
    //     });
    //     const memberlist = <Menu>{menuItem}</Menu>;

    //     return (
    //       <Dropdown droplist={memberlist} trigger="click">
    //         <Avatar.Group size={24}>
    //           {members.map((member) => (
    //             <Avatar key={member.id}>
    //               {member.avatar === "" ? (
    //                 member.name.charAt(0)
    //               ) : (
    //                 <img src={member.avatar} alt={member.name} />
    //               )}
    //             </Avatar>
    //           ))}
    //         </Avatar.Group>
    //       </Dropdown>
    //     );
    //   },
    // },
    activity: {
      dataIndex: "activity",
      title: "Activity",
      width: 100,
      render: (col, record, index) => {
        return (
          <div className="flex">
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
        const [edit, setEdit] = useState(false);
        const [timer, setTimer] = useState(col);
        const refInput = useRef(null);

        useEffect(() => {
          let interval = null;
          if (edit) {
            interval = setInterval(() => {
              setTimer((timer) => timer + 1);
            }, 1000);
          } else if (!edit && timer !== 0) {
            clearInterval(interval);
            console.log(timer);
          }
          return () => clearInterval(interval);
        }, [edit, timer]);

        return (
          <Button
            size="mini"
            icon={edit ? <IconPause /> : <IconPlayArrow />}
            type={edit ? "primary" : "secondary"}
            status={edit ? "success" : ""}
            className="w-full text-center"
            onClick={() => setEdit(!edit)}
          >
            {timer > 0 ? displayTimeFromSeconds(timer) : "Start"}
          </Button>
        );
      },
    },
    priority: {
      dataIndex: "priority",
      title: "Priority",
      width: 100,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        const priorityList = (
          <Menu
            onClickMenuItem={(e) => {
              console.log(e);
            }}
          >
            <Menu.Item key="Low">
              <Badge color={priorityColor["Low"]} text="Low" />
            </Menu.Item>
            <Menu.Item key="Medium">
              <Badge color={priorityColor["Medium"]} text="Medium" />
            </Menu.Item>
            <Menu.Item key="High">
              <Badge color={priorityColor["High"]} text="High" />
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown droplist={priorityList} trigger="click">
            <div className="cursor-pointer">
              {col ? <Badge color={priorityColor[col]} text={col} /> : "-"}
            </div>
          </Dropdown>
        );
      },
    },
    value: {
      dataIndex: "value",
      title: "Project value",
      width: 100,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <div>
            {edit === false ? (
              <div
                className="truncate cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col ? <div>RM{col}</div> : <div className="cursor-pointer hover:bg-gray-200">-</div>}
              </div>
            ) : (
              <div>
                <Input
                  ref={refInput}
                  allowClear
                  placeholder="RM"
                  defaultValue={col}
                  onBlur={(e) => {
                    console.log(e.target.value);
                    setEdit(false);
                  }}
                />
              </div>
            )}
          </div>
        );
      },
    },
    effort: {
      dataIndex: "effort",
      title: "Planned effort",
      width: 100,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <div>
            {edit === false ? (
              <div
                className="truncate cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col ? <div>{col}hrs</div> : <div className="cursor-pointer hover:bg-gray-200">-</div>}
              </div>
            ) : (
              <div>
                <Input
                  ref={refInput}
                  allowClear
                  placeholder="Hours"
                  defaultValue={col}
                  onBlur={(e) => {
                    console.log(e.target.value);
                    setEdit(false);
                  }}
                />
              </div>
            )}
          </div>
        );
      },
    },
    reminder: {
      dataIndex: "reminder",
      title: "Reminder",
      width: 150,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <>
            {edit === false ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col ? <div>{col}</div> : <div className="cursor-pointer hover:bg-gray-200">-</div>}
              </div>
            ) : (
              <Select
                placeholder="Please select"
                defaultValue={col ? col.id : undefined}
                ref={refInput}
                onChange={(value) => {
                  console.log(value);
                  setEdit(false);
                }}
                onBlur={(value) => {
                  setEdit(false);
                }}
              >
                {TASK.REMINDER.map((reminder) => (
                  <Select.Option key={reminder.id} value={reminder.id}>
                    {reminder.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          </>
        );
      },
    },
    recurrence: {
      dataIndex: "recurrence",
      title: "Recurrence",
      width: 150,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <>
            {edit === false ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setEdit(true);
                }}
              >
                {col ? <div>{col}</div> : <div className="cursor-pointer hover:bg-gray-200">-</div>}
              </div>
            ) : (
              <Select
                placeholder="Please select"
                defaultValue={col ? col.id : undefined}
                ref={refInput}
                onChange={(value) => {
                  console.log(value);
                  setEdit(false);
                }}
                onBlur={(value) => {
                  setEdit(false);
                }}
              >
                {TASK.RECURRENCE.map((recur) => (
                  <Select.Option key={recur.id} value={recur.id}>
                    {recur.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          </>
        );
      },
    },
    tags: {
      dataIndex: "tags",
      title: "Tags",
      width: 150,
      render: (col, record, index) => {
        const [edit, setEdit] = useState(false);
        const [trigger, setTrigger] = useState(
          col.length ? (
            col.join(", ")
          ) : (
            <div className="cursor-pointer hover:bg-gray-200">-</div>
          )
        );
        const refInput = useRef(null);

        useEffect(() => {
          if (edit) {
            refInput.current.focus();
          }
        }, [edit]);
        return (
          <TreeSelect
            placeholder="Please select"
            defaultValue={col ? col.id : undefined}
            ref={refInput}
            allowClear
            onChange={(value) => {
              console.log(value);
              setEdit(false);
              setTrigger(
                value.length ? (
                  <div className="break-normal">{value.join(", ")}</div>
                ) : (
                  <div className="cursor-pointer hover:bg-gray-200">-</div>
                )
              );
            }}
            onBlur={(value) => {
              setEdit(false);
            }}
            treeCheckable
            triggerElement={<div>{trigger}</div>}
          >
            <TreeSelect.Node key="Industries" title="Industries">
              <TreeSelect.Node key="Manufacturing" title="Manufacturing" />
              <TreeSelect.Node key="Furniture" title="Furniture" />
            </TreeSelect.Node>
            <TreeSelect.Node key="Location" title="Location">
              <TreeSelect.Node key="East MY" title="East MY" />
              <TreeSelect.Node key="West MY" title="West MY" />
            </TreeSelect.Node>
            <TreeSelect.Node key="Job Type" title="Job Type">
              <TreeSelect.Node key="In-house" title="In-house" />
              <TreeSelect.Node key="Outsource" title="Outsource" />
            </TreeSelect.Node>
          </TreeSelect>
        );
      },
    },
    menu: {
      dataIndex: "menu",
      title: "",
      width: 30,
      render: (col, record, index) => {
        return (
          <Dropdown trigger="click" droplist={
            <Menu>
              <Menu.Item>View Detail</Menu.Item>
              <Menu.Item>Add Subtask</Menu.Item>
              <hr />
              <Menu.Item>Duplicate</Menu.Item>
              <Menu.Item>Export</Menu.Item>
              <Menu.Item>Move</Menu.Item>
              <Menu.Item>Archive</Menu.Item>
              <hr />
              <Menu.Item className="text-red-600 hover:text-red-600">Delete</Menu.Item>
            </Menu>
          }>
            <Button type="text" size="small" icon={<IconMoreVertical className="text-gray-600" />} />
          </Dropdown>
        );
      },
    },
    addprops: {
      dataIndex: "addproperty",
      title: (
        <Select
          defaultValue={["name", "status", "duedate", "members", "activity"]}
          mode="multiple"
          onChange={(e) => {
            console.log(e);
          }}
          triggerElement={
            <div className="w-40">
              <Button icon={<IconPlus />} />
            </div>
          }
        >
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="status">Status</Select.Option>
          <Select.Option value="duedate">Due Date</Select.Option>
          <Select.Option value="members">Members</Select.Option>
          <Select.Option value="activity">Activity</Select.Option>
          <Select.Option value="watchers">Watchers</Select.Option>
          <Select.Option value="contacts">Contacts</Select.Option>
          <Select.Option value="tracking">Tracking</Select.Option>
          <Select.Option value="priority">Priority</Select.Option>
          <Select.Option value="value">Project value</Select.Option>
          <Select.Option value="effort">Planned effort</Select.Option>
          <Select.Option value="reminder">Reminder</Select.Option>
          <Select.Option value="recurrence">Recurrence</Select.Option>
          <Select.Option value="tags">Tags</Select.Option>
        </Select>
      ),
      width: 160,
      render: (col, record, index) => {
        return <div></div>;
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
