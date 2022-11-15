// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 3, 4, 6, 9, 15];

const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [3, 4, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
// function to remove elements from an array until the callback function returns true

function dropIt(arr, cb) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// dopIt with functional programming
function dropItAgain(arr, cb) {
    return arr.filter(element => cb(element));
}

/*****************************************************************************/

console.log(dropIt(nums1, callback1));
console.log(dropIt(nums2, callback2));
console.log(dropIt(nums3, callback3));
console.log('//');
console.log(dropItAgain(nums1, callback1));
console.log(dropItAgain(nums2, callback2));
console.log(dropItAgain(nums3, callback3));
