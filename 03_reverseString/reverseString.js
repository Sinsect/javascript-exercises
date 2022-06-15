const reverseString = function(stringIn) {
    let stringOut = "";
    for (let i = 1; i <= stringIn.length; i++) {
        stringOut += stringIn.charAt(stringIn.length - i);
    }
    return stringOut;
};

// Do not edit below this line
module.exports = reverseString;
