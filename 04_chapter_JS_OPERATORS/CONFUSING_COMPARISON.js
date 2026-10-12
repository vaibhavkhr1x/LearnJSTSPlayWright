// Empty String vs 0 vs "0"
console.log("" == 0); // true
console.log("" === 0); // false
console.log("0" == 0); // true, transivity broken, coerced concept,
// "0" is coerced to 0
console.log("0" === 0); // false, different types
console.log("" === 0); // false,
console.log("" === "0"); // false, different types