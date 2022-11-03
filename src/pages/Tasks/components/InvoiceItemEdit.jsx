import {
  Modal,
  Cascader,
  Select,
  Input,
  DatePicker,
  Radio,
  Button,
} from "@arco-design/web-react";
import { useState } from "react";

const InvoiceItemEdit = (props) => {
  const [type, setType] = useState("task");
  const groups = [
    {
      name: "A Group",
      id: "group01",
      tasks: [
        {
          name: "Task Name 02",
          id: "task01",
        },
        {
          name: "Task Name 02",
          id: "task02",
        },
        {
          name: "Task Name 03",
          id: "task03",
        },
        {
          name: "Task Name 04",
          id: "task04",
        },
      ],
    },
    {
      name: "B Group",
      id: "group02",
      tasks: [
        {
          name: "Task Name 05",
          id: "task05",
        },
        {
          name: "Task Name 06",
          id: "task06",
        },
        {
          name: "Task Name 07",
          id: "task07",
        },
        {
          name: "Task Name 08",
          id: "task08",
        },
      ],
    },
  ];
  return (
    <Modal
      title="Edit Item"
      visible={props.visible}
      okText="Edit Item"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div>
        <div className="mb-4">
          <div className="mb-1">Type</div>
          <Radio.Group
            type="button"
            showSearch
            defaultValue={type}
            value={type}
            onChange={(e) => {
              setType(e);
            }}
          >
            <Radio value="task">Task</Radio>
            <Radio value="custom">Custom</Radio>
          </Radio.Group>
        </div>
        <div className="mb-4">
          <div className="mb-1">Description</div>
          {type === "task" ? (
            <Select
              placeholder="Please select"
              defaultValue="task01"
              value="task01"
              showSearch
              allowClear
              onChange={(value) => console.log(value)}
            >
              {groups.map((group) => (
                <Select.OptGroup label={group.name} key={group.id}>
                  {group.tasks.map((task) => (
                    <Select.Option value={task.id} key={task.id}>
                      {task.name}
                    </Select.Option>
                  ))}
                </Select.OptGroup>
              ))}
            </Select>
          ) : (
            <Input placeholder="Add a description" />
          )}
        </div>
        <div className="mb-4">
          <div className="mb-1">Budget value</div>
          <Input prefix="RM" placeholder="0.00" />
        </div>
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <div className="mb-1">Bill Amount</div>
            <Input prefix="RM" placeholder="0.00" />
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <div className="mb-1">Discount</div>
            <Input suffix="%" placeholder="0.00" />
          </div>
          <div className="mb-4">
            <div className="mb-1">Tax</div>
            <Input suffix="%" placeholder="0.00" />
          </div>
        </div>
        <div className="pt-2">
          <Button type="text" className="px-0">Delete Item</Button>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceItemEdit;
