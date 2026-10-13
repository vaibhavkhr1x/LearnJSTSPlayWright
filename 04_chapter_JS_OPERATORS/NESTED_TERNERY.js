//Multiple Conditions

let age =17;
//if age >18, can go to Goa and if age >25, can drink too
let boy_can_enjoy = (age>18) ? " go to Goa" : "not go to Goa";
console.log(`Boy can ${boy_can_enjoy}`); // Template literal

let boy_can_enjoy_both = (age>18) ? (age>25 ? "enjoy Goa and Drink" : "not Drink, but can go to Goa") : "not Drink, neither can go to Goa";
console.log(`Boy can ${boy_can_enjoy_both}`); // template literal