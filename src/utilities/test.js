const test1 = "Close";
const test2 = "Add Location";

const parseText = (text) => {
    return text.split(" ")[0];
};

console.log(parseText(test1));
console.log(parseText(test2));