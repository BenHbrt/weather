import './Edit.scss';

import LocationCard from './display/LocationCard';
import LocationInput from './display/LocationInput';

import { useState } from 'react';
import { convertFromStorage, convertToStorage } from '../utilities/localStorage';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Edit = ({ locations, setLocations }) => {

    const [input, setInput] = useState(null)

    // const [data, setData] = useState({
    //     locName: "",
    //     lat: "",
    //     lon: ""
    // })

    // const handleArrayChange = () => {
    //     const newArray = [ ...locations ];
    //     newArray.push(data);
    //     setLocations(newArray);
    //     localStorage.setItem("Locations", convertToStorage(newArray));
    // }

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        const updatedList = [...locations];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setLocations(updatedList);
        localStorage.setItem("Locations", convertToStorage(updatedList));
    };

    return (
        <main className="edit">
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
        </>
        : null}
        <div>
            {input ?
                <LocationInput input={input} setInput={setInput} locations={locations} setLocations={setLocations}/>
                :
                <div className="edit_inputButton" onClick={() => setInput({locName: "", lat: "", lon: ""})}>
                    <img src={require('../img/icons/add.png')} alt="add icon" />
                    <span>Add location</span>
                </div>
                
            }
        </div>
        </main>
    );
}

export default Edit;