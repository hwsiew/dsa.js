"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sort arry in place using selection sort
 *
 * @param {Array<*>} arr
 * @param {CompareFunction} compareFn
 */
var selectionSort = function (arr, compareFn) {
    var _a;
    if (!compareFn)
        compareFn = function (a, b) { return a - b; };
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var target = i;
        for (var j = i + 1; j < n; j++) {
            if (compareFn(arr[target], arr[j]) > 0)
                target = j;
        }
        if (target !== i)
            _a = [arr[i], arr[target]], arr[target] = _a[0], arr[i] = _a[1];
    }
};
exports.default = selectionSort;
