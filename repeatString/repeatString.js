var repeatString = function(str, num) {
    let arr = [];
    let joinedArr;

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 1; i <= num; i++) {
        arr.push(str);
    }

    joinedArr = arr.join("");
    return joinedArr;
}

module.exports = repeatString
