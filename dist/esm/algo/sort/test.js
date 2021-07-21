import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort } from '.';
describe('Sorting', function () {
    it('should bubble sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        bubbleSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        bubbleSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
    });
    it('should insertion sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        insertionSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        insertionSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
    });
    it('should selection sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        selectionSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        selectionSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
    });
    it('should merge sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        a = mergeSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        b = mergeSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
    });
    it('should quick sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        quickSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        quickSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
    });
    it('should heap sort', function () {
        var a = [4, 2, 5, 3, 1, 3];
        heapSort(a, function (a, b) { return a - b; }); // asc
        expect(a).toEqual([1, 2, 3, 3, 4, 5]);
        var b = [4, 2, 5, 3, 1, 3];
        quickSort(b, function (a, b) { return b - a; }); //dsc 
        expect(b).toEqual([5, 4, 3, 3, 2, 1]);
        var c = [];
        quickSort(c);
        expect(c).toEqual([]);
    });
});
