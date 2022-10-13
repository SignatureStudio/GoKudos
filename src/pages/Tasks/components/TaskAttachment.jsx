import {
  Table,
  Button,
  Checkbox,
  Input,
  Avatar,
  Upload,
  Dropdown,
  Menu,
} from "@arco-design/web-react";
import { Link, useLocation } from "react-router-dom";
import {
  IconDelete,
  IconCaretDown,
  IconCaretRight,
  IconMoreVertical,
} from "@arco-design/web-react/icon";
import { useEffect, useRef, useState } from "react";

const TaskAttachment = (props) => {
  const [showContent, setShowContent] = useState(true);
  const columns = [
    {
      title: "",
      dataIndex: "icon",
      width: 20,
      render: (col, record, index) => {
        const ext = record.file.name.split(".").pop();
        return (
          <Avatar
            shape="square"
            size={24}
            className={`gk-extension ${ext.toLowerCase()}`}
          >
            {ext.toUpperCase()}
          </Avatar>
        );
      },
    },
    {
      title: "",
      dataIndex: "file",
      render: (col, record, index) => {
        return <div className="truncate">{col.name}</div>;
      },
    },
    {
      title: "",
      dataIndex: "source",
      width: 30,
      render: (col, record, index) => {
        return (
          <>
            {col === "googledrive" && iconGoogleDrive}
            {col === "onedrive" && iconOneDrive}
          </>
        );
      },
    },
    {
      title: "",
      dataIndex: "date",
      width: 100,
    },
    {
      title: "",
      dataIndex: "user",
      width: 30,
      render: (col, record, index) => {
        return (
          <Avatar key={col.id} size={24}>
            {col.avatar === "" ? (
              col.name.charAt(0)
            ) : (
              <img src={col.avatar} alt={col.name} />
            )}
          </Avatar>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      width: 20,
      render: (col, record, index) => {
        return (
          <Button
            size="mini"
            type="text"
            iconOnly
            icon={
              <Dropdown droplist={menuAttachment} trigger="click">
                <IconMoreVertical className="text-gray-600" />
              </Dropdown>
            }
          />
        );
      },
    },
  ];
  const data = [
    {
      key: 1,
      file: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "file.pdf",
      },
      user: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "A Member",
        avatar: "/dummy/face1.jpg",
      },
      source: "googledrive",
      date: "Sep 16, 2022",
    },
    {
      key: 2,
      file: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "word.docx",
      },
      user: {
        id: "0f160aa7-43c7-493c-99ea-eb059d92973e",
        name: "B Member",
        avatar: "/dummy/face2.jpg",
      },
      source: "onedrive",
      date: "Sep 16, 2022",
    },
    {
      key: 3,
      file: {
        id: "6f55ca23-0363-4aec-8ea1-add6d8d512e1",
        name: "excel.xlsx",
      },
      user: {
        id: "72a856ad-7e55-4dcb-a1c0-d971631b5f44",
        name: "C Member",
        avatar: "/dummy/face3.jpg",
      },
      source: null,
      date: "Sep 16, 2022",
    },
  ];
  const iconGoogleDrive = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 87.3 78"
      className="w-4 h-4"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  );
  const iconOneDrive = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 5.5 32 20.5"
      className="w-4 h-4"
    >
      <g id="STYLE_COLOR">
        <path
          d="M12.20245,11.19292l.00031-.0011,6.71765,4.02379,4.00293-1.68451.00018.00068A6.4768,6.4768,0,0,1,25.5,13c.14764,0,.29358.0067.43878.01639a10.00075,10.00075,0,0,0-18.041-3.01381C7.932,10.00215,7.9657,10,8,10A7.96073,7.96073,0,0,1,12.20245,11.19292Z"
          fill="#0364b8"
        />
        <path
          d="M12.20276,11.19182l-.00031.0011A7.96073,7.96073,0,0,0,8,10c-.0343,0-.06805.00215-.10223.00258A7.99676,7.99676,0,0,0,1.43732,22.57277l5.924-2.49292,2.63342-1.10819,5.86353-2.46746,3.06213-1.28859Z"
          fill="#0078d4"
        />
        <path
          d="M25.93878,13.01639C25.79358,13.0067,25.64764,13,25.5,13a6.4768,6.4768,0,0,0-2.57648.53178l-.00018-.00068-4.00293,1.68451,1.16077.69528L23.88611,18.19l1.66009.99438,5.67633,3.40007a6.5002,6.5002,0,0,0-5.28375-9.56805Z"
          fill="#1490df"
        />
        <path
          d="M25.5462,19.18437,23.88611,18.19l-3.80493-2.2791-1.16077-.69528L15.85828,16.5042,9.99475,18.97166,7.36133,20.07985l-5.924,2.49292A7.98889,7.98889,0,0,0,8,26H25.5a6.49837,6.49837,0,0,0,5.72253-3.41556Z"
          fill="#28a8ea"
        />
      </g>
    </svg>
  );
  const menuAttachment = (
    <Menu>
      <Menu.Item key="1">View</Menu.Item>
      <Menu.Item key="2">Download</Menu.Item>
      <Menu.Item key="3">Add e-Signature</Menu.Item>
      <hr />
      <Menu.Item key="4" className="text-red-500">
        Delete
      </Menu.Item>
    </Menu>
  );

  const menuIntegration = (
    <Menu>
      <Menu.Item key="1" className="flex items-center">
        {iconGoogleDrive}
        <div className="ml-2">Link from Google Drive™</div>
      </Menu.Item>
      <Menu.Item key="2" className="flex items-center">
        {iconOneDrive}
        <div className="ml-2">Link from Microsoft OneDrive</div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="mx-2 my-4 p-2">
      <div
        className="font-bold cursor-pointer"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        {showContent ? <IconCaretDown /> : <IconCaretRight />}
        <span className="ml-1">Attachments</span>
      </div>
      {showContent && (
        <div className="bg-gray-100 rounded p-0.5 mt-2">
          {data.length > 0 && (
            <Table
              size="small"
              border={false}
              columns={columns}
              data={data}
              showHeader={false}
              pagination={false}
              noDataElement={<div>No checklist</div>}
            />
          )}
          <div className="flex p-2">
            <div className="flex">
              <Upload action="/" showUploadList={false} />
              <Dropdown droplist={menuIntegration} trigger="click">
                <Button type="primary" icon={<IconCaretDown />} iconOnly />
              </Dropdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskAttachment;
