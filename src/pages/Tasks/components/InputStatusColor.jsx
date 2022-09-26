import { Badge, Trigger, Input } from "@arco-design/web-react";
import { useState } from "react";

const InputStatusColor = (props) => {
  const [selected, setSelected] = useState('color' in props.data ? props.data.color : 'gray');
  return (
    <div className="flex items-center">
      <div className="px-1">
        <Trigger
          showArrow
          trigger="click"
          position="bl"
          popup={() => (
            <div className="grid grid-cols-4 p-3 bg-white gap-2">
              <Badge
                color="orangered"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("orangered")}
              />
              <Badge
                color="orange"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("orange")}
              />
              <Badge
                color="lime"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("lime")}
              />
              <Badge
                color="cyan"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("cyan")}
              />
              <Badge
                color="purple"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("purple")}
              />
              <Badge
                color="pinkpurple"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("pinkpurple")}
              />
              <Badge
                color="magenta"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("magenta")}
              />
              <Badge
                color="gray"
                dotStyle={{ width: 12, height: 12 }}
                onClick={() => setSelected("gray")}
              />
            </div>
          )}
        >
          <Badge color={selected} dotStyle={{ width: 12, height: 12 }} />
        </Trigger>
      </div>
      <div className="flex-1">
        <Input
          defaultValue={props.data.name}
          placeholder="Add a status name"
          className="px-2"
        />
      </div>
    </div>
  );
};

export default InputStatusColor;
