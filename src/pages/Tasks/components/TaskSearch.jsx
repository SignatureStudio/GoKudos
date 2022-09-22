import { Modal, Input } from "@arco-design/web-react";
import { useState } from "react";
import { IconCaretRight, IconCaretUp } from "@arco-design/web-react/icon";
import InputSelectMember from "./InputSelectMember";
import InputSelectStatus from "./InputSelectStatus";
import InputTimeline from "./InputTimeline";
import { useNavigate } from "react-router-dom";

const TaskSearch = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        title="Search"
        visible={props.visible}
        okText="Search"
        onOk={() => {
          props.setVisible(false)
          navigate({
            pathname: '/tasks',
            search: '?q=keyword'
          })
        }}
        onCancel={() => props.setVisible(false)}
        autoFocus={false}
        focusLock={true}
        className="w-full max-w-lg"
      >
        <div>
          <label>
            <div className="mb-1">Task name</div>
            <Input.Search allowClear placeholder="Enter keyword to search" />
          </label>
        </div>
        <div
          className="flex items-center my-4 px-1 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <div className="text-xs mr-1">
            {showFilter ? <IconCaretUp /> : <IconCaretRight />}
          </div>
          <div>Filters</div>
        </div>
        {showFilter && (
          <div className="border border-gray-200 rounded divide-y divide-gray-200 bg-white">
            <div className="px-2 py-3 flex items-center">
              <div className="flex-1">Status</div>
              <div className="w-40">
                <InputSelectStatus data={{}} />
              </div>
            </div>
            <div className="px-2 py-3 flex items-center">
              <div className="flex-1">Timeline</div>
              <div className="w-40 pl-2">
                <InputTimeline data={null} />
              </div>
            </div>
            <div className="px-2 py-3 flex items-center">
              <div className="flex-1">Assignee</div>
              <div className="w-40">
                <InputSelectMember data={[]} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TaskSearch;
