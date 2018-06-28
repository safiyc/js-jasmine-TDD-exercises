var sumAll = function(a, b) {
    let isHigher;
    let isLower;
    let length;
    let isAnswer;

    if (a < 0 || b < 0) {
        return "ERROR";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else {
        if (a > b) {
            isHigher = a;
            isLower = b;
        } else {
            isHigher = b;
            isLower = a;
        }
    
        length = (isHigher - isLower) + 1;
        isAnswer = isLower;
            
        for (let i = isLower; i <= length; i++) {
            isAnswer = isAnswer + i;
        } 
        return (isAnswer - 1);
    }
}

module.exports = sumAll
