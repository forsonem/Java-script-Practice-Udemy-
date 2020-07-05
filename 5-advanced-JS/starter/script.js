//Obkect creation oop----------------------------------------------------------------------------------------------
// //Function Constructor
// //Creating the constructor for an object.. like creating a class person in C#

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    
    
// }
// //Prototype property of the parent constructor.
// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Smith';

// //Instantiation of the person object
//  var john = new Person('John', 1992, 'teacher');
//  john.calculateAge();

//  console.log(john.lastName);

//-------------------------------------------------------------------------------------------------------------------
//object.create Metod-------------------------------------------------------------------------------------------------

//  var personProto = {
//      calculateaAge: function() {
//          console.log(2016 - this.yearOfBirth);
//      }
//  };
//  var john = Object.create(personProto);
//  john.name = 'John';
//  john.yearOfBirth = 1992;
//  john.job = 'teacher';

// //object innitialization syntax using obect.create.
//  var jane = Object.create(personProto, 
//     {
//         name: {value: 'Jane'}, 
//         yearOfBirth: {value: 1992}, 
//         job: {value: 'designer'}
//     });

//Primitives versus objects

//a variable declared as an object just points to a refrence of theta object
//a primitive variable actually holds the value that is assigned to that variable.

//----------------------------------------------------------------------------------------------------------------
//First Class Functions--------------------------------------------------------------------------------------------

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }
// //the function that we passed into the function above...call back function
// function calculateAge(el){
//     return (2016 - el);
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }
//     else{
//         return -1;
//     }
// }

// var ages = arrCalc(years, calculateAge);
// console.log(ages);

// var fullages = arrCalc(ages, isFullAge);
// console.log(fullages);

// var rates = arrCalc(ages, maxHeartRate);
// console.log(rates);
 
// function interviewQuestion(job){
//     if ( job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?');
//         } 
//     }else if (job === 'teacher'){
//         return function(name) {
//             console.log(name + ', what subject do you teach?')
//         }
//     }
//     else{
//         return function(name){
//             console.log(name + ', what do you do?')
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('April');

// //another way to do the same thing

// interviewQuestion('teacher')('Mark');

//----------------------------------------------------------------------------------------------------------------------------------------
//Immediateley Invoked Function Expression
//Normal function---variables cannot be accessed if they are defined within a function.
function game(){
    var score = Math.random() *  10;
    console.log(score >=5);
}
game();
//if the only purpose is to declare a private variable then we do not need to declare an entire function with a name and then call it . We can use a Immediateley Invoked Function Expression as seen below
(function () {
    var score = Math.random() *  10;
    console.log(score >=5);
})();

//java script wiill think this is a function declaration and so it will throw an error as the function has no name.
// function () {

// }
//we have to trick the parser and make it believe that the above code is an expresion and not a declaration, and we do that by wrapping the entire function in paretheses. Tis creates data privacy as we no longer have access to the scor variable. Then we have to envoke the function, which is the paretheses at the end of the expression. The function is not saved to a variable so this is the only way to envoke the function. We can pass arguments into the ife to extend the functionality of the function. We pass a variable in the function parameters and give that variable a value in the paretheses that envoke the function at the end as seen below. Thi is how we craete data privacy. 


(function (goodluck) {
    var score = Math.random() *  10;
    console.log(score >= 5 - goodluck);
})(5);

//Closures

function retirement(retirementAge){
    var a= ' years left until retirement';
    return function(yearOfBirth) {
        console.log((retirementAge - age) + a);
    }
}
//when we call the function above and save it to the retirementUS variable we have returned the function into that variable 
var retirementUS = retirement(66);

// I re worked the interview functuion to use clusures

function interviewQuestion(job){
    var a = ', can you please explain what UX design is?';
    var b = ', what subject do you teach?';
    var c = ', what do you do?';
    return function(name){
        if (job === 'designer'){
            console.log(name + a);
        }else if (job === 'teacher'){
            console.log(name + b);
        }else{
            console.log(name + c);
        }
    }
}

var interviewTeacher = interviewQuestion('teacher');
interviewTeacher('Alexa Kirk');
interviewQuestion('designer')('Mark');

//Bind Call and apply

var john = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m a ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
john.presentation('formal', 'morning');
//the call method can be used to 
var emily = {
    name: 'Emily',
    age: 56,
    job: 'Librarian'
};
//fist argument of the call method is always to set the 'this' variable. If we set this variable to emily then from that point on every 'this' refernce in the function will refer to the emily object. This is called property variable
john.presentation.call(emily, 'friendly', 'afternoon');
//Samne as the above excet after passing through the this variable, the apply method expects an array filled with the other required parameters.This will not work because our fuunction does not accept an array. Example of the apply method.
john.presentation.apply(emily, ['friendly', 'morning']);
// The binding variable works like the call function, instead it returns a function and so it can be saved to a variable. below is an example of carrying which is a function saved to a variable with preset parameters.
var emilyBinding = john.presentation.bind(emily, 'formal');
emilyBinding('afternoon');





var years = [1990, 1965, 1937, 2005, 1998];

function arrCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//the function that we passed into the function above...call back function
function calculateAge(el){
    return (2016 - el);
}
function isFullAge(limit, el){
    return el >= limit;
}
        
    

var ages = arrCalc(years, calculateAge);
var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

/*
--- Let's build a fun quiz game in the console! ---
*/

//7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

(function() {
    // 1. Build a function constructor called Question to describe a question. A question should include:
    // a) question itself
    // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    // c) correct answer (I would use a number for this)

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    // 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    //6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
    //2. Create a couple of questions using the constructor

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of this course\'s teacher?',['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Question('What does best describe coding?',['Boring', 'Hard', 'Fun', 'Tediuos'], 2);
    
    //3. Store them all inside an array
    var questions = [q1, q2, q3];

    //Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    //5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
         



