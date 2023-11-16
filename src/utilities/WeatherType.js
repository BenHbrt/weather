import weatherCodes from "../data/WeatherCodes";

const weatherType = (code, daytime) => {
    const type = weatherCodes[code]

    if (daytime === true) {
        const weatherType = {
            code: code,
            type: type
        }
        return weatherType
    } else {
        if (code === 0) {
            const weatherType = {
                code: code,
                type: {
                    name: type.name,
                    img: "moon.png"
                }
            }
            return weatherType
        } else if (code === 1) {
            const weatherType = {
                code: code,
                type: {
                    name: type.name,
                    img: "moon-and-cloud.png"
                }
            }
            return weatherType
        } else if (code === 2) {
            const weatherType = {
                code: code,
                type: {
                    name: type.name,
                    img: "night.png"
                }
            }
            return weatherType
        } else {
            const weatherType = {
                code: code,
                type: type
            }
            return weatherType
        }
    }
    
}
export default weatherType;