const removeFromArray = function (arrIn, ...argsToRemove) {
    if (argsToRemove.length > 0) {
        for (let i = 0; i < argsToRemove.length; i++) {
            for (let j = 0; j < arrIn.length; j++) {
                if (arrIn[j] == argsToRemove[i] && 
                    typeof(arrIn[j]) == typeof(argsToRemove[i])) {
                    arrIn.splice(j, 1);
                }
            }
        }
    }
    return arrIn;
};

// Do not edit below this line
module.exports = removeFromArray;
