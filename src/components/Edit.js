import './Edit.scss';

import LocationCard from './display/LocationCard';

import { useState } from 'react';
import { convertFromStorage, convertToStorage } from '../utilities/localStorage';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Edit = ({ locations, setLocations }) => {

    const [data, setData] = useState({
        locName: "",
        lat: "",
        lon: ""
    })

    const handleChange = (e) => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    }

    const handleArrayChange = () => {
        const newArray = [ ...locations ];
        newArray.push(data);
        setLocations(newArray);
        localStorage.setItem("Locations", convertToStorage(newArray));
    }

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        const updatedList = [...locations];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setLocations(updatedList);
        localStorage.setItem("Locations", convertToStorage(updatedList));
    };

    return (
        <main>
        {locations ?
        <>
        <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
            {(provided) => (
            <div
                className="edit_locations"
                {...provided.droppableProps}
                ref={provided.innerRef}
            >
                {locations.map((item, index) => (
                <Draggable key={item} draggableId={item.locName} index={index}>
                    {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                    >
                        <LocationCard item={item} />
                        
                    </div>
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        </DragDropContext>
        <div className="edit_locations_location">
            + Add Location
        </div>
        </>
        : null}
        </main>
    );
}

export default Edit;