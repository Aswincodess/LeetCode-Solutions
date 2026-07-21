/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {

    prices.sort(function(a, b) {
        return a - b;
    });

    let cost = prices[0] + prices[1];

    if (cost <= money) {
        return money - cost;
    }

    return money;
};

console.log(buyChoco([1, 2, 2], 3));
console.log(buyChoco([3, 2, 3], 3));