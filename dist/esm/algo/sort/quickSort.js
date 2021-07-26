/**
 * Sorting an arry in place using quick sort.
 *
 * @param {Array<*>} arr
 * @param {?CompareFunctionNumber} compareFn
 */
export default function quickSort(arr, compareFn) {
    if (!compareFn)
        compareFn = function (a, b) { return a - b; };
    var sort = function (low, high, compare) {
        var _a, _b;
        if (low >= high)
            return arr;
        var pivot = arr[high], left = low, right = high - 1;
        while (true) {
            while (compare(arr[left], pivot) < 0) {
                left++;
            }
            while (right > 0 && compare(arr[right], pivot) > 0) {
                right--;
            }
            if (left >= right)
                break;
            else
                _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        }
        _b = [arr[high], arr[left]], arr[left] = _b[0], arr[high] = _b[1];
        sort(low, left - 1, compare);
        sort(left + 1, high, compare);
    };
    sort(0, arr.length - 1, compareFn);
}
