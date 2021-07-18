"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('Stack testing...', function () {
    it('should create a stack with an array argument', function () {
        var s = new index_1.default([1, 2, 3, 4, 5]);
        expect(s.size).toBe(5);
    });
    it('should pop an element from stack', function () {
        var s = new index_1.default([1, 2, 3, 4, 5]);
        expect(s.pop()).toBe(5);
        expect(s.size).toBe(4);
    });
    it('should push element of all kinds', function () {
        var s = new index_1.default();
        s.push(1);
        expect(s.peek()).toBe(1);
        s.push('a');
        expect(s.peek()).toBe('a');
        s.push([1, 2, 3]);
        expect(s.peek()).toEqual([1, 2, 3]);
        s.push({ 'name': 'testing' });
        expect(s.peek()).toEqual({ 'name': 'testing' });
    });
    it('should tell empty stack', function () {
        var s = new index_1.default();
        expect(s.isEmpty()).toBeTruthy();
    });
});
