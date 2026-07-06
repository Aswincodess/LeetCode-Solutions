/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    let largest = nums[0];
    let smallest = nums[0];

    
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > largest) {
            largest = nums[i];
        }

        if (nums[i] < smallest) {
            smallest = nums[i];
        }
    }

    let gcd = 1;

    for (let i = 1; i <= smallest; i++) {

        if (smallest % i === 0 && largest % i === 0) {
            gcd = i;
        }

    }

    return gcd;
};

console.log(findGCD([2,5,6,9,10]));