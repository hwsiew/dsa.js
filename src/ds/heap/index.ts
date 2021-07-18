type CompareFunction = (a: any, b:any) => boolean

export default class Heap {

	_:Array<any>;
	compareFn: CompareFunction;

	constructor(compareFn: CompareFunction){
		this._ = [];
		this.compareFn = compareFn;
	}

	get size(): number{
		return this._.length;
	}

	get top(){
		if(this.isEmpty()) 
			return undefined;
		else 
			return this._[0];
	}

	isEmpty(): boolean{
		return this.size === 0;
	}

	add(data: any){
		this._.push(data);
		this.heapify();
	}

	clear(): void{
		this._ = [];
	}

	/**
	 * Remove the top of heap and return
	 * 
	 * @returns the top element or undefined if heap is empty
	 */
	popTop(){
		if(this.isEmpty())
			return undefined;
		else {
			[this._[0],this._[this._.length-1]] =[this._[this._.length-1],this._[0]];
			let top = this._.pop();
			this.heapify();
			return top;
		} 
	}
	
	heapify(){
		if(this.isEmpty()) return;
		let last = Math.floor(this.size/2 - 1);
		while(last >= 0){
			let target = last;
			let left   = 2*last + 1;
			let right  = 2*last + 2;
			
			if(left < this.size && this.compareFn(this._[target],this._[left])) target = left;
			if(right < this.size && this.compareFn(this._[target],this._[right])) target = right;

			if(last != target) [this._[last], this._[target]] = [this._[target], this._[last]];

			last--;
		}
	}

	toArray(){
		return this._;
	}
}