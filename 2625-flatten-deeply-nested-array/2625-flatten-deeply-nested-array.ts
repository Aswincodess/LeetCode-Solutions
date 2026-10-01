type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
    arr: MultiDimensionalArray,
    n: number
): MultiDimensionalArray {

    let result: MultiDimensionalArray = [];

    function flatten(array: MultiDimensionalArray, depth: number) {

        for (let i = 0; i < array.length; i++) {

            if (Array.isArray(array[i]) && depth > 0) {

                flatten(array[i] as MultiDimensionalArray, depth - 1);

            } else {

                result.push(array[i]);

            }
        }
    }

    flatten(arr, n);

    return result;
};