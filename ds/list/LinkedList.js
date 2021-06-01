class LinkedNode{
	constructor(value, next = null){
		this.value = value;
		this.next = next;
	}
}

class LinkedList{
	constructor(arr = []){
		this.head = null;
		this.tail = null;
		this.size = 0;
		for(let a of arr){
			this.push(a);
		}
	}

	push(value){

		let node = new LinkedNode(value);
		this.size++;

		if(!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		} 

	}

	pop(){

		if(!this.tail) return null;

		let node = this.tail;
		this.size--;
		if(this.head == this.tail){
			this.head = null;
			this.tail = null;
		} else {
			let temp = this.head;
			while(temp.next.next){
				temp = temp.next;
			}
			temp.next = null;
			this.tail = temp;
		}

		return node;
	}

	shift(){

		if(!this.head) return null;

		let node = this.head;
		this.size--;

		this.head = this.head.next;

		return node;

	}

	unshift(...values){

		for(let v of values){
			let node = new LinkedNode(v,this.head);
			this.head = node;
		}

	}

	print(){
		let temp = this.head;
		let output = '';
		while(temp){
			output += temp.value;
			temp = temp.next;
			if(temp){
				output += '->';
			}
		}
		
		return output
	}

}

module.exports = LinkedList;