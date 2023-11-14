import './LocationCard.scss';

import { useState } from 'react';

const LocationCard = ({ item, setInput, selectedMode, isDragging }) => {

    const [hover, setHover] = useState(null)

    const clickHandler = () => {
        if (selectedMode === null) {
            return;
        } else if (selectedMode === "Edit location") {
            setInput(item);
        }
    }

    return (
        <div className={`locationCard ${selectedMode === "Edit location" ? "editable" : ""} ${selectedMode === "Reorder locations" ? "draggable" : ""} ${isDragging ? "dragging" : ""}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickHandler}>
            <span className="locationCard_name">{item.locName}</span>
            <span className={`locationCard_instructions ${hover ? 'hover' : isDragging ? "hover" : ''}`}>
                {selectedMode === "Edit location" ? "Click to edit" : null}
                {selectedMode === "Reorder locations" ? "Hold to drag" : null}
            </span>
        </div>
    );
}

export default LocationCard;