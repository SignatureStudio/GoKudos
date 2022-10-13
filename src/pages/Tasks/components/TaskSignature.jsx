import {
  Table,
  Button,
  Checkbox,
  Input,
  Avatar,
  Dropdown,
  Menu,
  Tag,
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
      file: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "file.pdf",
      },
      signs: [
        {
          id: 1,
          user: {
            id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
            name: "A Member",
            avatar: "/dummy/face1.jpg",
          },
          date: "Sep 16, 2022",
          status: "completed",
        },
        {
          id: 2,
          user: {
            id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
            name: "B Member",
            avatar: "/dummy/face2.jpg",
          },
          date: "Sep 17, 2022",
          status: "pending",
        },
        {
          id: 3,
          user: {
            id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
            name: "C Member",
            avatar: "/dummy/face3.jpg",
          },
          date: "Sep 18, 2022",
          status: "void",
        },
      ],
    },
  ];
  return (
    <div className="m-2 p-2">
      <div>
        {data.length > 0 && (
          <>
            {data.map((item) => {
              // const avatar = (
              //   <div className="p-2">
              //     <Avatar key={item.user.id} size={24}>
              //       {item.user.avatar === "" ? (
              //         item.user.name.charAt(0)
              //       ) : (
              //         <img src={item.user.avatar} alt={item.user.name} />
              //       )}
              //     </Avatar>
              //   </div>
              // );

              const ext = item.file.name.split(".").pop();
              const attachment = (
                <div className="flex items-center py-2">
                  <Avatar
                    shape="square"
                    size={24}
                    className={`gk-extension ${ext.toLowerCase()}`}
                  >
                    {ext.toUpperCase()}
                  </Avatar>
                  <div className="ml-2">{item.file.name}</div>
                </div>
              );

              const tagColor = {
                completed: "green",
                pending: "orange",
                void: "red",
              };

              return (
                <div
                  className="p-2 bg-white mb-2 border border-gray-200 rounded"
                  key={item.id}
                >
                  {attachment}
                  {item.signs.map((sign) => (
                    <div
                      className="p-2 bg-gray-50 mb-2 border border-gray-200 rounded flex"
                      key={sign.id}
                    >
                      <div>
                        <Avatar key={sign.user.id} size={24}>
                          {sign.user.avatar === "" ? (
                            sign.user.name.charAt(0)
                          ) : (
                            <img src={sign.user.avatar} alt={sign.user.name} />
                          )}
                        </Avatar>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="flex">
                          <div>{sign.user.name}</div>
                          <div className="flex-1 px-2">
                            <Tag
                              bordered
                              size="small"
                              color={tagColor[sign.status]}
                            >
                              {sign.status}
                            </Tag>
                          </div>
                          <div className=" text-xs opacity-50">{sign.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                // <div className="flex" key={msg.id}>
                //   {avatar}
                //   <div
                //     className={`flex-1 p-2 bg-white mb-2 border rounded ${
                //       currentUserId === msg.user.id
                //         ? "bg-green-50 border-green-200"
                //         : "border-gray-200"
                //     }`}
                //     key={msg.id}
                //   >
                //     <div>
                //       <div className="flex text-xs">
                //         <div className="flex-1 opacity-50">{msg.user.name}</div>
                //         <div className="opacity-50">{msg.date}</div>
                //       </div>
                //       <div>{msg.message}</div>
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskDiscussion;
