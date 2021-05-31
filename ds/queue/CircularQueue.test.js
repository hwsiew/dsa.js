const CircularQueue = require('./CircularQueue');
const { it, expect } = require('@jest/globals');

it('should check initial queue size with maximum size', function(){
	expect(()=>{
		new CircularQueue(0);
	}).toThrow('A positive size greater than 0 is require.');

	expect(()=>{
		new CircularQueue(-1);
	}).toThrow('A positive size greater than 0 is require.');
});

it('should work for enqueue and dequeue', function(){

	let q = new CircularQueue(5);

	q.enqueue(1);
	expect(q.toArray()).toEqual([1,undefined,undefined,undefined,undefined]);
	q.enqueue(2);
	expect(q.toArray()).toEqual([1,2,undefined,undefined,undefined]);
	q.enqueue(3);
	expect(q.toArray()).toEqual([1,2,3,undefined,undefined]);
	q.enqueue(4);
	expect(q.toArray()).toEqual([1,2,3,4,undefined]);
	q.enqueue(5);
	expect(q.toArray()).toEqual([1,2,3,4,5]);
	expect(() => q.enqueue(6)).toThrow('The queue is full!');

	expect(q.dequeue()).toBe(1);
	expect(q.toArray()).toEqual([undefined,2,3,4,5]);
	expect(q.dequeue()).toBe(2);
	expect(q.toArray()).toEqual([undefined,undefined,3,4,5]);
	q.enqueue(6);
	expect(q.toArray()).toEqual([6,undefined,3,4,5]);
	q.enqueue(7);
	expect(q.toArray()).toEqual([6,7,3,4,5]);
	expect(q.dequeue()).toBe(3);
	expect(q.dequeue()).toBe(4);
	expect(q.dequeue()).toBe(5);
	expect(q.toArray()).toEqual([6,7,undefined,undefined,undefined]);

})