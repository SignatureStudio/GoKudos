import {
  Table,
  Button,
  Checkbox,
  Input,
  Avatar,
  Dropdown,
  Menu,
} from "@arco-design/web-react";
import { Link, useLocation } from "react-router-dom";
import {
  IconDelete,
  IconCaretDown,
  IconCaretRight,
  IconAttachment,
  IconBold,
  IconItalic,
  IconUnderline,
  IconMoreVertical,
} from "@arco-design/web-react/icon";
import { useEffect, useRef, useState } from "react";

const TaskDiscussion = (props) => {
  const currentUserId = "6f55ca23-0363-4aec-8ea1-add6d8d512e1";
  const [showContent, setShowContent] = useState(true);
  const data = [
    {
      id: 1,
      user: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
      date: "Sep 16, 2022",
      message: "Message 1",
      file: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "file.pdf",
      },
      reply_to: null,
    },
    {
      id: 2,
      user: {
        id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
        name: "B Member",
        avatar: "/dummy/face2.jpg",
      },
      date: "Sep 16, 2022",
      message: "Message 2",
      file: null,
      reply_to: {
        id: 1,
        user: {
          id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
          name: "A Member",
          avatar: "/dummy/face1.jpg",
        },
        date: "Sep 16, 2022",
        message: "Message 1",
        file: {
          id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
          name: "file.pdf",
        },
        reply_to: null,
      },
    },
    {
      id: 3,
      user: {
        id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
        name: "C Member",
        avatar: "/dummy/face3.jpg",
      },
      date: "Sep 16, 2022",
      message: "Message 3",
      file: null,
      reply_to: null,
    },
  ];
  return (
    <div className="m-2 p-2">
      <div
        className="font-bold cursor-pointer"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {showContent ? <IconCaretDown /> : <IconCaretRight />}
        <span className="ml-1">Discussion</span>
      </div>
      {showContent && (
        <div>
          <div className="bg-gray-100 rounded p-0.5 my-2">
            <div>
              <Button.Group>
                <Button iconOnly icon={<IconBold />} />
                <Button iconOnly icon={<IconItalic />} />
                <Button iconOnly icon={<IconUnderline />} />
                <Button iconOnly icon={<IconAttachment />} />
              </Button.Group>
            </div>
            <Input.TextArea
              allowClear
              autoSize
              placeholder="Add a comment"
              onBlur={(e) => {
                console.log("save", e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  console.log("save", e.target.value);
                }
              }}
              className="bg-gray-100 hover:bg-white"
            />
          </div>
          {data.length > 0 && (
            <>
              {data.map((msg) => {
                let replyTo = "";
                if (msg.reply_to) {
                  replyTo = (
                    <div className="p-2 rounded bg-gray-100 mb-2">
                      <div className="flex text-xs">
                        <div className="flex-1 opacity-50">
                          {msg.reply_to.user.name}
                        </div>
                        <div className="opacity-50">{msg.reply_to.date}</div>
                      </div>
                      <div>{msg.reply_to.message}</div>
                    </div>
                  );
                }

                let attachment = "";
                if (msg.file) {
                  const ext = msg.file.name.split(".").pop();
                  attachment = (
                    <div className="flex items-center py-2">
                      <Avatar
                        shape="square"
                        size={24}
                        className={`gk-extension ${ext.toLowerCase()}`}
                      >
                        {ext.toUpperCase()}
                      </Avatar>
                      <div className="ml-2">{msg.file.name}</div>
                    </div>
                  );
                }

                const avatar = (
                  <div className="p-2">
                    <Avatar key={msg.user.id} size={24}>
                      {msg.user.avatar === "" ? (
                        msg.user.name.charAt(0)
                      ) : (
                        <img src={msg.user.avatar} alt={msg.user.name} />
                      )}
                    </Avatar>
                  </div>
                );

                const menuComment = (
                  <Menu>
                    <Menu.Item key="1" onClick={() => console.log("Reply")}>
                      Reply
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => console.log("Edit")}>
                      Edit
                    </Menu.Item>
                    <hr />
                    <Menu.Item key="3" onClick={() => console.log("Delete")}>
                      Delete
                    </Menu.Item>
                  </Menu>
                );

                return (
                  <div className="flex" key={msg.id}>
                    {currentUserId !== msg.user.id && avatar}
                    <div
                      className={`flex-1 p-2 bg-white mb-2 border rounded ${
                        currentUserId === msg.user.id
                          ? "bg-green-50 border-green-200"
                          : "border-gray-200"
                      }`}
                      key={msg.id}
                    >
                      {replyTo}
                      <div>
                        <div className="flex text-xs">
                          <div className="flex-1 opacity-50">
                            {msg.user.name}
                          </div>
                          <div className="opacity-50">{msg.date}</div>
                          <div className="">
                            <Dropdown droplist={menuComment} trigger="click">
                              <div className="px-0.5 cursor-pointer hover:bg-gray-100">
                                <IconMoreVertical className="text-gray-600 hover:text-gray-900" />
                              </div>
                            </Dropdown>
                          </div>
                        </div>
                        {attachment}
                        <div>{msg.message}</div>
                      </div>
                    </div>
                    {currentUserId === msg.user.id && avatar}
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskDiscussion;
