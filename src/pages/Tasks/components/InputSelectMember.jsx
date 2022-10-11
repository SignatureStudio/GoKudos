import { Select, Avatar, Input } from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import { members as MEMBERS } from "../utils/sample_data";
import { useState } from "react";
import { debounce } from "lodash";

const InputSelectMember = (props) => {
  const [selected, setSelected] = useState(props.data);
  const [options, setOptions] = useState(MEMBERS);
  const [multiple, setMultiple] = useState(props.multiple ?  props.multiple : 'multiple');
  return (
    <Select
      defaultValue={selected}
      showSearch
      mode={multiple}
      onChange={(e) => {
        console.log(e);
        setSelected(e);
      }}
      triggerElement={
        <div className="w-full">
          {selected.length ? (
            <Avatar.Group size={24}>
              {MEMBERS.map((member) => (
                <span key={member.id}>
                  {selected.includes(member.id) && (
                    <Avatar key={member.id}>
                      {member.avatar === "" ? (
                        member.name.charAt(0)
                      ) : (
                        <img src={member.avatar} alt={member.name} />
                      )}
                    </Avatar>
                  )}
                </span>
              ))}
            </Avatar.Group>
          ) : (
            <div className="cursor-pointer hover:bg-gray-200 px-1">
              <IconPlus className="text-gray-600 hover:text-gray-900" />
            </div>
          )}
        </div>
      }
      dropdownRender={(menu) => (
        <>
          {menu}
          <hr />
          <div className="p-2">
            <Input.Search
              placeholder="Search"
              allowClear
              onChange={debounce((e) => {
                let res = [];
                const regex = new RegExp(e, "gi");

                MEMBERS.map((member) => {
                  if (member.name.match(regex)) {
                    res.push(member);
                  }
                });
                setOptions(res);
              }, 1000)}
            />
          </div>
        </>
      )}
    >
      {options.map((member) => (
        <Select.Option value={member.id} key={member.id}>
          {member.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default InputSelectMember;
