var reverseString = function(str) {
   let reversedStr = str.split("").reverse().join("");
   return reversedStr;
}

module.exports = reverseString