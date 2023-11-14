export const isNum = (num) => {
    const pattern = /^-?[0-9]\d*(\.\d+)?$/;
    return pattern.test(num);
};

export const isDecimal = (num) => {
    let occ = num.split(".").length
    return (occ <= 2);
};

export const checkList = (name, list) => {
    let result = true;
    list.forEach((item) => {
        if (item.locName === name) {
            result = false;
        }
    });
    return result;
};