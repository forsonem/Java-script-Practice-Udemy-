console.log('Hello World!');
//Switch Statements

var game1John = 89;
var game2John = 120;
var game3John = 103;
var game1Mike = 116;
var game2Mike = 94;
var game3Mike = 123;
var game1Mary, game2Mary, game3Mary;
game1Mary = 97;
game2Mary = 134;
game3Mary = 105;

var johnGameAvg = (game1John + game2John + game3John) / 3;
var mikeGameAvg = (game1Mike + game2Mike + game3Mike) / 3;
var maryGameAvg = (game1Mary = game2Mary + game3Mary) / 3;

var isWinner = mikeGameAvg > johnGameAvg;
if (isWinner === true && mikeGameAvg > maryGameAvg)
{
    console.log('Mike is the winner with a average points per game of ' + mikeGameAvg);
}
else if (isWinner === false && johnGameAvg > maryGameAvg){
    console.log('John is is the winner with a average points per game of ' + johnGameAvg);
}
else{
    console.log('Mary is is the winner with a average points per game of ' + maryGameAvg);
}


//Working with arrays

var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1956, 1890);
//both valis ways of creating anb array.

console.log(names[2]);
console.log(names);
names[1] = 'harold';
console.log(names);
names[names.length]="Mary";//adds an element to the array.
console.log(names);





var john = ['John', 'Smith', 1990,'teacher'];

john.push('blue');//adds element to end of array.
john.unshift('Mr');//adds element to begining of the array.
john.pop();//removes and reyturns the last element in the array
john.shift();//removes and returns the first element in the array
console.log(john);
console.log(john.indexOf(1990));//returs the index number of any given element in the array.
//if the element does not exist the method returns -1.
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT designer' : 'John IS a designer';
console.log(isDesigner);

function tipCalculator(billAmount){
    var tip;
    if(billAmount < 50){
        tip = .20*billAmount;
    }
    else if(billAmount >= 50 && billAmount < 200){
        tip = .15 * billAmount;
    }
    else if(billAmount >= 200){
        tip = .10 * billAmount;
    }
    return tip;
}

var tipArray = new Array();
var totalPaid = new Array();


var tip1 = tipCalculator(268);
var tip2 = tipCalculator(124);
var tip3 = tipCalculator(48);
tipArray.push(tip1);
tipArray.push(tip2);
tipArray.push(tip3);

totalPaid.push(tip1 + 268 );
totalPaid.push(tip2 + 124);
totalPaid.push(tip3 + 48);
console.log(tipArray);
console.log(totalPaid);

//Object Literal
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family : ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarrired: false
};
console.log(john);
var x = 'birthYear';// u can set properties to a variable
console.log(john[x]);//and then the retrive the value of said property via the variable.

john.job = 'designer'; //you can change object property values in a similar way to arrays.
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Beckford';
jane.birthYear=1992;

console.log(jane);

var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family : ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarrired: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

//Coding Challenge 5

//Bills Object
var John = {
  fullName : 'John Johnson',
  bills : [124, 48, 268, 180, 42],

  //Bills object method
  calcTips : function(){
      this.tips = [];
      this.totalPaidArray = [];
      
    for (var i = 0; i < this.bills.length; i++)
    {
        var percentage;
        var bill = this.bills[i];

        if (bill < 50){
            percentage = .20;
        }else if (bill >=50 && bill < 200){
            percentage = .15;
        }else{
            percentage = .1;
        }

        this.tips[i] = bill * percentage;
        this.totalPaidArray[i]= bill + (bill * percentage);
       
        
        
    }
  }
};



var Mark = {
    fullName : 'Mark Johnson',
    bills : [77, 475, 110, 45],
   
    //Bills object method
    calcTips : function(){
        this.tips = [];
        this.totalPaidArray = [];
        
      for (var i = 0; i < this.bills.length; i++)
      {
          var percentage;
          var bill = this.bills[i];
  
          if (bill < 100){
              percentage = .20;
          }else if (bill >=100 && bill <= 300){
              percentage = .1;
          }else{
              percentage = .25;
          }
  
          this.tips[i] = bill * percentage;
          this.totalPaidArray[i]= bill + (bill * percentage);
      }
    }
  };
  

  function averageTip(tips){
      var total = 0;
      for (var i = 0; i < tips.length; i++){
          total = total + tips[i];
      }
      return total / tips.length;
  }
 

John.calcTips();
Mark.calcTips();
Mark.average = averageTip(Mark.tips);
John.average = averageTip(John.tips);
console.log(John, Mark);

if (Mark.average > John.average){
    console.log('Mark gives an average tip of ' + '$' +Mark.average);
}
else if (John.average > Marke.average){
    console.log('John gives an average tip of ' +'$'+John.average)
}
else{
    console.log('the avereages are the same')
}







  





















