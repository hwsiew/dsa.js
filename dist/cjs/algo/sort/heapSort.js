"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sorting an arry in place using quick sort.
 *
 * @param {Array<*>} arr
 * @param {?CompareFunction} compareFn
 */
function heapSort(arr, compareFn) {
    if (!compareFn)
        compareFn = function (a, b) { return a - b; };
    var heapify = function (start, compare) {
        var _a;
        var len = arr.length - start;
        var n = start + Math.floor(len / 2 - 1);
        while (n >= start) {
            var root = n, left = 2 * root + 1 - start, right = 2 * root + 2 - start;
            if (left < arr.length && compare(arr[root], arr[left]) >= 0)
                root = left;
            if (right < arr.length && compare(arr[root], arr[right]) >= 0)
                root = right;
            if (root !== n)
                _a = [arr[n], arr[root]], arr[root] = _a[0], arr[n] = _a[1];
            n--;
        }
    };
    var i = 0;
    while (i < arr.length) {
        heapify(i++, compareFn);
    }
}
exports.default = heapSort;
