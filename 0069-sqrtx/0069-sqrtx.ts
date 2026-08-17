function mySqrt(x: number): number {
    let answer = 0;

for (let i = 1; i * i <= x; i++) {
    answer = i;
}

return answer;
};