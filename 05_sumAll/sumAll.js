const sumAll = function (int1, int2) {
    let startInt = 0;
    let endInt = 0;
    if (int1 >= 0 && int2 >= 0 &&
        typeof (int1) == "number" && typeof (int2) == "number") {
        if (int1 < int2) {
            startInt = int1;
            endInt = int2;
        }
        else {
            startInt = int2;
            endInt = int1;
        }
        let sumInt = startInt;
        for (let i = startInt + 1; i <= endInt; i++) {
            sumInt += i;
        }
        return sumInt;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
