///////////////////////////////////////
// Lecture: Hoisting
calcAge(1990);
function calcAge(year){
    console.log(2016- year);

}
//the above works due to how execution phases work. only works with a function declatration + variable declarations. Code below does not work because it is a function expression and a veriable expression.
// retirement(1990);
// var retirement = function(year){
//     console.log(65-(2016-year));
// }

var age = 23;
console.log(age);


//

function foo(){
    var age=65;
    console.log(age);
}
//you get two different results for the first age expression is saved in the Global context variable where the second age expression is saved in the execution context variable of the function foo().
foo();
console.log(age);




















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
function calculateAge(year){
    console.log(2016-year);
    console.log(this);
}
calculateAge(1985);









