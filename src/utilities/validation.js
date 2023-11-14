export const isNum = (num) => {
    const pattern = /^-?[0-9]\d*(\.\d+)?$/;
    return pattern.test(num);
}

export const isDecimal = (num) => {
    let occ = num.split(".").length
    return (occ <= 2);
}