const repeatString = function(repeatText, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }
    let outputText = "";
    for (let i = 0; i < repeatCount; i++) {
        outputText += repeatText;
    }
    return outputText;
};

// Do not edit below this line
module.exports = repeatString;
