import Heap from "../heap";
/**
 * Priority Queue
 *
 * Internally heap {@link Heap} data structure is used to implement this queue.
 *
 * ### Example
 * ```javascript
 * // optional: compare function to determine the priority
 * // if not provided, priority is done simply with `a < b` operator
 * const ds = new PriorityQueue();
 *
 * ds.enqueue(1);
 * ds.dequeue();
 * ```
 */
var PriorityQueue = /** @class */ (function () {
    /**
     * @constructor
     * @param {CompareFunctionBoolean} compareFunc
     */
    function PriorityQueue(compareFunc) {
        if (!compareFunc)
            compareFunc = function (a, b) { return b > a; };
        this._ = new Heap(compareFunc);
    }
    Object.defineProperty(PriorityQueue.prototype, "size", {
        /**
         * Size of the queue
         */
        get: function () {
            return this._.size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Peek the top element of queue without removing it
     *
     * @returns the top element
     */
    PriorityQueue.prototype.peek = function () {
        return this._.top;
    };
    /**
     * Enqueue an element to queue
     *
     * @param {*} data
     * @returns size of queue after added an element
     */
    PriorityQueue.prototype.enqueue = function (data) {
        this._.add(data);
        return this.size;
    };
    /**
     * Remove the top element from queue
     *
     * @returns an element from the queue
     */
    PriorityQueue.prototype.dequeue = function () {
        return this._.popTop();
    };
    /**
     * Convert queue to an array
     *
     * @returns an array representation of queue
     */
    PriorityQueue.prototype.toArray = function () {
        return this._.toArray();
    };
    return PriorityQueue;
}());
export default PriorityQueue;
