
// Write a program that will console log the grade of student after addition the exam score and test score
/*
let examScore = 10;
let testScore = 10;
let totalScore = examScore + testScore;
let grade;
if(totalScore >= 90){
    grade = "A+";
}
else if(totalScore>=80){
    grade = "A";
}
else if(totalScore>=70){
    grade = "B+";
}
else if(totalScore>=60){
    grade = "B";    
}
else if(totalScore>=50){    
    grade = "C+";
}
else if(totalScore>=40){
    grade = "C";
}
else if(totalScore>=30){
    grade = "D+";
}
else if(totalScore>=20){
    grade = "FAILED";
}

console.log("totalScore:", totalScore);
console.log("Grade:", grade);
*/

/*
//switch case example
let day = 7;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    
    default:
        console.log("Invalid day");
}
*/

/*
// Example of a simple calculator using switch case
let num1 = 100;
let num2 = 12;
let operator = "*";
switch(operator) {
    case "+":
        console.log("Result:", num1 + num2);
        break;
    case "-":
        console.log("Result:", num1 - num2);
        break;
    case "*":
        console.log("Result:", num1 * num2);
        break;
    case "/":
        if(num2 !== 0) {
            console.log("Result:", num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}

*/


// Example of a simple calculator using if-else
let num1 = 100;
let num2 = 0;  
let operator = "/";
if(operator === "+") {      
    console.log("Result:", num1 + num2);
}
else if(operator === "-") {
    console.log("Result:", num1 - num2);
}
else if(operator === "*") {
    console.log("Result:", num1 * num2);
}
else if(operator === "/") {
    if(num2 !== 0) {
        console.log("Result:", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
} else {
    console.log("Invalid operator");
}
