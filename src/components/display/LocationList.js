import './LocationList.scss';

import LocationCard from './LocationCard';

const LocationList = ({ locations, selectedMode, setInput, setSelectedMode }) => {
    return (
        <div className="locationList">
            {
                locations.map((loc) => {
                    return <LocationCard key={loc.locName} item={loc} selectedMode={selectedMode} setInput={setInput} setSelectedMode={setSelectedMode}/>
                })
            }
        </div>
    )
}

export default LocationList;