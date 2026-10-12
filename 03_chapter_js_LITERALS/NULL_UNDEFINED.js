/* undefined and null are primitive values in JavaScript.
   undefined is a type that has only one value: undefined. It is the default value of uninitialized variables.
   null is a type that has only one value: null. It represents the intentional absence of any object value.*/

    var a; // a is undefined
    console.log(a); // Output: undefined

    var b = null; // b is null
    console.log(b); // Output: null

    var c = 5; // c is a number
    console.log(c); // Output: 5



    function checkValue(value) {
        if (value === undefined) {
            console.log("The value is undefined.");
        } else if (value === null) {
            console.log("The value is null.");
        } else {
            console.log("The value is neither undefined nor null.");
        }
    }

    checkValue(a); // Output: The value is undefined.
    checkValue(b); // Output: The value is null.
    checkValue(c); // Output: The value is neither undefined nor null.
