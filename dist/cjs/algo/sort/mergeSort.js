"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sorting an arry using merge sort.
 *
 * @param {Array<*>} arr
 * @param {?CompareFunctionNumber} compareFn
 */
function mergeSort(arr, compareFn) {
    if (!compareFn)
        compareFn = function (a, b) { return a - b; };
    if (arr.length < 2)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var arr1 = mergeSort(arr.slice(0, mid), compareFn);
    var arr2 = mergeSort(arr.slice(mid), compareFn);
    var merged = [];
    while (arr1.length && arr2.length) {
        merged.push(compareFn(arr1[0], arr2[0]) > 0 ? arr2.shift() : arr1.shift());
    }
    if (arr1.length)
        merged = merged.concat(arr1);
    if (arr2.length)
        merged = merged.concat(arr2);
    return merged;
}
exports.default = mergeSort;
