"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {Array[*]}arr
 * @param {BinarySearchCompareFunction} compare a function takes in an element and return 0 if it is the target, or return <0 if target is larger else return >0 if target is smaller
 * @returns
 */
function binarySearch(arr, compare) {
    var search = function (low, high) {
        if (low > high)
            return -1; // not found 
        var mid = low + Math.floor((high - low) / 2);
        if (compare(arr[mid]) === 0)
            return arr[mid];
        if (compare(arr[mid]) < 0)
            return search(mid + 1, high);
        else
            return search(low, mid - 1);
    };
    return search(0, arr.length - 1);
}
exports.default = binarySearch;
