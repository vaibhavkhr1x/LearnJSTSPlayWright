console.log("5" != 5); // false, because "5" is a string and 5 is a number, but != does type coercion
console.log("5" !== 5); // true, because !== does not do type coercion, so the types are different (string vs number)
