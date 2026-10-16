console.log("Please enter the number");
const number = require('fs').readFileSync(0, 'utf8');
for (i = 1; i <= 10; i++){
    console.log(number + " x "+i+" = " + number*i);
}