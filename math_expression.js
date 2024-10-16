//point 1

var number = 10;
document.write("The value is : " + number + "<br>");
number = ++number;
document.write("The value is after pre increment is: " + number + "<br>");
number++;
document.write("The value is after post increment is: " + number + "<br>");
number = --number;
document.write("The value is after pre decrement is: " + number + "<br>");
number--;
document.write("The value is after post decrement is: " + number + "<br>");


//point2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a: ", a, "<br>");
document.write("b: ", b, "<br>");
document.write("result: ", result, "<br>");

//point 3
var input = prompt("Please Enter Your Name:- ")

if (input) {
    document.write("Hello ", input, "! ", "WELCOME", "<br>")
}
else {
    document.write("Hello WELCOME!", "<br>")
}

//point4

var number = prompt("Please Enter a number:")
var useroutput = "";
if (number) {
    for (var i = 1; i <= 10; i++) {
        useroutput += number + " x " + i + " = " + (number * i) + "<br>";
    }

}
else {

    for (var i = 1; i <= 10; i++) {
        useroutput += 5 + "x" + i + "=" + (5 * i) + "<br>";
    }
}
document.write(useroutput);

//point 5
document.write("<h1>Student Mark Sheet</h1>");
var subject1 = prompt("Enter the 1st subject:");
var subject2 = prompt("Enter the 2nd subject:");
var subject3 = prompt("Enter the 3rd subject:");

var totalMarks_each_subject = 100;
var obtained1 = prompt(`Enter the obtained marks in ${subject1} (out of 100): `)
var obtained2 = prompt(`Enter the obtained marks in ${subject2} (out of 100):`)
var obtained3 = prompt(`Enter the obtained marks in ${subject1} (out of 100): `)

var percentage1 = (obtained1 / 100) * 100
var percentage2 = (obtained2 / 100) * 100
var percentage3 = (obtained3 / 100) * 100

var total = totalMarks_each_subject * 3;
var total_student = +obtained1 + +obtained2 + +obtained3;
var percentage = (total_student / total) * 100;

document.write(`
    <table border="1" >
        <tr>
            <th>Subjects</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${totalMarks_each_subject}</td>
            <td>${obtained1}</td>
            <td>${percentage1.toFixed(2)}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${totalMarks_each_subject}</td>
            <td>${obtained2}</td>
            <td>${percentage2.toFixed(2)}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${totalMarks_each_subject}</td>
            <td>${obtained3}</td>
            <td>${percentage3.toFixed(2)}%</td>
        </tr>
    </table>`);


document.write(`The total obtained marks ${total} out of ${total_student} <br> `)
document.write(`percentage is ${percentage} `);