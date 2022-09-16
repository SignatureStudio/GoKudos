import { Menu, Button, Dropdown } from "@arco-design/web-react";
import {
  IconFolder,
  IconPlus,
  IconSort,
  IconMore,
  IconMoreVertical,
} from "@arco-design/web-react/icon";
import { Link } from "react-router-dom";
import { projectsData } from "@/pages/Tasks/utils/sample_data";
import AddProject from "./AddProject";
import DeleteProject from "./DeleteProject";
import AddWorkspace from "./AddWorkspace";
import DeleteWorkspace from "./DeleteWorkspace";
import { useState } from "react";

const SubnavProject = () => {
  const [modalWorkspace, setModalWorkspace] = useState(false);
  const [modalDeleteWorkspace, setModalDeleteWorkspace] = useState(false);
  const [modalProject, setModalProject] = useState(false);
  const [modalDeleteProject, setModalDeleteProject] = useState(false);

  const menuWorkspace = (
    <Menu>
      <Menu.Item key="1" onClick={() => setModalWorkspace(true)}>
        Edit workspace
      </Menu.Item>
      <hr />
      <Menu.Item key="2" onClick={() => setModalDeleteWorkspace(true)}>
        Delete workspace
      </Menu.Item>
    </Menu>
  );

  const menuProject = (
    <Menu>
      <Menu.Item key="1" onClick={() => setModalProject(true)}>
        Edit project
      </Menu.Item>
      <hr />
      <Menu.Item key="2" onClick={() => setModalDeleteProject(true)}>
        Delete project
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Menu selectedKeys="1" className="bg-gray-100">
        <Menu.Item className="text-base" style={{ padding: 0 }}>
          <div className="bg-gray-100 hover:bg-gray-200 pl-2 flex items-center">
            <Link to="/tasks/workspace" className="flex-1">
              All projects
            </Link>
            <Dropdown droplist={menuWorkspace} trigger="click">
              <div className="-mr-4 px-1">
                <IconMoreVertical className="h-4 w-4" />
              </div>
            </Dropdown>
          </div>
        </Menu.Item>
        <hr className="my-2" />
        {projectsData.map((project) => (
          <Menu.Item
            key={project.id}
            className="text-base"
            style={{ padding: 0 }}
          >
            <div className="flex items-center bg-gray-100 hover:bg-gray-200">
              <Link to="/tasks" key={project.id} className="flex-1">
                <div>
                  <IconFolder className="w-4 h-4 ml-2" /> {project.name}
                </div>
              </Link>
              <Dropdown droplist={menuProject} trigger="click">
                <div className="-mr-4 px-1">
                  <IconMoreVertical className="h-4 w-4" />
                </div>
              </Dropdown>
            </div>
          </Menu.Item>
        ))}
        <hr className="my-2" />
        <Menu.Item
          className="text-base"
          style={{ padding: 0 }}
          onClick={() => setModalProject(true)}
        >
          <div className="bg-gray-100 hover:bg-gray-200">
            <IconPlus className="w-4 h-4 ml-2" /> Add Project
          </div>
        </Menu.Item>
      </Menu>
      <AddWorkspace visible={modalWorkspace} setVisible={setModalWorkspace} />
      <DeleteWorkspace visible={modalDeleteWorkspace} setVisible={setModalDeleteWorkspace} />
      <AddProject visible={modalProject} setVisible={setModalProject} />
      <DeleteProject visible={modalDeleteProject} setVisible={setModalDeleteProject} />
    </>
  );
};
export default SubnavProject;
