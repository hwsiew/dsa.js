const { it, expect } = require('@jest/globals');
const Queue = require('./Queue');

it('should throw error for none array initialization', function(){
	expect(() => new Queue('non-array')).toThrowError('An array is required to initialize the queue.');
	expect(() => new Queue({ key : 'is an object'})).toThrowError('An array is required to initialize the queue.');
	expect(() => new Queue(11)).toThrowError('An array is required to initialize the queue.');
});

it('should work for enqueue & dequeue', function(){

	let queue = new Queue();

	expect(queue.size).toBe(0);
	queue.enqueue(1);
	expect(queue.toArray()).toEqual([1]);
	expect(queue.size).toBe(1);
	queue.enqueue(2);
	expect(queue.toArray()).toEqual([1,2]);
	expect(queue.size).toBe(2);
	queue.enqueue(3);
	expect(queue.toArray()).toEqual([1,2,3]);
	expect(queue.size).toBe(3);
	expect(queue.dequeue()).toBe(1);
	expect(queue.size).toBe(2);
	expect(queue.dequeue()).toBe(2);
	expect(queue.size).toBe(1);
	expect(queue.dequeue()).toBe(3);
	expect(queue.size).toBe(0);
	expect(queue.dequeue()).toBeNull();

});
