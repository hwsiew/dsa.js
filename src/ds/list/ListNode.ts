export default class ListNode{

	next: ListNode | null;
	data: any;

	constructor(data: any, next: ListNode | null = null){
		this.next  = next;
		this.data  = data;
	}

}