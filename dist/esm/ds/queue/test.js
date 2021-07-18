import Queue, { CircularQueue } from './index';
describe('Test data structure : Queue', function () {
    it('should tell queue is empty', function () {
        var q = new Queue();
        expect(q.isEmpty()).toBeTruthy();
        expect(q.size).toBe(0);
    });
    it('should enqueue an element of any to queue', function () {
        var q = new Queue();
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
        var q = new Queue();
        q.enqueue(1);
        expect(q.peek()).toBe(1);
        expect(q.dequeue()).toBe(1);
        expect(q.size).toBe(0);
    });
});
describe('Test data structure : CircularQueue', function () {
    it('should create a circular queue with n size', function () {
        var q = new CircularQueue(5);
        expect(q.size).toBe(5);
    });
    it('should enqueue element of all type in circular queue', function () {
        var q = new CircularQueue(3);
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
        var q = new CircularQueue(3);
        expect(q.isFull()).toBeFalsy();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.isFull()).toBeTruthy();
        expect(function () { return q.enqueue(5); }).toThrow();
    });
    it('should check ciruclar queue is empty', function () {
        var q = new CircularQueue(3);
        expect(q.isEmpty()).toBeTruthy();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.isEmpty()).toBeFalsy();
    });
});
