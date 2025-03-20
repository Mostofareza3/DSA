

// function reverseString(str){
//     if(str=== "") return "";
//     reverseString(str.slice(1) + str[0] )

// }

function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0]; 
}
const str = "ab"
// let sliced = str.slice(1)
// console.log("sliced:>>",sliced)
console.log(reverseString(str))

/* 
hello : input

reverseString("") + o
reverseString(o) + l
reverseString(lo) + l
reverseString(llo) + e
reverseString(ello) + h
*/