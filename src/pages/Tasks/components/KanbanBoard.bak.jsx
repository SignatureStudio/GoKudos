import { Tag, Avatar, Badge, Button } from "@arco-design/web-react";
import {
  IconMessage,
  IconAttachment,
  IconPlus,
} from "@arco-design/web-react/icon";
// import { displayTimeline } from "../utils/_utils";
// import styled from "styled-components";
// import { DragDropContext } from "react-beautiful-dnd";
// import KanbanList from "./KanbanList";
import KanbanTask from "./KanbanTask";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { displayTasksBy } from "../utils/_utils";
import SearchFilter from "./SearchFilter";

const KanbanBoard = (props) => {
  const itemsFromBackend = [
    { id: faker.datatype.uuid(), content: "First task" },
    { id: faker.datatype.uuid(), content: "Second task" },
    { id: faker.datatype.uuid(), content: "Third task" },
    { id: faker.datatype.uuid(), content: "Fourth task" },
    { id: faker.datatype.uuid(), content: "Fifth task" },
  ];

  const columnsFromBackend = {
    [faker.datatype.uuid()]: {
      name: "Requested",
      items: itemsFromBackend,
    },
    [faker.datatype.uuid()]: {
      name: "To do",
      items: [],
    },
    [faker.datatype.uuid()]: {
      name: "In Progress",
      items: [],
    },
    [faker.datatype.uuid()]: {
      name: "Done",
      items: [],
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  const data = displayTasksBy[props.displayBy](props.data);

  return (
    <div className="p-3 bg-gray-50">
      <SearchFilter />
      <div className="flex overflow-auto ">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {data.map((board) => (
            <div className="flex-none p-1.5 w-72" key={board.id}>
              <div className="bg-gray-100 px-2 py-3 rounded border border-gray-300">
                <div className="py-0 px-2">{board.name}</div>
                <Droppable droppableId={board.id} key={board.id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {board.tasks.map((task) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: snapshot.isDragging
                                      ? "#263B4A"
                                      : "#456C86",
                                    color: "white",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {task.name}
                                </div>
                              );
                            }}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
                <Button
                  size="mini"
                  type="text"
                  icon={<IconPlus />}
                  className="mt-2"
                >
                  Add Task
                </Button>
              </div>
            </div>
          ))}

          {/* {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })} */}
        </DragDropContext>
      </div>
    </div>
  );
  // const DragDropContextContainer = styled.div`
  //   padding: 20px;
  //   border: 4px solid indianred;
  //   border-radius: 6px;
  // `;

  // const ListGrid = styled.div`
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   grid-gap: 8px;
  // `;

  // fake data generator
  // const getItems = (count, prefix) =>
  //   Array.from({ length: count }, (v, k) => k).map((k) => {
  //     const randomId = Math.floor(Math.random() * 1000);
  //     return {
  //       id: `item-${randomId}`,
  //       prefix,
  //       content: `item ${randomId}`,
  //     };
  //   });

  // const removeFromList = (list, index) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(index, 1);
  //   return [removed, result];
  // };

  // const addToList = (list, index, element) => {
  //   const result = Array.from(list);
  //   result.splice(index, 0, element);
  //   return result;
  // };

  // const lists = ["todo", "inProgress", "done"];

  // const generateLists = () =>
  //   lists.reduce(
  //     (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
  //     {}
  //   );

  // function DragList() {
  //   const [elements, setElements] = React.useState(generateLists());

  //   useEffect(() => {
  //     setElements(generateLists());
  //   }, []);

  //   const onDragEnd = (result) => {
  //     if (!result.destination) {
  //       return;
  //     }
  //     const listCopy = { ...elements };

  //     const sourceList = listCopy[result.source.droppableId];
  //     const [removedElement, newSourceList] = removeFromList(
  //       sourceList,
  //       result.source.index
  //     );
  //     listCopy[result.source.droppableId] = newSourceList;
  //     const destinationList = listCopy[result.destination.droppableId];
  //     listCopy[result.destination.droppableId] = addToList(
  //       destinationList,
  //       result.destination.index,
  //       removedElement
  //     );

  //     setElements(listCopy);
  //   };
  // }

  // return (
  //   <>
  //     <div>asdasd</div>
  //     <DragDropContext onDragEnd={onDragEnd}>
  //       dsadasd
  //       <div className="flex">
  //         {lists.map((listKey) => (
  //           <KanbanList
  //             elements={elements[listKey]}
  //             key={listKey}
  //             prefix={listKey}
  //           />
  //         ))}
  //       </div>
  //     </DragDropContext>
  //   </>
  // );
};
export default KanbanBoard;
