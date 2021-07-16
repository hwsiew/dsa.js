import Queue from './index';

describe('Test data structure : Queue', function(){

	it('should tell queue is empty', function(){
		let q = new Queue();
		expect(q.isEmpty()).toBeTruthy();
		expect(q.size).toBe(0);
	});

	it('should enqueue an element of any to queue', function(){
		let q = new Queue();
		q.enqueue(1);
		expect(q.peek()).toBe(1);
		q.dequeue();
		q.enqueue('a');
		expect(q.peek()).toBe('a');
		q.dequeue();
		q.enqueue([1,2,3]);
		expect(q.peek()).toEqual([1,2,3]);
		q.dequeue();
		q.enqueue({name:'testing'});
		expect(q.peek()).toEqual({name:'testing'});
	});

	it('should dequeue an element from queue', function(){
		let q = new Queue();
		q.enqueue(1);
		expect(q.peek()).toBe(1);
		expect(q.dequeue()).toBe(1);
		expect(q.size).toBe(0);
	})

});