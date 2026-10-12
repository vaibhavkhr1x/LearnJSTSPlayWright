let million=1_000_000; //this allowed us to use underscores in numbers for better readability
console.log(million); // Output: 1000000
console.log(typeof million); // Output: number
let binary = 0b1010_0001; // binary literal
console.log(binary); // Output: 161
console.log(typeof binary); // Output: number
let hexadecimal = 0xFF; // hexadecimal literal
console.log(hexadecimal); // Output: 255
console.log(typeof hexadecimal); // Output: number
let bigInt = 1234567890123456789012345678901234567890n; // BigInt literal
console.log(bigInt); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // Output: bigint  
let big = 1_000_000_000_000_000_000n; // BigInt literal with underscores
console.log(big); // Output: 1000000000000000000n
console.log(typeof big); // Output: bigint
let bigFormat = BigInt(42); // BigInt constructor
console.log(bigFormat); // Output: 42n