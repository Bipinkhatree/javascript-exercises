const reverseString = function (str) {
    let finalStr = [];
    let newStr = "";
    const arrayOfString = str.split(" ");
    for (let x = arrayOfString.length - 1; x >= 0; x--) {
        for (let i = arrayOfString[x].length - 1; i >= 0; i--) {
            newStr += arrayOfString[x][i];
        }
        finalStr.push(newStr);
        newStr = "";
    }

    return finalStr.join(" ");
};

// Do not edit below this line
module.exports = reverseString;
