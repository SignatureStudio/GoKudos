import { Radio, Button } from "@arco-design/web-react";
import { Link, useLocation } from 'react-router-dom';

const TasksBillingNav = (props) => {
  let currentPath = useLocation().pathname || "";
  if (currentPath === "/tasks/billing/quote") {
    currentPath = "/tasks/billing"
  }
  return (
    <div className="flex items-center h-12 border-b border-gray-300 px-2">
      <Radio.Group
        type="button"
        size="small"
        defaultValue={currentPath}
        value={currentPath}
        onChange={(e) => {
          // useNavigate(`/task/billing/${e}`)
          // props.setTimeScale(e);
        }}
        className="hidden md:inline-block"
      >
        <Radio value="/tasks/billing"><Link to="/tasks/billing">Invoice</Link></Radio>
        <Radio value="/tasks/billing/claims"><Link to="/tasks/billing/claims">Claims</Link></Radio>
        <Radio value="/tasks/billing/timecost"><Link to="/tasks/billing/timecost">Time Cost</Link></Radio>
      </Radio.Group>
    </div>
  );
};
export default TasksBillingNav;
