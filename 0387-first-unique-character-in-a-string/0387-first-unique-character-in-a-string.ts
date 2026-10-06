function firstUniqChar(s: string): number {

    let count: { [key: string]: number } = {};

    // Count each character
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    // Find the first character whose count is 1
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}