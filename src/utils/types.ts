/**
 * @param {*} a an element
 * @returns {number} 
 * * 0, when 'a' is the target
 * * -1 or <0, when 'a' is smaller than 'a'
 * * 1 or >0, when 'a' is larger than 'a'  
 */
export type BinarySearchCompareFunction = (a: any) => number;

/**
 * @param {*} a current element
 * @param {*} b next element to compare
 * @returns {boolean} true if 'b' should come before 'a' otherwise false
 */
export type CompareFunctionBoolean = (a: any, b: any) => boolean;