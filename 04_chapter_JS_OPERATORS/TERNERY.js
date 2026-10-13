// Syntax:
// condition ? expressionIfTrue : expressionIfFalse

//Example 1
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

let actualStatusCode = 200;
let expectedStatusCode = 200;
let statusMessage = (actualStatusCode === expectedStatusCode) ? "Success" : "Error";
console.log(statusMessage); // Output: Success

let responseTime = 850;
let sla = 1000; // (service level agreement)
let performanceMessage = (responseTime <= sla) ? "Within SLA" : "Outside SLA";
console.log(`Response: ${responseTime}ms - ${performanceMessage}`);
// Output: Response: 850 ms - Within SLA
// above is an example of template literal
console.log(`What is the SLA time? ${sla}ms`);
// Output: What is the SLA time? 1000ms