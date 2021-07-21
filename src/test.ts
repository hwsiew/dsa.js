import {
	Stack,
	Queue,
	CircularQueue,
	PriorityQueue,
	LinkedList,
	Heap,
	Graph,
	BinaryTree,
	BinarySearchTree
} from '.'

describe('Import test cases', function(){
	it('should instantiate Stack', function(){
		expect(new Stack()).toBeInstanceOf(Stack);
	});

	it('should instantiate Queue', function(){
		expect(new Queue()).toBeInstanceOf(Queue);
	});

	it('should instantiate CircularQueue', function(){
		expect(new CircularQueue(10)).toBeInstanceOf(CircularQueue);
	});

	it('should instantiate PriorityQueue', function(){
		expect(new PriorityQueue()).toBeInstanceOf(PriorityQueue);
	});

	it('should instantiate LinkedList', function(){
		expect(new LinkedList()).toBeInstanceOf(LinkedList);
	});

	it('should instantiate Heap', function(){
		expect(new Heap((a,b) => b>a)).toBeInstanceOf(Heap);
	});

	it('should instantiate Graph', function(){
		expect(new Graph()).toBeInstanceOf(Graph);
	});

	it('should instantiate BinaryTree', function(){
		expect(new BinaryTree()).toBeInstanceOf(BinaryTree);
	});

	it('should instantiate BinarySearchTree', function(){
		expect(new BinarySearchTree()).toBeInstanceOf(BinarySearchTree);
	});
})
