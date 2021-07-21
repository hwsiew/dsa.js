/**
 * Sorting an array inplace using insertion sort
 *
 * @param {Array<*>} arr
 * @param {?CompareFunction} compareFn
 */
var insertionSort = function (arr, compareFn) {
    var n = arr.length;
    if (!compareFn)
        compareFn = function (a, b) { return a - b; };
    for (var i = 1; i < n; i++) {
        var target = arr[i];
        var j = i - 1;
        while (j >= 0) {
            if (compareFn(target, arr[j]) <= 0)
                arr[j + 1] = arr[j];
            else
                break;
            j--;
        }
        arr[j + 1] = target;
    }
};
export default insertionSort;
