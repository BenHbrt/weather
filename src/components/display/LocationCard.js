import { useState } from 'react';

const LocationCard = ({ item }) => {

    const [hover, setHover] = useState(false)


    return (
        <div className="edit_locations_location"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            {item.locName}
            {hover ?
                <img src={require('../../img/icons/edit.png')} alt="edit icon" />
                : null
            }
        </div>
    );
}

export default LocationCard;