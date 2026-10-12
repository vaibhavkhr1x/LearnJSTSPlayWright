let age = "Vaibhav"; //String literal
let height = 5.9; //Number literal
let isStudent = true; //Boolean literal
let hobbies = ["reading", "swimming"]; //Array literal
let address = { street: "123 Main St", city: "Anytown" }; //Object literal
let greet = function() { //Function literal
  console.log("Hello!");
}
let nullValue = null; //Null literal
let undefinedValue; //Undefined literal
let symbolValue = Symbol("unique"); //Symbol literal
let bigIntValue = 1234567890123456789012345678901234567890n; //BigInt literal
let regexValue = /ab+c/; //Regular expression literal
let templateLiteral = `Hello, ${age}!`; //Template literal
let multiLineString = `This is a multi-line
string literal.`;
let binaryLiteral = 0b1010; //Binary literal
let octalLiteral = 0o12; //Octal literal

console.log(typeof age); // Output: string
console.log(typeof height); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof hobbies); // Output: object
console.log(typeof address); // Output: object
console.log(typeof greet); // Output: function
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); // Output: undefined
console.log(typeof symbolValue); // Output: symbol
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof regexValue); // Output: object
console.log(typeof templateLiteral); // Output: string
console.log(typeof multiLineString); // Output: string
console.log(typeof binaryLiteral); // Output: number
console.log(typeof octalLiteral); // Output: number
