var emptyArray = [];
var array = [
    [123],
    [456],
    [789]
];

console.log(emptyArray);
console.log(array);


//point 3
document.write("<h1>NUMERIC COUNTING</h1>")
for (var i = 1; i < 11; i++) {
    document.write(i + "<br>")
}

//point4
document.write("<h1>TABLE</h1>")

var user = +prompt("Enter a number");
var length = +prompt("Enter length of multiplication table")

for (var i = 1; i <= length; i++) {
    document.write(user + "*" + i + "=" + user * i + "<br>")
    // }    document.write(fruits[i] + "<br>")
}

//point6
document.write("<h1>FORWARD</h1>")

for (var i = 1; i <= 15; i++) {
    document.write(i + "<br>")
}
document.write("<h1>BACKWARD</h1>")

for (var i = 10; i >= 1; i--) {
    document.write(i + "<br>")
}


// //point 5
// document.write("<h1>PRINT ITEMS</h1>")
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
document.write("<h1>EVEN</h1>")

for (var i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        document.write(i + "<br>")
    }


}

document.write("<h1>ODD</h1>")
for (var i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        document.write(i + "<br>")
    }
}

document.write("<h1>SERIES</h1>")
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k" + "<br>")
    }

}


// //point 7

var A = ["apple pie", "cookies", "patties", "cake", "chips"];
var bake = prompt("WELCOME to MK bakery! What do you want to order?")
var found = ""
for (var i = 0; i < A.length; i++) {
    if (A[i] === bake) {
        found = true;
        break;
    }
}


if (found) {
    alert(bake + " is available");
} else {
    alert("Sorry! " + bake + " is not available..");
}

//point 8

var B = [24, 53, 78, 91, 12];
document.write("<h1>Largest Number</h1>");

var largest = B[0];

for (var i = 1; i < B.length; i++) {
    if (B[i] > largest) {
        largest = B[i];
    }
}
document.write(B);

document.write("The largest number is: " + largest);


//point 9
var C = [24, 53, 78, 91, 12];
document.write("<h1>Largest Number</h1>");

var largest = C[0];

for (var i = 1; i < C.length; i++) {
    if (C[i] < largest) {
        largest = C[i];
    }
}

document.write(C);
document.write("The largest number is: " + largest);

//point10

document.write("<h1> Multiples of 5</h1>");

for (var i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + " ");
    }
}


