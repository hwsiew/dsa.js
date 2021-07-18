"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(data, next) {
        if (next === void 0) { next = null; }
        this.next = next;
        this.data = data;
    }
    return ListNode;
}());
exports.default = ListNode;
