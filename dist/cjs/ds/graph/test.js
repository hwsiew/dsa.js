"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
describe('Graph Test Cases', function () {
    it('should add vertices and edges', function () {
        var _a, _b, _c, _d;
        var g = new index_1.default();
        var a = { name: 'a' };
        var b = { name: 'b' };
        var c = { name: 'c' };
        var d = { name: 'd' };
        g.addVertex(a);
        g.addVertex(b);
        g.addVertex(c);
        g.addVertex(d);
        g.addEdge(a, b);
        g.addEdge(a, c);
        g.addEdge(b, a);
        g.addEdge(b, d);
        g.addEdge(c, d);
        expect((_a = g.getVertex(a)) === null || _a === void 0 ? void 0 : _a.toArray()).toEqual([b, c]);
        expect((_b = g.getVertex(b)) === null || _b === void 0 ? void 0 : _b.toArray()).toEqual([a, d]);
        expect((_c = g.getVertex(c)) === null || _c === void 0 ? void 0 : _c.toArray()).toEqual([d]);
        expect((_d = g.getVertex(d)) === null || _d === void 0 ? void 0 : _d.toArray()).toEqual([]);
    });
    it('should delete vertices', function () {
        var _a, _b, _c;
        var g = new index_1.default();
        var a = { name: 'a' };
        var b = { name: 'b' };
        var c = { name: 'c' };
        var d = { name: 'd' };
        g.addVertex(a);
        g.addVertex(b);
        g.addVertex(c);
        g.addVertex(d);
        g.addEdge(a, b);
        g.addEdge(a, c);
        g.addEdge(b, a);
        g.addEdge(b, d);
        g.addEdge(c, d);
        g.deleteVertex(a);
        expect(g.getVertex(a)).toBeUndefined();
        expect((_a = g.getVertex(b)) === null || _a === void 0 ? void 0 : _a.toArray()).toEqual([d]);
        expect((_b = g.getVertex(c)) === null || _b === void 0 ? void 0 : _b.toArray()).toEqual([d]);
        expect((_c = g.getVertex(d)) === null || _c === void 0 ? void 0 : _c.toArray()).toEqual([]);
    });
    it('should delete edges', function () {
        var _a, _b, _c, _d;
        var g = new index_1.default();
        var a = { name: 'a' };
        var b = { name: 'b' };
        var c = { name: 'c' };
        var d = { name: 'd' };
        g.addVertex(a);
        g.addVertex(b);
        g.addVertex(c);
        g.addVertex(d);
        g.addEdge(a, b);
        g.addEdge(a, c);
        g.addEdge(b, a);
        g.addEdge(b, d);
        g.addEdge(c, d);
        g.removeEdge(a, b);
        expect((_a = g.getVertex(a)) === null || _a === void 0 ? void 0 : _a.toArray()).toEqual([c]);
        expect((_b = g.getVertex(b)) === null || _b === void 0 ? void 0 : _b.toArray()).toEqual([a, d]);
        expect((_c = g.getVertex(c)) === null || _c === void 0 ? void 0 : _c.toArray()).toEqual([d]);
        expect((_d = g.getVertex(d)) === null || _d === void 0 ? void 0 : _d.toArray()).toEqual([]);
    });
    it('should check if a path exist', function () {
        var g = new index_1.default();
        var a = { name: 'a' }, b = { name: 'b' }, c = { name: 'c' }, d = { name: 'd' };
        g.addVertex(a);
        g.addVertex(b);
        g.addVertex(c);
        g.addVertex(d);
        g.addEdge(a, b);
        g.addEdge(b, c);
        g.addEdge(a, d);
        expect(g.hasPath(a, c)).toBeTruthy();
        expect(g.hasPath(b, d)).toBeFalsy();
        g.addEdge(b, a);
        expect(g.hasPath(b, d)).toBeTruthy();
    });
});
