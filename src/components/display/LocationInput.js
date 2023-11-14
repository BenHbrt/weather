import './LocationInput.scss';

import Button from './Button';

import { useState, useEffect } from 'react';
import { convertToStorage } from '../../utilities/localStorage';
import { isNum } from '../../utilities/validation';

const LocationInput = ({ input, setInput, locations, setLocations }) => {

    const [formData, setFormData] = useState(input)
    const [validated, setValidated] = useState({
        locName: "",
        lat: "",
        lon: "",
        valid: false
    });

    const validateData = (data) => {
        const validObj = {locName: "", lat: "", lon: "", valid: true}
        if (!isNum(data.lat)) {
            validObj.lat = "Please enter a valid number.";
            validObj.valid = false;
        } else if (data.lat < -90 || data.lat > 90) {
            validObj.lat = "Please enter a number between -90 and 90.";
            validObj.valid = false;
        }
        if (!isNum(data.lon)) {
            validObj.lon = "Please enter a valid number.";
            validObj.valid = false;
        } else if (data.lon < -180 || data.lon > 180) {
            validObj.lon = "Please enter a number between -180 and 180.";
            validObj.valid = false;
        }
        if (data.locName.length > 30) {
            validObj.locName = "Location must contain less than 30 characters.";
            validObj.valid = false;
        } else if (data.locName.includes("//")) {
            validObj.locName = 'Location must not contain "//".';
            validObj.valid = false;
        } else if (data.locName.includes(";")) {
            validObj.locName = 'Location must not contain ";".';
            validObj.valid = false;
        }
        if (data.locName.length === 0) {
            validObj.locName = "Location must contain at least 1 character.";
            validObj.valid = false;
        }
        setValidated(validObj);
    }

    const handleChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const newFormData = { ...formData };
            newFormData.lat = position.coords.latitude.toString();
            newFormData.lon = position.coords.longitude.toString();
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

    useEffect(() => {
        validateData(formData);
    }, [formData]);

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
                    <div>{validated.lon}</div>
                </div>
            </div>
            <div className="locationInput_control">
            {
                input.locName ? null : <Button text={"Add"} func={addLocation} active={validated.valid} />
            }
            {
                input.locName ? <Button text={"Confirm"} func={confirmLocation} active={validated.valid} /> : null
            }
            {
                input.locName ? <Button text={"Delete"} func={deleteLocation} active={true} /> : null
            }
            
                <Button text={"Close"} func={close} active={true} />
            </div>
            {/* <button onClick={() => console.log(validated)}>Valid</button>
            <button onClick={() => {console.log(formData)}}>Data</button> */}
            {
                input.locName ? null : <button onClick={getCurrentLocation}>Use Current Location</button>
            }
        </div>
        
    );
}

export default LocationInput;