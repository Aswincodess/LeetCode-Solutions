/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let max = 0;

    for (let i = 0; i < sentences.length; i++) {

        let words = sentences[i].split(" ");
        let count = words.length;

        if (count > max) {
            max = count;
        }
    }

    return max;
};

console.log(
    mostWordsFound([
        "alice and bob love leetcode",
        "i think so too",
        "this is great thanks very much"
    ])
);