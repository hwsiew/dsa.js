var CircularQueue = /** @class */ (function () {
    function CircularQueue(size) {
        this._ = new Array(size);
        this._first = -1;
        this._last = -1;
        this._size = size;
    }
    Object.defineProperty(CircularQueue.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    CircularQueue.prototype.isEmpty = function () {
        return this._first == -1 && this._last == -1;
    };
    CircularQueue.prototype.isFull = function () {
        return (this._last + 1) % this._size == this._first;
    };
    CircularQueue.prototype.enqueue = function (element) {
        if (this.isEmpty()) {
            this._[0] = element;
            this._first = 0;
            this._last = 0;
        }
        else if (this.isFull()) {
            throw new Error('Queue is full');
        }
        else {
            this._last = (this._last + 1) % this._size;
            this._[this._last] = element;
        }
    };
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty())
            return undefined;
        var first = this._first;
        if (this._first == this._last) {
            this._first = -1;
            this._last = -1;
        }
        else {
            this._first = (this._first + 1) % this._size;
        }
        return this._[first];
    };
    CircularQueue.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this._[this._first];
    };
    return CircularQueue;
}());
export default CircularQueue;
