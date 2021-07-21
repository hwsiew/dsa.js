"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sorting an arry inplace using bubble sort.
 *
 * @param {Array<*>} arr
 * @param {?CompareFunction} compareFn
 */
var bubbleSort = function (arr, compareFn) {
    var _a;
    var n = arr.length;
    if (!compareFn) {
        compareFn = function (a, b) { return a - b; };
    }
    for (var i = 0; i < n; i++)
        for (var j = 0; j < n - 1 - i; j++) {
            var a = arr[j], b = arr[j + 1];
            if (compareFn(a, b) > 0)
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
        }
};
exports.default = bubbleSort;
