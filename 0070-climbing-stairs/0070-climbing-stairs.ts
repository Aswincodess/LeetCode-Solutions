function climbStairs(n: number): number {

    if (n <= 2) {
        return n;
    }

    let one = 1;
    let two = 2;

    for (let i = 3; i <= n; i++) {
        let current = one + two;

        one = two;
        two = current;
    }

    return two;
}