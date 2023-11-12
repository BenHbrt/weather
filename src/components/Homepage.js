import './Homepage.scss';

import demoLocations from '../utilities/demoLocations';

import { useState, useEffect } from 'react';

const Homepage = () => {

    const [locations, setLocations] = useState(null);

    const loadLocations = () => {
        const data = localStorage.getItem("Locations");
        let locationData = null
        if (data) {
            locationData = "DATA!"
        } else {
            locationData = demoLocations
        };
        setLocations(locationData);
    }

    useEffect(() => {
        loadLocations()
    }, []);

    return (
        <main>
            <div>
                {
                    locations ? locations.map((location) => {
                        return <div key={location.locName}>{location.locName}</div>
                    })
                    : null
                }
            </div>
            <button onClick={() => console.log(locations)} >Locations</button>
        </main>
    );
}

export default Homepage;