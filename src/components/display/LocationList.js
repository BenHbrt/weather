import './LocationList.scss';

import LocationCard from './LocationCard';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { convertToStorage } from '../../utilities/localStorage';

const LocationList = ({ locations, setLocations, input, setInput }) => {

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        const updatedList = [...locations];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setLocations(updatedList);
        localStorage.setItem("Locations", convertToStorage(updatedList));
    };

    return (
        <div>
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
                        <LocationCard item={item} setInput={setInput} input={input}/>
                        
                    </div>
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        </DragDropContext>
        </div>
    );
}

export default LocationList;