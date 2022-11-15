/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's
  characters.
  What is it about a string that makes it possible for it to become a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
// funtion to determinte whether or not a string can be rearranged into a palindrome
function canStringBecomePalindrome(str) {
    // create a variable to hold the count of each letter
    let letterCount = {};
    // loop through the string
    for (var i = 0; i < str.length; i++) {
        // if the letter is not in the object, add it and set the count to 1
        if (letterCount[str[i]] == undefined) {
            letterCount[str[i]] = 1;
        }
        // if the letter is in the object, increment the count
        else {
            letterCount[str[i]]++;
        }
    }
    // create a variable to hold the number of odd counts
    let oddCount = 0;
    // loop through the letterCount object
    for (let key in letterCount) {
        // if the count is odd, increment the oddCount variable
        if (letterCount[key] % 2 != 0) {
            oddCount++;
        }
    }
    // if there is more than one odd count, return false
    if (str === "" || oddCount > 1) {
        return false;
    }
    // otherwise return true
    else {
        return true;
    }
}

use


/*****************************************************************************/

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));

console.log('//');

console.log(canStringBecomePalindrome2(str1));
console.log(canStringBecomePalindrome2(str2));
console.log(canStringBecomePalindrome2(str3));  
console.log(canStringBecomePalindrome2(str4));
console.log(canStringBecomePalindrome2(str5));
console.log(canStringBecomePalindrome2(str6));

