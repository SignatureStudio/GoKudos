import {
  Modal,
  Avatar,
  Input,
  Radio,
  Carousel,
  Tag,
  Tree,
  Checkbox,
} from "@arco-design/web-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { debounce } from "lodash";
import { TASK } from "@/constants";
import { faker } from "@faker-js/faker";

const InvoiceItems = (props) => {
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [checkStrictly, setCheckStrictly] = useState(false);
  const TreeNode = Tree.Node;
  const data = [
    {
      title: "A Group",
      key: faker.datatype.uuid(),
      children: [
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
      ],
    },
    {
      title: "B Group",
      key: faker.datatype.uuid(),
      children: [
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
        {
          title: faker.company.catchPhrase(),
          key: faker.datatype.uuid(),
        },
      ],
    },
  ];
  return (
    <Modal
      title="Add Items"
      visible={props.visible}
      okText="Add Items"
      onOk={() => props.setVisible(false)}
      onCancel={() => props.setVisible(false)}
      autoFocus={false}
      focusLock={true}
      className="w-full max-w-lg"
    >
      <div className="flex-1 pl-4">
        <div>
          <label>
            <div>Project groups and tasks</div>
            <Tree
              checkable
              treeData={data}
              // onCheck={(value, extra) => {
              //   setCheckedKeys(value);
              // }}
            ></Tree>
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default InvoiceItems;
