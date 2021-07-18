"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = exports.default = void 0;
var ListNode_1 = __importDefault(require("./ListNode"));
exports.ListNode = ListNode_1.default;
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        if (head === void 0) { head = null; }
        this._head = head;
        this._last = head;
    }
    Object.defineProperty(LinkedList.prototype, "size", {
        /**
         * Get the number of nodes
         *
         * @returns the size of linked list (number of nodes)
         */
        get: function () {
            var count = 0;
            var curr = this._head;
            while (curr) {
                count++;
                curr = curr.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "head", {
        /**
         * Get the head node of list
         */
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "last", {
        /**
         * Get the last node of list
         */
        get: function () {
            var curr = this._head;
            if (!curr)
                return undefined;
            while (curr && curr.next) {
                curr = curr.next;
            }
            return curr;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clear all nodes in the list
     */
    LinkedList.prototype.clear = function () {
        this._head = null;
    };
    /**
     * Add data to the last of the list
     *
     * @param {*} data data to add to a list node
     */
    LinkedList.prototype.append = function (data) {
        var node = new ListNode_1.default(data);
        if (!this._head) {
            this._head = node;
        }
        else {
            if (this.last) {
                this.last.next = node;
            }
        }
    };
    /**
     * Find a node with respective to compare function
     *
     * @param compareFn (data) => boolean
     * @returns a list node if it is found or underfined
     */
    LinkedList.prototype.find = function (compareFn) {
        if (!compareFn)
            return undefined;
        var found;
        var curr = this._head;
        while (curr) {
            if (compareFn(curr.data)) {
                found = curr;
                break;
            }
            curr = curr.next;
        }
        return found;
    };
    /**
     * Delete a node with respective to compare function
     * @param compareFn
     */
    LinkedList.prototype.delete = function (compareFn) {
        var helper = function (node) {
            if (!node)
                return node;
            if (compareFn(node.data)) {
                node = helper(node.next);
            }
            else {
                node.next = helper(node.next);
            }
            return node;
        };
        this._head = helper(this._head);
    };
    /**
     * Reverse a list
     */
    LinkedList.prototype.reverse = function () {
        var curr = this._head;
        var next = null;
        while (curr) {
            var temp = curr.next;
            curr.next = next;
            next = curr;
            curr = temp;
        }
        this._head = next;
    };
    /**
     * Convert linked list to array
     *
     * @returns an array of all nodes data in each element
     */
    LinkedList.prototype.toArray = function () {
        var arr = [];
        var curr = this._head;
        while (curr) {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;
    };
    return LinkedList;
}());
exports.default = LinkedList;
