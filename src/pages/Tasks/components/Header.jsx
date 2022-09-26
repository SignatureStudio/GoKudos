import { Button, Menu, Dropdown } from "@arco-design/web-react";
import { IconMoreVertical } from "@arco-design/web-react/icon";
import TasksTab from "./Tab";
import ProjectAdd from "./ProjectAdd";
import ProjectDelete from "./ProjectDelete";
import { useState } from "react";
import { Link } from "react-router-dom";

const TasksHeader = (props) => {
  const [modalProject, setModalProject] = useState(false);
  const [modalProjectDelete, setModalProjectDelete] = useState(false);
  const menuProject = (
    <Menu>
      <Menu.Item key="1" onClick={() => setModalProject(true)}>
        Edit project
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setModalProjectMove(true)}>
        Move project
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setModalProjectDuplicate(true)}>
        Duplicate project
      </Menu.Item>
      <hr />
      <Menu.Item key="4">
        <Link to="/tasks/archived" className="flex-1">
          View archived tasks
        </Link>
      </Menu.Item>
      <hr />
      <Menu.Item key="5" onClick={() => setModalProjectDelete(true)}>
        Delete project
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="flex items-center h-14 pt-4">
        <h1 className="flex-1">{props.name}</h1>
        <div className="pr-2">
          <Dropdown droplist={menuProject} trigger="click">
            <Button type="text" className="px-2">
              <IconMoreVertical className="text-gray-600 h-4 w-4" />
            </Button>
          </Dropdown>
        </div>
      </div>
      <ProjectAdd visible={modalProject} setVisible={setModalProject} />
      <ProjectDelete
        visible={modalProjectDelete}
        setVisible={setModalProjectDelete}
      />
    </>
  );
};

export default TasksHeader;
