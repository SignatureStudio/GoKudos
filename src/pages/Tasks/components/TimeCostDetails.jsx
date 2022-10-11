import { Modal, Button, Table, Avatar } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import dayjs from "dayjs";
import { useState } from "react";
import InputTimeRange from "../components/InputTimeRange";
import TimeCostAddSimple from "../components/TimeCostAddSimple";
// import InputSelectMember from "../components/InputSelectMember";
const TimeCostDetails = (props) => {
  const [modalTimeCostAdd, setModalTimeCostAdd] = useState(false);
  // console.log(dayjs(new Date(2022, 10, 1)));
  const columns = [
    {
      dataIndex: "index",
      title: "#",
      width: 25,
      align: "center",
      render: (col, record, index) => {
        return <div className="text-gray-300">{index + 1}</div>;
      },
    },
    {
      dataIndex: "time",
      title: "Time",
      width: 160,
      render: (col, record, index) => {
        return <InputTimeRange data={record} />;
      },
    },
    {
      dataIndex: "duration",
      title: "Duration",
      width: 80,
      align: "center",
      render: (col, record, index) => {
        return <div>{col} hrs</div>;
      },
    },
  ];
  const data = [
    {
      key: 1,
      startDate: dayjs("2022-10-01 09:00"),
      endDate: dayjs("2022-10-01 11:00"),
      duration: 2,
    },
    {
      key: 2,
      startDate: dayjs("2022-10-01 15:00"),
      endDate: dayjs("2022-10-01 17:00"),
      duration: 2,
    },
    {
      key: 3,
      startDate: dayjs("2022-10-02 09:00"),
      endDate: dayjs("2022-10-02 11:00"),
      duration: 2,
    },
  ];

  return (
    <>
      <Modal
        title="Add Time Cost"
        visible={props.visible}
        okText="Done"
        onOk={() => props.setVisible(false)}
        onCancel={() => props.setVisible(false)}
        autoFocus={false}
        focusLock={true}
        className="w-full max-w-3xl"
      >
        <div>
          <div className="mb-2 flex">
            <div className="w-20">Task</div>
            <div className="font-bold">Task Name</div>
          </div>
          <div className="mb-8 flex">
            <div className="w-20">Member</div>
            <div className="font-bold">Member Name</div>
          </div>
        </div>
        <Table
          size="small"
          scroll={{ x: true }}
          columns={columns}
          data={data}
          pagination={false}
          noDataElement={<div>NOTHING</div>}
          className="border-gray-300 border rounded"
          // summary={(currentData) => (
          //   <Table.Summary>
          //     <Table.Summary.Row>
          //       <Table.Summary.Cell colSpan={2} />
          //       <Table.Summary.Cell className="text-center font-bold">
          //         19 hrs
          //       </Table.Summary.Cell>
          //     </Table.Summary.Row>
          //   </Table.Summary>
          // )}
        />
        <div className="py-2">
          <Button
            size="mini"
            type="text"
            icon={<IconPlus />}
            className="mt-2"
            onClick={() => setModalTimeCostAdd(true)}
          >
            Add Time
          </Button>
        </div>
      </Modal>
      <TimeCostAddSimple
        visible={modalTimeCostAdd}
        setVisible={setModalTimeCostAdd}
      />
    </>
  );
};

export default TimeCostDetails;
