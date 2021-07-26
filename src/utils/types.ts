/**
 * @param {*} a an element
 * @returns {number} 
 * * return 0, when 'a' is the target
 * * return -1 or <0, when 'a' is smaller than 'a'
 * * return 1 or >0, when 'a' is larger than 'a'  
 */
export type BinarySearchCompareFunction = (a: any) => number;

/**
 * @param {*} a current element
 * @param {*} b next element to compare
 * @returns {boolean} true if 'b' should come before 'a' otherwise false
 */
export type CompareFunctionBoolean = (a: any, b: any) => boolean;

/**
 * @param {*} a current element
 * @param {*} b next element to compare
 * @returns {number} 
 * * return 0, when a == b
 * * return <0, when b should be before a
 * * return >0, when a should be before b
 */
export type CompareFunctionNumber = (a: any, b:any ) => number;