/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

    let called = false;

    return function(...args) {

        if (!called) {
            called = true;
            return fn(...args);
        }

        return undefined;
    };

};

function add(a, b, c) {
    return a + b + c;
}

const onceFn = once(add);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 4));
console.log(onceFn(10, 20, 30));
