import { Select, Button } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";

const InputProps = (props) => {
  return (
    <Select
      defaultValue={["name", "status", "duedate", "members", "activity"]}
      mode="multiple"
      onChange={(e) => {
        console.log(e);
      }}
      triggerElement={
        <div className="w-40">
          <Button icon={<IconPlus />}>{props.text}</Button>
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
  );
};

export default InputProps;
