import { Stack, Queue, CircularQueue, PriorityQueue, LinkedList, Heap, Graph, BinaryTree, BinarySearchTree } from '.';
import { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort, heapSort } from './algo/sort';
import { binarySearch } from './algo/search';
describe('Test cases for search algorithms', function () {
    it('should be imported', function () {
        expect(binarySearch).toBeDefined();
    });
});
describe('Test cases for sorting algorithms', function () {
    it('should be imported', function () {
        expect(bubbleSort).toBeDefined();
        expect(selectionSort).toBeDefined();
        expect(insertionSort).toBeDefined();
        expect(quickSort).toBeDefined();
        expect(mergeSort).toBeDefined();
        expect(heapSort).toBeDefined();
    });
});
describe('Test cases for data structure', function () {
    it('should instantiate Stack', function () {
        expect(new Stack()).toBeInstanceOf(Stack);
    });
    it('should instantiate Queue', function () {
        expect(new Queue()).toBeInstanceOf(Queue);
    });
    it('should instantiate CircularQueue', function () {
        expect(new CircularQueue(10)).toBeInstanceOf(CircularQueue);
    });
    it('should instantiate PriorityQueue', function () {
        expect(new PriorityQueue()).toBeInstanceOf(PriorityQueue);
    });
    it('should instantiate LinkedList', function () {
        expect(new LinkedList()).toBeInstanceOf(LinkedList);
    });
    it('should instantiate Heap', function () {
        expect(new Heap(function (a, b) { return b > a; })).toBeInstanceOf(Heap);
    });
    it('should instantiate Graph', function () {
        expect(new Graph()).toBeInstanceOf(Graph);
    });
    it('should instantiate BinaryTree', function () {
        expect(new BinaryTree()).toBeInstanceOf(BinaryTree);
    });
    it('should instantiate BinarySearchTree', function () {
        expect(new BinarySearchTree()).toBeInstanceOf(BinarySearchTree);
    });
});
