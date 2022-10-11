import { Modal, Tree } from "@arco-design/web-react";
import { faker } from "@faker-js/faker";

const QuoteItems = (props) => {
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

export default QuoteItems;
