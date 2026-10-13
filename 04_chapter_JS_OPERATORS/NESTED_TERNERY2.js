let statusCode = 600;
let category = (statusCode<300) ? "Success" : (statusCode<400 ? "Redirect" : statusCode<500 ? "Client Error" : "Server Error");
console.log(`Status code is : ${statusCode} - ${category}`);