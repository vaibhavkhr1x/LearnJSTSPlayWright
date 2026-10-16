let marks = 56;

if(marks >100 || marks <0){
    console.log("Enter valid marks");
}
else{
if(marks>90){
    console.log("Grade is A and Performance is Excellent");
}
    else if(marks <=90 && marks > 80)
    {
        console.log("Grade is B and Performance is Very Good");
    }
    else if(marks <=80 && marks > 70)
    {
        console.log("Grade is C and Performance is Good");
    }
    else if(marks <=70 && marks > 60)
    {
        console.log("Grade is D and Performance is Average");
    }
    else if(marks <=60 && marks >= 50)
    {
        console.log("Grade is E and Performance is Low");
    }
    else
    {
        console.log("Grade is F and Performance is Very Bad");
    }
}