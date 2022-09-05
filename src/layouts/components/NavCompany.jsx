// import { IconLeft, IconRight } from '@arco-design/web-react/icon';
import { Avatar, Button, Dropdown, Menu } from "@arco-design/web-react";
import { IconDown, IconPlus } from "@arco-design/web-react/icon";
import { faker } from "@faker-js/faker";

const companies = {
  selected: {
    id: 1,
    name: "Acme Corp",
    avatar: "/dummy/logo1.png",
  },
  list: [
    {
      id: 1,
      name: "Barbara Inc.",
      avatar: "/dummy/logo2.png",
    },
    {
      id: 2,
      name: "Coco Co.",
      avatar: "/dummy/logo3.png",
    },
  ],
};


const NavCompany = (props) => {
  const droplistCompany = (
    <Menu className="w-72">
      {companies.list.map((company) => {
        return (
          <Menu.Item key={company.id} className="flex items-center h-12">
            <Avatar shape="square" size={32}>
              {company.avatar === "" ? (
                company.name.charAt(0)
              ) : (
                <img src={company.avatar} alt={company.name} />
              )}
            </Avatar>
            { props.aside && (
              <div className="menu-text">{company.name}</div>
            )}
          </Menu.Item>
        );
      })}
      <hr className="my-2" />
      <Menu.Item>
        <IconPlus /> <span className="menu-text">Add company</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="p-2">
      <Dropdown droplist={droplistCompany} trigger="click">
        <div className="menu border">
          <Avatar shape="square" size={32}>
            {companies.selected.avatar === "" ? (
              companies.selected.name.charAt(0)
            ) : (
              <img
                src={companies.selected.avatar}
                alt={companies.selected.name}
              />
            )}
          </Avatar>
          { props.aside && !props.subnav && (
            <>
              <div className="menu-text">{companies.selected.name}</div>
              <IconDown />
            </>
          )}
        </div>
      </Dropdown>
    </div>
  );
};
export default NavCompany;
