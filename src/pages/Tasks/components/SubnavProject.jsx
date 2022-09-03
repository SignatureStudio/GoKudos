import { Menu } from "@arco-design/web-react";
import { IconFolder } from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";
import { projectsData } from "@/pages/Tasks/utils/sample_data"

const SubnavProject = () => {
  return (
    <Menu selectedKeys="1" className="bg-gray-100">
      {projectsData.map((project) => (
        <Link to="/tasks" key={project.id}>
          <Menu.Item
            key={project.id}
            className="text-base"
            style={{ padding: 0 }}
          >
            <div className="bg-gray-100 hover:bg-gray-200">
              <IconFolder className="w-4 h-4 ml-2" /> {project.name}
            </div>
          </Menu.Item>
        </Link>
      ))}
    </Menu>
  );
};
export default SubnavProject;
