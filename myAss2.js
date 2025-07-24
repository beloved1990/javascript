
// Write a program that will console log the grade of student after addition the exam score and test score

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