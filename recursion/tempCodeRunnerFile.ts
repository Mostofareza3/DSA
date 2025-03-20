
function reverseString(str:string){
    if(str=== "") return "";
    reverseString(str.slice(1) + str[0] )

}
const str = "hello"
console.log(reverseString(str))
