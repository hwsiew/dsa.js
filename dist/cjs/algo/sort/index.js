"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heapSort = exports.quickSort = exports.mergeSort = exports.selectionSort = exports.insertionSort = exports.bubbleSort = void 0;
var bubbleSort_1 = require("./bubbleSort");
Object.defineProperty(exports, "bubbleSort", { enumerable: true, get: function () { return __importDefault(bubbleSort_1).default; } });
var insertionSort_1 = require("./insertionSort");
Object.defineProperty(exports, "insertionSort", { enumerable: true, get: function () { return __importDefault(insertionSort_1).default; } });
var selectionSort_1 = require("./selectionSort");
Object.defineProperty(exports, "selectionSort", { enumerable: true, get: function () { return __importDefault(selectionSort_1).default; } });
var mergeSort_1 = require("./mergeSort");
Object.defineProperty(exports, "mergeSort", { enumerable: true, get: function () { return __importDefault(mergeSort_1).default; } });
var quickSort_1 = require("./quickSort");
Object.defineProperty(exports, "quickSort", { enumerable: true, get: function () { return __importDefault(quickSort_1).default; } });
var heapSort_1 = require("./heapSort");
Object.defineProperty(exports, "heapSort", { enumerable: true, get: function () { return __importDefault(heapSort_1).default; } });
