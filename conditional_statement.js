// //point 1
var input = prompt("What is your City?")

if (input.toLowerCase() === "karachi") {
    document.write("Welcome to city of lights" + "<br>")
}
else {
    document.write("Welcome to " + input + "<br>")

}

//point 2
var gender = prompt("What is your Gender?").toLowerCase()
if (gender == "male") {
    document.write("Good Morning Sir." + "<br>")
}
else {
    document.write("Good Morning Ma'am." + "<br>")
}

//point 3
var signal = prompt("Enter the colour of the traffic signal (Red, Yellow, or Green.)?").toLowerCase()
if (signal == "red") {
    document.write("Must Stop" + "<br>");
}
else if (signal == "yellow") {
    document.write("Ready to move" + "<br>");
}
else if (signal === "green") {
    document.write("Move now" + "<br>");
} else {
    document.write("Invalid color! Please enter (Red, Yellow, or Green)." + "<br>");
}

//point 4
var fuel = prompt("How many fuel in your Car(in liters)?")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car" + "<br>")
}
else {
    document.write("Have a nice journey." + "<br>")
}

//point 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//point6

var subject1 = +prompt("Enter marks obtained in Subject 1:");
var subject2 = +prompt("Enter marks obtained in Subject 2:");
var subject3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");


var obtainedMarks = +subject1 + +subject2 + +subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>MARK SHEET</h1>")
var grade;
var remarks;

if (percentage >= 80) {

    remarks = "Excellent"
    grade = "A+"

}
else if (percentage >= 70) {

    remarks = "Good"
    grade = "A"
        ("Grade :", grade, "<br>")


}
else if (percentage >= 60) {
    remarks = "You need to improve"
    grade = "B";
}
else if (percentage < 60) {
    remarks = "Sorry"
    grade = "Fail";
}

document.write("Total Marks :" + totalMarks + "<br>")
document.write("Mark Obtained :" + obtainedMarks + "<br>")
document.write("Percentage : " + percentage + "<br>")
document.write("Grade :" + grade + "<br>")
document.write("Remarks :" + remarks + "<br>")


//point 7
var secretnumber = 5;
document.write("<h1>GUESS</h1>")

var guess = +prompt("Guess a number (between 1 and 10)?")
if (guess == secretnumber) {
    document.write("Bingo! Correct answer.")
}
else if (guess + 1 == secretnumber || guess - 1 == secretnumber) {
    document.write("Close enough to the correct answer")
}
else {
    document.write("Your guess is not correct.<br>Best of luck next time.");

}

//point 8
var number = +prompt("Enter a number to check if it's divisible by 3:");
document.write("<h1>DIVISIBLE</h1>")
if (number % 3 === 0) {
    document.write("The number " + number + " is divisible by 3.");
} else {
    document.write("The number " + number + " is not divisible by 3.");
}

//point 9
var number = +prompt("Enter a number to check (It's even or odd:):-");
document.write("<h1>EVEN ODD</h1>")
if (number % 2 === 0) {
    document.write("Its a Even Number")
}
else {
    document.write("Its a Odd Number")
}

//point 10
document.write("<h1>TEMPERATURE</h1>")
var temperature = +prompt("Please enter the temperature in degrees:");
if (temperature > 40) {
    document.write("It is too hot outside.")
}
else if (temperature > 30) {
    document.write("The Weather today is Normal.")
}
else if (temperature > 20) {
    document.write("Today's Weather is cool.")
}
else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool.")
}
else {
    document.write("It's quite cold outside!")
}

//point 11
document.write("<h1>CALCULATOR</h1>")
var firstnumber = +prompt("Enter the first number")
var secondnumber = +prompt("Enter the second number:")
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === '+') {
    result = firstnumber + secondnumber;
} else if (operation === '-') {
    result = firstnumber - secondnumber;
} else if (operation === '*') {
    result = firstnumber * secondnumber;
} else if (operation === '/') {
    if (secondnumber !== 0) {
        result = firstnumber / secondnumber;
    } else {
        document.write("Error: Division by zero is not allowed.");
    }
} else if (operation === '%') {
    result = firstnumber % secondnumber;
} else {
    document.write("Invalid operation. Please enter +, -, *, /, or %.");
}
if (result !== undefined) {
    document.write(`The result is: ${result}`)
}