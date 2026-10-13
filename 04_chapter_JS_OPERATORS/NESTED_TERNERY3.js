let temp=5;
let feel= (temp >= 40 ? "VERY HOT" : (temp >= 30) ? "HOT" : (temp >= 20) ? "WARM" : (temp >=10) ? "ROOM TEMP" : "COLD");
console.log(`Water feels like ${feel} because the temperature is ${temp}`);
