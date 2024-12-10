const sumAll = function (startIndx, endIndx) {
    let sum = 0;
    if (startIndx < 0 || endIndx < 0) {
        return "ERROR";
    }
    else if (!Number.isInteger(startIndx) || !Number.isInteger(endIndx)) {
        return "ERROR";
    }
    else if (typeof startIndx != 'number' || typeof endIndx != 'number') {
        return "ERROR";
    }
    else if (startIndx < endIndx) {
        for (i = startIndx; i <= endIndx; i++) {
            sum = sum + i;
        };
    }
    else
        for (i = endIndx; i <= startIndx; i++) {
            sum = sum + i;
        };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
