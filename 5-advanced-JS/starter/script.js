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

