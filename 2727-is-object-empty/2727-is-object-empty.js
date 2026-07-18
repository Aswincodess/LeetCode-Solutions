/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }

    return false;
};

console.log(isEmpty({}));
console.log(isEmpty({ x: 5 }));