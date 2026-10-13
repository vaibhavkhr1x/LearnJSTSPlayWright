//Pre Increment - first value of a is increased by 1 and then assigned to b

let a = 10;
b = ++a;
console.log(b);

// Post Increment - first value of x is assigned to y then value of x increased by 1

let x = 10;
y = x++;
console.log(y, x);

let z = 10;
console.log(++z + z); // ++z first increments the value of z by 1. so next already becomes 11
console.log(z);

let v = 10;
console.log(++v + v + v++);
console.log(v);

let i = 1;
console.log(i++ + ++i); // (i++) i will be incremented by 1 the next time it appears and (++i) i has already become 2 and next time it appears it will be incremented by 1 that means 3
console.log(i);

//----------------------------------------------------------------------

//Pre decrement
let l = 10;
let m = --l;
console.log(m);
console.log(l);

//Post decrement
let g = 10;
let h = g--;
console.log(g);
console.log(h);