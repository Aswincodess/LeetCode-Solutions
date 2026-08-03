/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for (let i = 0; i <= haystack.length - needle.length; i++) {

        let j = 0;

        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad"));   // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("hello", "ll"));       // 2