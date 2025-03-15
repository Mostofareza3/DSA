/* 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].


*/


/**
 * @param {string} digits
 * @return {string[]}
 * 
 * Thinking: First e amra ekta Map nibo jeikhane evabe rakhbo:
 *   2: abc
 *   3: def
 *   4: ghi
 * 
 *  then combination gula milate hobe
 *  dhro amr ache 34 asce tahole amr 3 & 4 er sokol value gula niye ekta cross check kore string of array banabo. 
 * 
 */
var letterCombinations = function (digits) {

    const map = new Map()
    map.set("2", "abc")
    map.set("3", "def")
    map.set("4", "ghi")
    map.set("5", "jkl")
    map.set("6", "mno")
    map.set("7", "pqrs")
    map.set("8", "tuv")
    map.set("9", "wxyz")

    for( char of digits){
        console.log(char)
    }

};
