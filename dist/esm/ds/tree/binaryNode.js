var BinaryNode = /** @class */ (function () {
    function BinaryNode(data, left, right) {
        this.data = data;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
    return BinaryNode;
}());
export default BinaryNode;
