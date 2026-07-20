/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let current = init;

    return {

        increment: function() {
            current++;
            return current;
        },

        decrement: function() {
            current--;
            return current;
        },

        reset: function() {
            current = init;
            return current;
        }

    };

};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());