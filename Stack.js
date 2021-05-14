class Stack {
	constructor(size=null){
		this.stack = [];
		this.size  = size;
	}

	isFull(){
		if(!this.size) return false;
		else return this.size == this.stack.length
	}

	isEmpty(){
		return this.stack.length == 0;
	}

	peek(){
		return this.stack[this.stack.length-1];
	}

	push(item){
		this.stack.push(item);
	}

	pop(){
		return this.stack.pop();
	}

	toString(){
		return this.stack.toString();
	}

}

let s = new Stack();
s.push(1);
s.push(2);
console.log(s.toString());
s.pop();
console.log(s.toString());