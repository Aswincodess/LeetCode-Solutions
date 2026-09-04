function balancedStringSplit(s: string): number {
    let balance = 0;
    let count = 0;

    for (const char of s) {
        if (char === 'R') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
}