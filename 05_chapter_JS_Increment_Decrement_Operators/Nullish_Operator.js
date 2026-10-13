//Nullish Coalescing operator - ??

let api_response = null;
let response_data = api_response ?? "{}"; //if variable api_response is null
//then value of variable response_data will be {}
console.log(response_data);

let api_response1 = "not null";
let response_data1 = api_response1 ?? "{}"; //if variable api_response1 is not null
//then value of variable response_data1 will be value of api response1
console.log(response_data1);