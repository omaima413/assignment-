/* first 
var age= window.prompt ("Please enter your number");
console.log(age );*/


/* second
var age= window.prompt ("Please enter your number")
if(age % 3 === 0 && age % 4 === 0 )
    {console.log("yes");}
else{
    console.log("no");}*/



/* third
var num1 = window.prompt("Please enter the first number");
var num2 = window.prompt("Please enter the second number");
if (num1 > num2) {
    console.log("The first number is greater");
} else {
    console.log("The second number is greater");
}*/


/* forth 
var num= window.prompt ("Please enter your number")
if(num > 0)
    {console.log("positive");}
else{
    console.log("negative");} */



/* fifth
var num1 = window.prompt("Please enter the first number");
var num2 = window.prompt("Please enter the second number");
var num3 = window.prompt("Please enter the third number");
if (num1 > num2 && num1 > num3)  {
    console.log("The first number is greater");
} else if (num2 > num1 && num2 > num3) {
    console.log("The second number is greater");
} else {
    console.log("The third number is greater");
} */



/* sixth
 var num= window.prompt ("Please enter your number")
if(num % 2 === 0)
    {console.log("even");}
else{
    console.log("odd");} */




/* seventh
var char = window.prompt("Please enter a character");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log("The character is a vowel");
} else {
    console.log("The character is a consonant");
} */



/* eighth
var num= window.prompt ("Please enter your number");

for (var i = 1; i <= num; i++) {
    console.log (i);
    
}*/


/* ninth
var number = Number(prompt("Enter an integer: "));

for (var i = 1; i <= 12; i++) {
    console.log(number * i);
} */



/* tenth
var number = Number(prompt("Enter a number: "));

for (var i = 2; i <= number; i += 2) {
    console.log(i);
}
*/




/* eleventh
let int1 = Number(prompt("Enter the base number: "));
let int2 = Number(prompt("Enter the exponent: "));

var result = 1;
for (var i = 1; i <= int2; i++) {
    result *= int1;
}

console.log(result);
*/




/* twelfth
var subject1 = Number(prompt("Enter marks for Subject 1:"));
var subject2 = Number(prompt("Enter marks for Subject 2:"));
var subject3 = Number(prompt("Enter marks for Subject 3:"));
var subject4 = Number(prompt("Enter marks for Subject 4:"));
var subject5 = Number(prompt("Enter marks for Subject 5:"));

var total = subject1 + subject2 + subject3 + subject4 + subject5;
var average = total / 5;
var percentage = (total / 500) * 100;
console.log("Total Marks = " + total);
console.log("Average Marks = " + average);
console.log("Percentage = " + percentage + "%"); */


/* thirteen
var month = Number(prompt("Enter month number (1-12): "));

var days;

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31;
} 
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
} 
else if (month === 2) {
    days = 28; // not considering leap years here
} 
else {
    days = "Invalid month number!";
}
console.log(days);   */



/* fourteen 
var physics = Number(prompt("Enter marks for Physics:"));
var chemistry = Number(prompt("Enter marks for Chemistry:"));
var biology = Number(prompt("Enter marks for Biology:"));
var mathematics = Number(prompt("Enter marks for Mathematics:"));
var computer = Number(prompt("Enter marks for Computer:"));

var total = physics + chemistry + biology + mathematics + computer;
var percentage = (total / 500) * 100;
var grade;

if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else if (percentage >= 40) {
    grade = "E";
} else {
    grade = "F";
}
console.log(total);
console.log(percentage);
console.log(grade);
*/
















