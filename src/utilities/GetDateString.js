const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getDateString = (date) => {
    const inputData = new Date(date)
    const day = days[inputData.getDay()]
    const month = months[inputData.getMonth()]
    return `${day} ${inputData.getDate()} ${month}`
}

export default getDateString;