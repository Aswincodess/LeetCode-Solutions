function findTheDifference(s: string, t: string): string {
    const count: number[] = new Array(26).fill(0);

    for (const char of s) {
        count[char.charCodeAt(0) - 97]++;
    }

    for (const char of t) {
        count[char.charCodeAt(0) - 97]--;

        if (count[char.charCodeAt(0) - 97] < 0) {
            return char;
        }
    }

    return "";
}