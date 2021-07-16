export default class CircularQueue {

	_: Array<any>;
	_first: number;
	_last: number;
	_size: number;
	
	constructor(size: number){
		this._ = new Array(size);
		this._first = -1;
		this._last  = -1;
		this._size  = size;
	}

	get size() {
		return this._size;
	}

	isEmpty(){
		return this._first == -1 && this._last == -1;
	}

	isFull(){
		return (this._last + 1) % this._size == this._first;
	}

	enqueue(element: any){
		if(this.isEmpty()){
			this._[0] = element;
			this._first = 0;
			this._last  = 0;
		} else if(this.isFull()){
			throw new Error('Queue is full');
		} else {
			this._last = (this._last + 1) % this._size;
			this._[this._last] = element;
		}
	}

	dequeue(){
		if(this.isEmpty()) return undefined;
		
		let first = this._first;

		if(this._first == this._last){
			this._first = -1;
			this._last  = -1;
		} else {
			this._first = (this._first + 1) % this._size;
		}

		return this._[first];
	}

	peek(){
		if(this.isEmpty()) return undefined;

		return this._[this._first];
	}
}