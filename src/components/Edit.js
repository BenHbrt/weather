import './Edit.scss';

import LocationInput from './display/LocationInput';
import LocationReorder from './display/LocationReorder';
import Button from './display/Button';
import LocationList from './display/LocationList';

import { useState } from 'react';

const Edit = ({ locations, setLocations }) => {

    const [input, setInput] = useState(null)

    const [selectedMode, setSelectedMode] = useState(null)

    const selectMode = (mode) => {
        if (mode === selectedMode) {
            setSelectedMode(null);
        } else {
            setSelectedMode(mode);
        }
    }

    return (
        <main className="edit">
            <div className="edit_control">
                <Button text={"Add location"} func={() => {setInput({locName: "", lat: "", lon: ""}); selectMode("Add location")}} active={true} selectedMode={selectedMode} />
                <Button text={"Reorder locations"} func={() => selectMode("Reorder locations")} active={true} selectedMode={selectedMode}/>
                <Button text={"Edit location"} func={() => {setInput(null); selectMode("Edit location")}} active={true} selectedMode={selectedMode}/>
            </div>
            {locations ? 
            <div className="edit_content">
                {/* <LocationList dispatch={dispatch} locations={locations} setLocations={setLocations} input={input} setInput={setInput} state={state} /> */}
                {selectedMode === null ? <LocationList locations={locations} selectedMode={selectedMode} /> : null}
                {selectedMode === "Add location" ? <LocationInput input={input} setInput={setInput} locations={locations} setLocations={setLocations} setSelectedMode={setSelectedMode} selectedMode={selectedMode} /> : null}
                {selectedMode === "Reorder locations" ? <LocationReorder locations={locations} setLocations={setLocations} setInput={setInput} selectedMode={selectedMode} /> : null}
                {selectedMode === "Edit location" && input === null ? <LocationList locations={locations} selectedMode={selectedMode} setInput={setInput} /> : null}
                {selectedMode === "Edit location" && input ? <LocationInput input={input} setInput={setInput} locations={locations} setLocations={setLocations} selectedMode={selectedMode} setSelectedMode={setSelectedMode} /> : null}
                
            </div>
            : null}
        </main>
    );
}

export default Edit;