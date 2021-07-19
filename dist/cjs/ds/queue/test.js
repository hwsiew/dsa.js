"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
describe('Test data structure : Queue', function () {
    it('should tell queue is empty', function () {
        var q = new index_1.default();
        expect(q.isEmpty()).toBeTruthy();
        expect(q.size).toBe(0);
    });
    it('should enqueue an element of any to queue', function () {
        var q = new index_1.default();
        q.enqueue(1);
        expect(q.peek()).toBe(1);
        q.dequeue();
        q.enqueue('a');
        expect(q.peek()).toBe('a');
        q.dequeue();
        q.enqueue([1, 2, 3]);
        expect(q.peek()).toEqual([1, 2, 3]);
        q.dequeue();
        q.enqueue({ name: 'testing' });
        expect(q.peek()).toEqual({ name: 'testing' });
    });
    it('should dequeue an element from queue', function () {
        var q = new index_1.default();
        q.enqueue(1);
        expect(q.peek()).toBe(1);
        expect(q.dequeue()).toBe(1);
        expect(q.size).toBe(0);
    });
});
describe('Test data structure : CircularQueue', function () {
    it('should create a circular queue with n size', function () {
        var q = new index_1.CircularQueue(5);
        expect(q.size).toBe(5);
    });
    it('should enqueue element of all type in circular queue', function () {
        var q = new index_1.CircularQueue(3);
        q.enqueue(1);
        q.enqueue('a');
        q.enqueue([1, 2, 3]);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe('a');
        q.enqueue({});
        q.enqueue('b');
        expect(q.dequeue()).toEqual([1, 2, 3]);
        expect(q.dequeue()).toEqual({});
        expect(q.dequeue()).toEqual('b');
        expect(q.isEmpty()).toBeTruthy();
    });
    it('should check ciruclar queue is full', function () {
        var q = new index_1.CircularQueue(3);
        expect(q.isFull()).toBeFalsy();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.isFull()).toBeTruthy();
        expect(function () { return q.enqueue(5); }).toThrow();
    });
    it('should check ciruclar queue is empty', function () {
        var q = new index_1.CircularQueue(3);
        expect(q.isEmpty()).toBeTruthy();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.isEmpty()).toBeFalsy();
    });
});
describe('Priority Queue Test Cases', function () {
    it('should enqueue elements to queue', function () {
        var ds = new index_1.PriorityQueue();
        expect(ds.size).toBe(0);
        ds.enqueue(1);
        expect(ds.toArray()).toEqual([1]);
        ds.enqueue(5);
        expect(ds.toArray()).toEqual([5, 1]);
        ds.enqueue(2);
        expect(ds.toArray()).toEqual([5, 1, 2]);
        ds.enqueue(6);
        expect(ds.toArray()).toEqual([6, 5, 2, 1]);
        expect(ds.size).toEqual(4);
    });
    it('should dequeue elements from queue', function () {
        var ds = new index_1.PriorityQueue();
        ds.enqueue(1);
        ds.enqueue(5);
        ds.enqueue(3);
        ds.enqueue(6);
        ds.enqueue(4);
        expect(ds.toArray()).toEqual([6, 5, 3, 1, 4]);
        expect(ds.dequeue()).toEqual(6);
        expect(ds.toArray()).toEqual([5, 4, 3, 1]);
        expect(ds.dequeue()).toEqual(5);
        expect(ds.dequeue()).toEqual(4);
        expect(ds.dequeue()).toEqual(3);
        expect(ds.dequeue()).toEqual(1);
        expect(ds.toArray()).toEqual([]);
    });
});
