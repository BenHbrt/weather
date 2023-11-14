import './Edit.scss';

import LocationCard from './display/LocationCard';
import LocationInput from './display/LocationInput';
import LocationList from './display/LocationList';

import { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Edit = ({ locations, setLocations }) => {

    const [input, setInput] = useState(null)

    return (
        <main className="edit">
            {locations ? <LocationList locations={locations} setLocations={setLocations} input={input} setInput={setInput} /> : null}
            <div>
                {input ?
                    <LocationInput input={input} setInput={setInput} locations={locations} setLocations={setLocations}/>
                    :
                    <div className="edit_inputButton" onClick={() => setInput({locName: "", lat: "", lon: ""})}>
                        <img src={require('../img/icons/add_location.png')} alt="add icon" />
                        <span>Add location</span>
                    </div>
                    
                }
            </div>
        </main>
    );
}

export default Edit;