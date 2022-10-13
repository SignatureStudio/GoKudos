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
      reply_to: null
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
        <div>
          {data.length > 0 && (
            <>
              {data.map((msg) => {

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

                return (
                  <div className="flex" key={msg.id}>
                    { avatar}
                    <div
                      className={`flex-1 p-2 bg-white mb-2 border rounded ${
                        currentUserId === msg.user.id
                          ? "bg-green-50 border-green-200"
                          : "border-gray-200"
                      }`}
                      key={msg.id}
                    >
                      <div>
                        <div className="flex text-xs">
                          <div className="flex-1 opacity-50">
                            {msg.user.name}
                          </div>
                          <div className="opacity-50">{msg.date}</div>
                        </div>
                        <div>{msg.message}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
    </div>
  );
};

export default TaskDiscussion;
