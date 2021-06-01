const { it, expect } = require('@jest/globals');
const PriorityQueue = require('./PriorityQueue');

it('should work for enqueue and dequeue', function(){
	let q = new PriorityQueue();

	q.enqueue(5);
	expect(q.toArray()).toEqual([5]);
	q.enqueue(4);
	expect(q.toArray()).toEqual([5,4]);
	q.enqueue(3);
	expect(q.toArray()).toEqual([5,4,3]);
	q.enqueue(6);
	expect(q.toArray()).toEqual([6,5,3,4]);
	
	expect(q.dequeue()).toBe(6);
	expect(q.toArray()).toEqual([5,4,3]);
})