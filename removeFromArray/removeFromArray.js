// Takes an array and some other argurments
// Then removes other arguments from array of same values
var removeFromArray = function(arg) {
    let arr = arguments[0];
    let argumentsLength = arguments.length;

    if (!Array.isArray(arr)) {
        alert("Your first index value is not an array.");
    } else if (Array.isArray(arr)) {
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < argumentsLength; j++) {
                // console.log("arr[i]: " + arr[i]);
                let argVal = arguments[j];
                // console.log("arguments[j]: " + argVal);
        
                if (arr[i] === argVal) {
                    // console.log("arr: " + arr);
                    // console.warn("arr[i] " + "includes argVal: " + argVal);
                    arr.splice(i, 1);
                    i--;
                    // console.log("i: " + i);
                }
                // console.log("arr: " + arr);
                // console.log("-----------------> j");
            }
            // console.log("==================> i");     
        }
        // console.log(`arr after loop ${arr}`);
    }
    return arr;
}

module.exports = removeFromArray
