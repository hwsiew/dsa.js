class Heap{
	constructor(max = true){
		this.data = [];
		this.max = max; // is maximum heap
	}

	get size(){
		return this.data.length;
	}

	get root(){
		return this.data ? this.data[0] : null;
	}

	insert(num){

		this.data.push(num);

		if(this.size > 1){
			this.heapify();
		}
	}

	/**
	 * 
	 * @param {Number} num 
	 * 
	 * @returns index | -1
	 */
	find(num){
		let i = 0 ;
		let arr = this.data;
		while(i < this.size){
			if(arr[i] == num) return i
			i++;
		}

		return -1;
	}

	delete(num){

		let found = this.find(num);

		if(found == -1) return;

		let arr = this.data;

		[arr[this.size-1], arr[found]] = [arr[found], arr[this.size-1]];

		arr.pop();
		this.heapify();

	}

	heapify(){

		let i = Math.floor((this.size/2) - 1);
		let arr = this.data;

		while(i >= 0){

			let target = i;
		
			let li = 2*i + 1;
			let match = this.max ?  arr[li] > arr[target] : arr[li] < arr[target];
			if(li < this.size && match) target = li;

			let ri = 2*i + 2;
			match = this.max ? arr[ri] > arr[target] : arr[ri] < arr[target];
			if(ri < this.size && match) target = ri;

			if(target != i) [arr[i], arr[target]] = [arr[target], arr[i]];

			i--
		}

	}

}

module.exports = Heap;