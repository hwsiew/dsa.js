var Heap = /** @class */ (function () {
    function Heap(compareFn) {
        this._ = [];
        this.compareFn = compareFn;
    }
    Object.defineProperty(Heap.prototype, "size", {
        get: function () {
            return this._.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heap.prototype, "top", {
        get: function () {
            if (this.isEmpty())
                return undefined;
            else
                return this._[0];
        },
        enumerable: false,
        configurable: true
    });
    Heap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Heap.prototype.add = function (data) {
        this._.push(data);
        this.heapify();
    };
    Heap.prototype.clear = function () {
        this._ = [];
    };
    /**
     * Remove the top of heap and return
     *
     * @returns the top element or undefined if heap is empty
     */
    Heap.prototype.popTop = function () {
        var _a;
        if (this.isEmpty())
            return undefined;
        else {
            _a = [this._[this._.length - 1], this._[0]], this._[0] = _a[0], this._[this._.length - 1] = _a[1];
            var top_1 = this._.pop();
            this.heapify();
            return top_1;
        }
    };
    Heap.prototype.heapify = function () {
        var _a;
        if (this.isEmpty())
            return;
        var last = Math.floor(this.size / 2 - 1);
        while (last >= 0) {
            var target = last;
            var left = 2 * last + 1;
            var right = 2 * last + 2;
            if (left < this.size && this.compareFn(this._[target], this._[left]))
                target = left;
            if (right < this.size && this.compareFn(this._[target], this._[right]))
                target = right;
            if (last != target)
                _a = [this._[target], this._[last]], this._[last] = _a[0], this._[target] = _a[1];
            last--;
        }
    };
    Heap.prototype.toArray = function () {
        return this._;
    };
    return Heap;
}());
export default Heap;
