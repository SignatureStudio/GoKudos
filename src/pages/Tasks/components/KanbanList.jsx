import { Droppable } from "react-beautiful-dnd";
import KanbanItem from "./KanbanItem";
import React from "react";
// import styled from "styled-components";

// const ColumnHeader = styled.div`
//   text-transform: uppercase;
//   margin-bottom: 20px;
// `;

// const DroppableStyles = styled.div`
//   padding: 10px;
//   border-radius: 6px;
//   background: #d4d4d4;
// `;

const KanbanList = ({ prefix, elements }) => (
  <div className="p-2 bg-gray-200 rounded">
    <div className="mb-4">{prefix}</div>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <KanbanItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);
export default KanbanList;
