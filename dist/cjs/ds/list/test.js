"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("./index"));
describe('Linked List Test Cases', function () {
    it('should get the proper size of list', function () {
        var l = new index_1.default();
        expect(l.size).toBe(0);
        l.append(1);
        expect(l.size).toBe(1);
        l.append(2);
        l.append(3);
        expect(l.size).toBe(3);
    });
    it('should clear all nodes in list', function () {
        var l = new index_1.default();
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        expect(l.size).toBe(5);
        l.clear();
        expect(l.size).toBe(0);
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        expect(l.size).toBe(5);
    });
    it('should add data of all types in list', function () {
        var l = new index_1.default();
        l.append(1);
        expect(l.last ? l.last.data : null).toBe(1);
        l.append('a');
        expect(l.last ? l.last.data : null).toBe('a');
        l.append([1, 2, 3]);
        expect(l.last ? l.last.data : null).toEqual([1, 2, 3]);
        l.append({});
        expect(l.last ? l.last.data : null).toEqual({});
    });
    it('should find the respective node in list', function () {
        var l = new index_1.default();
        var findVal = 4;
        var compare = function (data) { return data == findVal; };
        l.append(1);
        l.append(2);
        l.append(3);
        expect(l.find(compare)).toBeUndefined();
        findVal = 3;
        var found = l.find(compare);
        expect(found).toBeInstanceOf(index_1.ListNode);
        expect(found ? found.data : null).toBe(3);
    });
    it('should delete node in list', function () {
        var l = new index_1.default();
        var findVal = 4;
        var compare = function (x) { return x == findVal; };
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        findVal = 1; // delete the first node
        l.delete(compare);
        expect(l.toArray()).toEqual([2, 3, 4, 5]);
        findVal = 7; // delete last
        l.append(6);
        l.append(7);
        l.delete(compare);
        expect(l.toArray()).toEqual([2, 3, 4, 5, 6]);
        findVal = 4; // delete middle
        l.delete(compare);
        expect(l.toArray()).toEqual([2, 3, 5, 6]);
        l.append(8);
        l.append(9);
        l.append(10);
        expect(l.toArray()).toEqual([2, 3, 5, 6, 8, 9, 10]);
        findVal = 3; // delete middle
        l.delete(compare);
        findVal = 9; // delete middle
        l.delete(compare);
        expect(l.toArray()).toEqual([2, 5, 6, 8, 10]);
    });
    it('should reverse a list', function () {
        var l = new index_1.default();
        l.append(1);
        l.append(2);
        l.append(3);
        l.append(4);
        l.append(5);
        expect(l.toArray()).toEqual([1, 2, 3, 4, 5]);
        l.reverse();
        expect(l.toArray()).toEqual([5, 4, 3, 2, 1]);
    });
});
