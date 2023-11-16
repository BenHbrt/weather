const windDirection = (dir) => {
    if (dir > 348.75) {
        return "N"
    } else if (dir > 326.25) {
        return "NNW"
    } else if (dir > 303.75) {
        return "NW"
    } else if (dir > 281.25) {
        return "WNW"
    } else if (dir > 258.75) {
        return "W"
    } else if (dir > 236.25) {
        return "WSW"
    } else if (dir > 213.75) {
        return "SW"
    } else if (dir > 191.25) {
        return "SSW"
    } else if (dir > 168.75) {
        return "S"
    } else if (dir > 146.25) {
        return "SSE"
    } else if (dir > 123.75) {
        return "SE"
    } else if (dir > 101.25) {
        return "ESE"
    } else if (dir > 78.75) {
        return "E"
    } else if (dir > 56.25) {
        return "ENE"
    } else if (dir > 33.75) {
        return "NE"
    } else if (dir > 11.25) {
        return "NNE"
    } else if (dir >= 0) {
        return "N"
    } else {
        return "Unknown"
    }
}
export default windDirection;