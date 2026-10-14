
var countBinarySubstrings = function(s) {
    let count = 0;
    let prev = 0;
    let curr = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr++;
        } else {
            if (prev < curr) {
                count += prev;
            } else {
                count += curr;
            }

            prev = curr;
            curr = 1;
        }
    }

    if (prev < curr) {
        count += prev;
    } else {
        count += curr;
    }

    return count;
};
