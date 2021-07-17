import ListNode from "./ListNode";

type CompareFunction = (a: any) => boolean;

class LinkedList {

	_head: ListNode | null;
	_last: ListNode | null;

	constructor(head: ListNode | null = null){
		this._head = head;
		this._last = head;
	}

	/**
	 * Get the number of nodes
	 * 
	 * @returns the size of linked list (number of nodes)
	 */
	get size(): number{
		let count = 0;
		let curr  = this._head;
		while(curr){
			count++;
			curr = curr.next;
		}
		return count;
	}

	/**
	 * Get the head node of list
	 */
	get head(): ListNode | null {
		return this._head;
	}

	/**
	 * Get the last node of list
	 */
	get last(): ListNode | undefined {
		let curr = this._head;
		if(!curr) return undefined;
		while(curr && curr.next){
			curr = curr.next;
		}
		return curr;
	}

	/**
	 * Clear all nodes in the list
	 */
	clear(){
		this._head = null;
	}

	/**
	 * Add data to the last of the list
	 * 
	 * @param {*} data data to add to a list node 
	 */
	append(data:any){
		let node = new ListNode(data);
		if(!this._head) {
			this._head = node;
		} else {
			if(this.last){
				this.last.next = node;
			}
		}
	}

	/**
	 * Find a node with respective to compare function
	 * 
	 * @param compareFn (data) => boolean
	 * @returns a list node if it is found or underfined
	 */
	find(compareFn: CompareFunction): ListNode | undefined {

		if(!compareFn) return undefined;

		let found;
		let curr  = this._head;
		while(curr){
			if(compareFn(curr.data)) {
				found = curr;
				break;
			}
			curr = curr.next
		}
	
		return found;
	}

	/**
	 * Delete a node with respective to compare function
	 * @param compareFn 
	 */
	delete(compareFn: CompareFunction){
		
		let helper = function(node: ListNode | null): ListNode | null {

			if(!node) return node;

			if(compareFn(node.data)){
				node = helper(node.next);
			} else {
				node.next = helper(node.next);
			}

			return node;
		}

		this._head = helper(this._head);

	}

	/**
	 * Reverse a list
	 */
	reverse(){
		let curr = this._head;
		let next = null;
		while(curr){
			let temp = curr.next;
			curr.next = next;
			next = curr;
			curr = temp;
		}
		this._head = next;
	}

	/**
	 * Convert linked list to array
	 * 
	 * @returns an array of all nodes data in each element
	 */
	toArray(): Array<any>{
		let arr = [];
		let curr = this._head;
		while(curr){
			arr.push(curr.data);
			curr = curr.next;
		}
		return arr;
	}
}

export {
	LinkedList as default,
	ListNode
}