export default class BinaryNode {

	data: any;
	left: BinaryNode | null;
	right:  BinaryNode | null;

	constructor(data: any, left?: BinaryNode, right?: BinaryNode){
		this.data = data;
		this.left  = left ? left : null;
		this.right = right ? right : null;
	}
}