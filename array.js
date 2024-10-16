var name = [];//literal notation
var studentNames = new Array();//object notation
var stringsarray = ["Asad", "Ali", "Eshal",];
var numbersarray = [2, 5, 8, 7, 1, 0];
var booleanarray = [true, false, false, true, true];
var mixedarray = [undefined, null, true, "Eshal", 7];
// point 7
document.write("<h1>QUALIFICATIONS</h1>");
var educations = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];

for (var i = 1; i < educations.length; i++) {

    document.write("<ul>" + i + " " + educations[i] + "</ul>");
}
//point 8

document.write("<h1>SCORE</h1>")

var name3 = ["Fariha", "Marium", "Mahnoor"];
var score = [320, 230, 480];
var total = 500;
var percentage = ""

for (var i = 0; i < name3.length; i++) {
    percentage = (score[i] / total) * 100;
    document.write("Score of " + name3[i] + ": " + score[i] + ", Percentage: " + percentage + "%<br>");
}


// point 9
document.write("<h1> Colors</h1>");

var colors = ["Red", "Yellow", "Green", "Blue", "Pink"]
document.write(colors + "<br>");
var newColor = prompt("What color do you want to add to the beginning of the array?");
colors.unshift(newColor);//begining
document.write(colors + "<br>");
var endcolor = prompt("what color do you want to add that color to the end of the array.")
colors.push(endcolor)//end
document.write(colors + "<br>");
colors.unshift("asad", "ali")
document.write(colors + "<br>");
colors.shift()
document.write(colors + "<br>");
colors.pop()
document.write(colors + "<br>");

var colorName = prompt("What color do you want to add?");

var colname = +prompt("which index do you wants to add a color.")
if (colname >= 0 && colname <= colors.length) {
    colors.splice(colname, 0, colorName);// 0 means no color remove
    document.write("After Adding specified number of color: " + colors + "<br>");
}
else {
    document.write("please Enter a valid color")
}

var del = prompt("What color do you want to delete?")
var del1 = +prompt("which index to you want to delete a color")
if (del1 >= 0 && del1 <= colors.length) {
    colors.splice(del1, 1)
    document.write("After Deleting specified number of color " + colors + "<br>")
}
else {
    document.write("invalid index number..")
}



//point 10
var arr = [100, 50, 40, 49, 70]
document.write("<h1>SORT METHOD</h1>")
document.write("Students Score" + arr + "<br>")
arr.sort(function (a, b) { return a - b }
)

document.write("Ordered Scores of Students" + arr + "<br>");

//point 11

var city = ["karachi", "Lahore", "peshawar", "Quetta", "islamabad"]
document.write("CITY " + city + "<br>")

var selectedselect = [city.slice(0, 3)]
document.write("SELECTED CITY " + selectedselect)


//point12

var arr1 = ["This", "is", "my", "cat"];
document.write(arr1 + "<br>")
var string = [arr1.join(" ")]
document.write(string)


//point13

var fifo = [];
fifo.push("Apple");
fifo.push("Banana");
fifo.push("Cherry");

document.write(fifo + "<br>");
var firstItem = fifo.shift();
document.write("Removed: " + firstItem + "<br>");
document.write(fifo.join(", ") + "<br>");

//point 14

var lilo = []
lilo.push("KeyBoard")
lilo.push("Mouse")
lilo.push("printer")


document.write(lilo + "<br>")

var lilo1 = lilo.pop();
document.write(lilo1 + "<br>")

//point 15


var phone = ["apple", "Samsung", " Iphone", "Nokia", "Sony", "Haier"]
var dropdownHtml = "<select>";
for (var i = 0; i < phone.length; i++) {
    dropdownHtml += "<option>" + phone[i] + "</option>";
}

dropdownHtml += "</select>";

document.write("<h1>Select Phone Manufacturer</h1>");
document.write(dropdownHtml);