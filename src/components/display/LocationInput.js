import './LocationInput.scss';

import { useState } from 'react';
import { convertToStorage } from '../../utilities/localStorage';
import { isNum, isDecimal } from '../../utilities/validation';

const LocationInput = ({ input, setInput, locations, setLocations }) => {

    const [formData, setFormData] = useState(input)
    const [validated, setValidated] = useState({
        locName: "",
        lat: "",
        lon: "",
        valid: false
    })

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
        const validObj = {locName: "", lat: "", lon: "", valid: true}
        console.log(isNum(formData.lat))
        if (!isNum(newFormData.lat)) {
            validObj.lat = "Please enter a valid number.";
            validObj.valid = false;
        }
        if (!isDecimal(newFormData.lat)) {
            validObj.lat = "Please enter a valid number.";
            validObj.valid = false;
        }
        if (newFormData.locName.length > 30) {
            validObj.locName = "Location names must contain less than 30 characters.";
            validObj.valid = false;
        } else if (newFormData.locName.includes("//")) {
            validObj.locName = 'Location names must not contain "//".';
            validObj.valid = false;
        } else if (newFormData.locName.includes(";")) {
            validObj.locName = 'Location names must not contain ";".';
            validObj.valid = false;
        }
        if (newFormData.locName.length == 0) {
            validObj.locName = "Location names must contain at least 1 character.";
            validObj.valid = false;
        }
        setValidated(validObj);
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const newFormData = { ...formData };
            newFormData.lat = position.coords.latitude
            newFormData.lon = position.coords.longitude
            setFormData(newFormData);
        })
    }

    const addLocation = () => {
        const newLocationsArray = [ ...locations ]
        const newLoc = {};
        newLoc.locName = formData.locName;
        newLoc.lat = formData.lat;
        newLoc.lon = formData.lon;
        newLocationsArray.push(newLoc);
        localStorage.setItem("Locations", convertToStorage(newLocationsArray));
        setInput(null);
        setLocations(newLocationsArray);
    }

    const deleteLocation = () => {
        const newLocationsArray = []
        locations.forEach((loc) => {
            if (loc.locName !== input.locName) {
                newLocationsArray.push(loc);
            }
        });
        localStorage.setItem("Locations", convertToStorage(newLocationsArray));
        setInput(null);
        setLocations(newLocationsArray);

    }

    const confirmLocation = () => {
        const newLocationsArray = []
        locations.forEach((loc) => {
            if (loc.locName !== input.locName) {
                newLocationsArray.push(loc);
            } else {
                const newLoc = {};
                newLoc.locName = formData.locName;
                newLoc.lat = formData.lat;
                newLoc.lon = formData.lon;
                newLocationsArray.push(newLoc);
            }
        });
        localStorage.setItem("Locations", convertToStorage(newLocationsArray));
        setInput(null);
        setLocations(newLocationsArray);
    }

    const close = () => {
        setFormData({locName: "", lat: "", lon: ""});
        setInput(null)
    }

    return (
        <div className="locationInput">
            <div className="locationInput_field">
                <span>Location:</span>
                <div className='locationInput_field_input'>
                    <input type="text" name="locName" value={formData.locName} onChange={(e) => handleChange(e)}/>
                    <div>{validated.locName}</div>
                </div>
            </div>
            <div className="locationInput_field">
                <span>Latitude:</span>
                <div className='locationInput_field_input'>
                    <input type="text" name="lat" value={formData.lat} onChange={(e) => handleChange(e)}/>
                    <div>{validated.lat}</div>
                </div>
            </div>
            <div className="locationInput_field">
                <span>Longitude:</span>
                <div className='locationInput_field_input'>
                    <input type="text" name="lon" value={formData.lon} onChange={(e) => handleChange(e)}/>
                    <div>Comment</div>
                </div>
            </div>
            
            {
                input.locName ? null : validated.valid ? <button onClick={addLocation}>Add</button> : null
            }
            {
                input.locName ? null : <button onClick={getCurrentLocation}>Use Current Location</button>
            }
            {
                input.locName ? <button onClick={deleteLocation}>Delete</button> : null
            }
            {
                input.locName && validated.valid ? <button onClick={confirmLocation}>Confirm</button> : null
            }
            <button onClick={close}>Close</button>
            <button onClick={() => console.log(validated)}>Valid</button>
            <button onClick={() => {console.log(formData)}}>Data</button>
        </div>
        
    );
}

export default LocationInput;