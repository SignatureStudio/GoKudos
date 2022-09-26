import { Draggable } from "react-beautiful-dnd";
// import { LoremIpsum } from "lorem-ipsum";
// import { generateFromString } from "generate-avatar";
import React, { useMemo } from "react";
import { Avatar } from "@arco-design/web-react";
import { faker } from "@faker-js/faker";
// import styled, { css } from "styled-components";

// const Avatar = styled.img`
//   height: 30px;
//   width: 30px;
//   border: 3px solid white;
//   border-radius: 50%;
// `;

// const CardHeader = styled.div`
//   font-weight: 500;
// `;

// const Author = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const CardFooter = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const DragItem = styled.div`
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   background: white;
//   margin: 0 0 8px 0;
//   display: grid;
//   grid-gap: 20px;
//   flex-direction: column;
// `;

// const lorem = new LoremIpsum();

const TaskKanbanItem = ({ item, index }) => {
  const randomHeader = useMemo(() => faker.lorem.lines());

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div className="p-2 rounded shadow bg-white mb-2"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>{randomHeader}</div>
            <span>Content</span>
            <div className="flex items-center">
              <span>{item.content}</span>
              <div className="flex items-center">
                {item.id}
                <Avatar>
                  <img src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`} alt="" />
                </Avatar>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskKanbanItem;
