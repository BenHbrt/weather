export const convertToStorage = (locationArray) => {
    let storageString = "";
    locationArray.forEach((loc, i) => {
        if (i > 0) {
            storageString += `//${loc.locName};${loc.lat};${loc.lon}`;
        } else {
            storageString += `${loc.locName};${loc.lat};${loc.lon}`;
        }  
    });
    return storageString;
};

export const convertFromStorage = (locationString) => {
    const locationsArray = [];
    let locations = locationString.split("//");
    locations.forEach((loc) => {
        const location = {};
        const data = loc.split(";");
        location.locName = data[0];
        location.lat = data[1];
        location.lon = data[2];
        locationsArray.push(location);
    })
    return locationsArray;
};