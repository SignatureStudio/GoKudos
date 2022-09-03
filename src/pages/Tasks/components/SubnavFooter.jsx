import { Menu } from "@arco-design/web-react";
import { IconFolder, IconPlus, IconSort } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";

const SubnavFooter = () => {
  return (
    <>
    <hr className="my-2" />
    <Menu className="bg-gray-100">
      <Link to="/tasks/workspace">
        <Menu.Item className="text-base" style={{ padding: 0 }}>
          <div className="bg-gray-100 hover:bg-gray-200">
            <IconSort className="w-4 h-4 ml-2" /> Workspace Summary
          </div>
        </Menu.Item>
      </Link>
      <Menu.Item className="text-base" style={{ padding: 0 }}>
        <div className="bg-gray-100 hover:bg-gray-200">
          <IconPlus className="w-4 h-4 ml-2" /> Add Project
        </div>
      </Menu.Item>
    </Menu>
    </>
  );
};
export default SubnavFooter;
