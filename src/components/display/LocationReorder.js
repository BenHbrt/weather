import './LocationReorder.scss';

import LocationCard from './LocationCard';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { convertToStorage } from '../../utilities/localStorage';
import { produce } from "immer";
import { useCallback, useReducer, useEffect } from 'react'

const dragReducer = produce((draft, action) => {
    switch (action.type) {
      case "MOVE": {
        draft[action.from] = draft[action.from] || [];
        draft[action.to] = draft[action.to] || [];
        const [removed] = draft[action.from].splice(action.fromIndex, 1);
        draft[action.to].splice(action.toIndex, 0, removed);
        
      }
    }
});

const LocationReorder = ({ locations, setLocations, input, selectedMode }) => {

    // const handleDrop = (droppedItem) => {
    //     if (!droppedItem.destination) return;
    //     const updatedList = [...locations];
    //     const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    //     updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    //     setLocations(updatedList);
    // };

    const [state, dispatch] = useReducer(dragReducer, {
        items: locations,
    });

    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
          if (!result.destination) {
            return;
          }
          dispatch({
            type: "MOVE",
            from: result.source.droppableId,
            to: result.destination.droppableId,
            fromIndex: result.source.index,
            toIndex: result.destination.index,
          });
        }
      }, []);

    useEffect(() => {
        localStorage.setItem("Locations", convertToStorage(state.items));
        setLocations(state.items);
    }, [state]);

    return (
    <div className="container">
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" type="PERSON">
            {(provided, snapshot) => {
            return (
                <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="locationList"
                >
                {state.items?.map((loc, index) => {
            return (
            <Draggable key={loc.locName} draggableId={loc.locName} index={index}>
                {(provided, snapshot) => {
                return (
                    <div
                    className="person"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                    <LocationCard item={loc} input={input} selectedMode={selectedMode} />
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
        </DragDropContext>
    </div>
    );
}

export default LocationReorder;