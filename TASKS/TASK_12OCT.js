let a = 100;

console.log(a++ + ++a +a++ + ++a); // 100 + 102 + 102 + 104 = 408

console.log(a); // 104


let x = 37;

console.log(--x + x--); // 36 + 36 = 72

console.log(x); // 35

3.
let l = 5;
let m = l-- - --l; // 5 - 3 = 2
console.log(m, l); // 2 3

4.
let i = 1;

let r = (i++ > 1) ? i++ : ++i; // 3
console.log(r, i); // 3 3