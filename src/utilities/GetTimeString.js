const getTimeString = (data) => {
    const time = new Date(data)
    const hour = time.getHours()
    let minute = time.getMinutes().toString()
    if (minute.length < 2) {
        minute = "0" + minute
    }
    return `${hour}:${minute}`
}

export default getTimeString;