/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    return {

        toBe: function(other) {

            if (val === other) {
                return true;
            }

            throw new Error("Not Equal");
        },

        notToBe: function(other) {

            if (val !== other) {
                return true;
            }

            throw new Error("Equal");
        }

    };

};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(null));

try {
    console.log(expect(5).toBe(null));
} catch (e) {
    console.log(e.message);
}

try {
    console.log(expect(5).notToBe(5));
} catch (e) {
    console.log(e.message);
}