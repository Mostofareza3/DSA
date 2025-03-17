Recursion কী?

Recursion মানে হলো একটি ফাংশন যখন নিজেকেই কল করে। এটি মূলত বড় সমস্যাকে ছোট ছোট অংশে ভাগ করে সমাধান করার কৌশল। Recursion চলতে থাকবে যতক্ষণ না base case (stop condition) মিলে যায়।

⸻

Recursion-এর উদাহরণ: Factorial গণনা

Factorial মানে হলো:
n! = n \times (n-1)!
যেখানে,
0! = 1

Recursive কোড (JavaScript)

function factorial(n) {
    if (n === 0) return 1; // Base case (স্টপ কন্ডিশন)
    return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

✅ কিভাবে কাজ করছে?
	•	factorial(5) → 5 * factorial(4)
	•	factorial(4) → 4 * factorial(3)
	•	factorial(3) → 3 * factorial(2)
	•	factorial(2) → 2 * factorial(1)
	•	factorial(1) → 1 * factorial(0)
	•	factorial(0) → 1 (Base Case)

এখন সব কল উল্টো দিক থেকে রিটার্ন হতে থাকে—
5 \times 4 \times 3 \times 2 \times 1 = 120

⸻

Recursion-এর আরেকটি উদাহরণ: Fibonacci Series

Fibonacci সিরিজ:
F(n) = F(n-1) + F(n-2)
যেখানে,
	•	F(0) = 0
	•	F(1) = 1

Recursive কোড (JavaScript)

function fibonacci(n) {
    if (n === 0) return 0; // Base case 1
    if (n === 1) return 1; // Base case 2
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(6)); // Output: 8

✅ Output:

Fibonacci of 6 is: 8



⸻

Recursion-এর আরেকটি উদাহরণ: Array Sum

ধরো, তোমার কাছে একটা অ্যারে আছে [1, 2, 3, 4, 5], এখন এর সমস্ত উপাদানের যোগফল বের করতে হবে।

Recursive কোড (JavaScript)

function sumArray(arr, n) {
    if (n <= 0) return 0; // Base case
    return arr[n - 1] + sumArray(arr, n - 1); // Recursive case
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers, numbers.length)); // Output: 15

✅ কিভাবে কাজ করছে?
	•	sumArray([1,2,3,4,5], 5) → 5 + sumArray([1,2,3,4], 4)
	•	sumArray([1,2,3,4], 4) → 4 + sumArray([1,2,3], 3)
	•	sumArray([1,2,3], 3) → 3 + sumArray([1,2], 2)
	•	sumArray([1,2], 2) → 2 + sumArray([1], 1)
	•	sumArray([1], 1) → 1 + sumArray([], 0)
	•	sumArray([], 0) → 0 (Base Case)

শেষে সব যোগফল হবে:
1 + 2 + 3 + 4 + 5 = 15

⸻

Recursion দিয়ে Reverse String করা

ধরো, তোমার কাছে একটা স্ট্রিং আছে "hello", এখন এটাকে reverse করতে হবে।

Recursive কোড (JavaScript)

function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.slice(1)) + str[0]; // Recursive case
}

console.log(reverseString("hello")); // Output: "olleh"

✅ কিভাবে কাজ করছে?
	•	reverseString("hello") → reverseString("ello") + "h"
	•	reverseString("ello") → reverseString("llo") + "e"
	•	reverseString("llo") → reverseString("lo") + "l"
	•	reverseString("lo") → reverseString("o") + "l"
	•	reverseString("o") → reverseString("") + "o"
	•	reverseString("") → "" (Base Case)

শেষে সব concatenate হয়ে রিভার্স হয়ে যাবে: "olleh"

⸻

Recursion দিয়ে Nested Object Traversal

ধরো, তোমার কাছে একটা nested object আছে, যেখানে বিভিন্ন লেভেলে value key আছে। এখন তোমাকে সব value বের করতে হবে।

Recursive কোড (JavaScript)

function getValues(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result = result.concat(getValues(obj[key])); // Recursive call
        } else {
            result.push(obj[key]);
        }
    }
    return result;
}

let nestedObj = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 } },
    g: 5
};

console.log(getValues(nestedObj)); // Output: [1, 2, 3, 4, 5]



⸻

Recursion-এর সুবিধা ও অসুবিধা

✅ সুবিধা:
	•	জটিল প্রবলেম সহজে সমাধান করা যায়।
	•	কোড clean & readable হয়।
	•	Divide and Conquer সমস্যায় কার্যকরী।

❌ অসুবিধা:
	•	Stack Overflow হতে পারে (যদি Base Case ভুল হয় বা অনেক ডিপথে যায়)।
	•	Iterative সমাধান অনেক সময় বেশি efficient হতে পারে (যেমন Fibonacci-এর ক্ষেত্রে)।
	•	Memory consumption বেশি হয় কারণ প্রতিটি recursive কল stack memory ব্যবহার করে।

⸻

Recursion বনাম Iteration

Feature	Recursion	Iteration
কোড স্টাইল	ছোট ও ক্লিন	বড় ও লুপ-ভিত্তিক
Performance	বেশি stack space নেয়	কম memory লাগে
Base Case দরকার?	হ্যাঁ	না
সহজবোধ্যতা	Divide & Conquer প্রবলেমে ভালো	Loop-ভিত্তিক সমাধানে ভালো



⸻

কবে Recursion ব্যবহার করবো?

✅ যখন প্রবলেমকে ছোট ছোট অংশে ভাগ করা যায়।
✅ যখন “Divide and Conquer” টেকনিক কাজে লাগে।
✅ যখন স্ট্যাক বেইজড ডাটা স্ট্রাকচার (Tree, Graph) নিয়ে কাজ করবো।
✅ যখন প্রবলেম সহজভাবে লুপ দিয়ে করা কঠিন।

যদি Iterative সমাধান সহজ ও efficient হয়, তাহলে সেটাই ব্যবহার করো!