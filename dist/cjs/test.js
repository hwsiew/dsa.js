"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var sort_1 = require("./algo/sort");
describe('Test cases for sorting algorithms', function () {
    it('should be imported', function () {
        expect(sort_1.bubbleSort).toBeDefined();
        expect(sort_1.selectionSort).toBeDefined();
        expect(sort_1.insertionSort).toBeDefined();
        expect(sort_1.quickSort).toBeDefined();
        expect(sort_1.mergeSort).toBeDefined();
        expect(sort_1.heapSort).toBeDefined();
    });
});
describe('Test cases for data structure', function () {
    it('should instantiate Stack', function () {
        expect(new _1.Stack()).toBeInstanceOf(_1.Stack);
    });
    it('should instantiate Queue', function () {
        expect(new _1.Queue()).toBeInstanceOf(_1.Queue);
    });
    it('should instantiate CircularQueue', function () {
        expect(new _1.CircularQueue(10)).toBeInstanceOf(_1.CircularQueue);
    });
    it('should instantiate PriorityQueue', function () {
        expect(new _1.PriorityQueue()).toBeInstanceOf(_1.PriorityQueue);
    });
    it('should instantiate LinkedList', function () {
        expect(new _1.LinkedList()).toBeInstanceOf(_1.LinkedList);
    });
    it('should instantiate Heap', function () {
        expect(new _1.Heap(function (a, b) { return b > a; })).toBeInstanceOf(_1.Heap);
    });
    it('should instantiate Graph', function () {
        expect(new _1.Graph()).toBeInstanceOf(_1.Graph);
    });
    it('should instantiate BinaryTree', function () {
        expect(new _1.BinaryTree()).toBeInstanceOf(_1.BinaryTree);
    });
    it('should instantiate BinarySearchTree', function () {
        expect(new _1.BinarySearchTree()).toBeInstanceOf(_1.BinarySearchTree);
    });
});
