const isDaytime = (currentTime, sunrise, sunset) => {
    if (currentTime >= sunrise && currentTime <= sunset) {
        return true
    } else {
        return false
    }
}
export default isDaytime;