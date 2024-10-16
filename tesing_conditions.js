//point 1
document.write("<h1>Number and String:-</h1>")
var character = prompt("Enter a character (number or letter):");
var code = character.charCodeAt();

if (code >= 48 && code <= 57) {
    document.write(character + " is a number.");
} else if (code >= 65 && code <= 90) {
    document.write(character + " is an uppercase letter.");
} else if (code >= 97 && code <= 122) {
    document.write(character + " is a lowercase letter.");
} else {
    document.write(character + " is neither a number nor a letter.");
}


// point 2

var num1 = +prompt("Enter a first number")
var num2 = +prompt("Enter a first number")
document.write("<h1>Integers</h1>")
if (num1 > num2) {
    document.write(num1 + " is a larger number")
}
else if (num2 > num1) {
    document.write(num2 + " is a larger number")
}
else {
    document.write("The both numbers are equal.")
}

//point 3
document.write("<h1>Numbers</h1>")

var number = +prompt("Enter a number");

if (number > 0) {
    document.write("Number is Positive.");
} else if (number < 0) {
    document.write("Number is Negative.");
} else if (number === 0) {
    document.write("Number is Zero");

} else {
    document.write("It's not a number.");
}

//point 4
document.write("<h1>VOWELS</h1>")

var singlecharacter = prompt("Enter a single (Word or Character)").toLowerCase()
if (singlecharacter === "a" || singlecharacter === "e" || singlecharacter === "i" || singlecharacter === "o" || singlecharacter === "u"

) {
    document.write("CORRECT! It's a vowel")
}
else if (singlecharacter.length !== 1) {
    document.write("Plz enter a single Character..")
}
else {
    document.write("It's not a vowel ")
}

//point 5 
document.write("<h1>PASSWORD VALIDATION</h1>")
var correctpassword = prompt("Enter (his/her) password");
var firstpassword = "12345";
var secondpassword = "678910";

if (correctpassword === "") {
    document.write("Please enter your password")
}
else if (correctpassword === firstpassword || correctpassword === secondpassword) {

    document.write("Correct! The password you entered matches the original password")
}
else {
    document.write("Incorrect password!")
}

//point 6

document.write("<h1>GREETINGS</h1>")
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
document.write(greeting);

//point 7

document.write("<h1>Time Period Checker</h1>");

var time = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 0 && time < 1200) {
    document.write("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon")
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening")
}
else if (time >= 2100 && time < 2359) {
    document.write("Good night")
} else {
    document.write("Plz enter a correct time")
}