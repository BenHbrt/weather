import './LocationCard.scss';

import { useState } from 'react';

const LocationCard = ({ item, setInput, input }) => {

    const [hover, setHover] = useState(null)


    return (
        <div className={`locationCard ${input ? input.locName === item.locName ? "" : "disabled" : ""}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {if (!input) {setInput(item)}}}>
            <span>{item.locName}</span>
            <div className={`locationCard_instructions ${input ? "disabled" : ""} ${hover ? 'hover' : ''}`}>
                <span>Click to edit</span>
                <span>Hold to drag</span>
            </div>
        </div>
    );
}

export default LocationCard;