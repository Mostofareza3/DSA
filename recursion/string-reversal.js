

function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0]; 
}
const str = "HELLO"
console.log(reverseString(str))

/* 
input: hello

reverseString("") + o = o
reverseString(o) + l = ol
reverseString(lo) + l = oll
reverseString(llo) + e = olle
reverseString(ello) + h = olleh
*/