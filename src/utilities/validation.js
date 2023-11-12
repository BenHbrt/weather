export const isNum = (num) => {
    return /^[0-9\.]*$/g.test(num);
}

export const isDecimal = (num) => {
    let occ = num.split(".").length
    return (occ <= 2);
}
