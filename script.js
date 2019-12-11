/**
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 */
/*
 let names = ["john", "alfred"]

 function likes(names){
     let sentence = ""
     if (names.length === 0){
         sentence = "no one likes this";
         return sentence;
     } else if (names.length === 1){
        sentence = names[0] + " likes this";
        return sentence;
     } else if (names.length === 2){
        sentence = names[0] + " and " + names[1] + " like this";
        return sentence;
     } else if (names.length === 3){
         sentence = names[0] + ", " + names[1] + " and " + names[2] + " like this";
         return sentence;
     } else if (names.length > 3) {
         sentence = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
         return sentence;
     }
    }

    let people = ["John"]

    console.log(likes(people));
*/

//PRO ANSWER
/**
 * 
 * function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
 */

//-------------------------------------------------------------------------------------------------------------------



/**
 * Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

//FIZZBUZZ test

let fizzBuzzTest = () => {
  let arr = [];
  for (let i = 1; arr.length < 101; i++) {
    if (i % 15 == 0) {
      arr.push("FizzBuzz at " + i);
    } else if (i % 3 == 0) {
      arr.push("Fizz at " + i);
    } else if (i % 5 == 0) {
      arr.push("Buzz at " + i);
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzzTest());

/*
numberChangeHandler = (num) => {
    let number = num;
    let numArray = [];
    let numString = number.toString();

    // notice below the + sign behind numString which converts the string into a number.

    for (let i = 0; i < numString.length; i++){
        numArray.push(+numString.charAt(i));
    }

    let numArraySquared = numArray.map((value) => {
        return Math.pow(value, 2);
    });

    // notice below the + sign behind numArraySquared which converts the string into a number.

    let numArraySquaredJoin = +numArraySquared.join("");
    return numArraySquaredJoin;
    
}
console.log(numberChangeHandler(9119));
*/

/**
 * PRO SOLUTION
 * 
 * numberChangeHandler = (num) => {
  return +num.toString().split('').map(i => i*i).join('');
}
 */

//-----------------------------------------------------------------------------------------------------------------------

/**
 * our task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples:

basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7

 */

//-----------------------------------------------------------------------------------------------------------------------
/* Variables and Data types lesson */
/*
var firstName =  'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;

console.log(job);

job = 'teacher';
console.log(job);

console.log(firstName + " " + lastName + " is " + age + " years old!");
*/
/*********************************************************
Variable mutation and type coercion
*/
/*
var firstName = "John";
var age = 28;

//****************TYPE COERSION****************

console.log(firstName + ' ' + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he Married?" + isMarried);

//***************VARIABLE MUTATION**************

age = 'twenty eight';
job = 'driver';

alert(firstName + " is a " + age + " year old " + job + ". Is he Married?" + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + " " + lastName);
*/

//************** BASIC OPERATORS******************
/*
var year, yearJohn, yearMark;

now = 2019;
ageJohn= 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log("John " + yearJohn);
console.log("Mark " + yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//type of operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "mark is older than john");
var x;
console.log(typeof x);
*/
/***************
 *
 *  Operator Precedence
 *
 **************/
/*
var now = 2019;

var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(now - yearJohn);
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var agemark = 35;
var average = (ageJohn + agemark) / 2;
console.log(average);

//multiple assignments

var x, y ;

x = y = (3+5) * 4 - 6; //8 * 4 - 6 equals to 26
console.log(x,y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/*
Mark and John are trying to compare their BMI (body mass index), which is calculated using the formula: BMI = mass / height ^2 = mass / (height * height). (mass in kg and height in meter).

1. store marks and johns mass and height in variables.
2. calcualte both their BMIs
3. Create a boolean variable containing information about whether mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (something like @is marks BMI higher than Johns? true.)
GOOD LUCK


*/
/*
var markMass, johnMass, markHeight, johnHeight;
var bmiMark, bmiJohn;


markMass = 80; //kg
markHeight = 1.77; //meter

johnMass = 90; //kg
johnHeight = 1.98; //meter

bmiMark = markMass / (markHeight * markHeight);
console.log(bmiMark);
bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiJohn);
var johnVsMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than Johns? " + johnVsMark);

*/
/*
var firstName = "john";
var civilStatus = "single";

// === is a logical operator which returns true or flase for string
if (civilStatus === "married"){
    console.log(firstName + " is Married.");
} else{
    console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;

if (isMarried){
    console.log(firstName + " is Married.");
} else{
    console.log(firstName + " will hopefully marry soon :)");
}

var markMass, johnMass, markHeight, johnHeight;
var bmiMark, bmiJohn;


markMass = 80; //kg
markHeight = 1.77; //meter

johnMass = 90; //kg
johnHeight = 1.58; //meter

bmiMark = markMass / (markHeight * markHeight);
bmiJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn){
    console.log("Mark's BMI is greater than Johns")
} else {
    console.log("John's BMI is greater than John's")
}

/*var johnVsMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than Johns? " + johnVsMark);
*/

/*
 ******************BOOLEAN LOGIC******
 */
/*
var firstName = "john";
var age = 20;

if (age < 13){
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30){
    console.log(firstName + " is a young man");
} else {
    console.log(firstName + " is a man");
}

/*
Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, "", NaN
// truthy values: all values that are not falsy.
/*
var height;
height = 23;

if (height || height === 0){
    console.log("variable is defined");
} else {
    console.log("the variable has not beed defined");
}

// equality operators

// the == is a non strict equality operator. it convertes the number 23 and converts it to a string in the below if statement. If we were to use === then that is a Strict equality operator. Try to always use === to keep code in check.
if (height == "23"){
    console.log("The == operator does type coercion");
}
*/

/*

John and mike both play basketball in different teams. in teh latest 3 games, johns team scored 89, 120 and 103 points, while mikes team scored 116, 94 and 123 points.

1. calculate the average score for each team
2. decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. then change the scores to show different winers. dont forget to take into account there might be a draw (the same average score)

4. EXTRA: mary also plays basketball, and her team scored 97, 134 and 105 points. like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 

5. Like before, change the scores to generate different winners, keeping in mind there might be draw.

*/

/*

var johnAverage, mikeAverage;

var johnFirstGame, johnSecondGame, johnThirdGame;
var mikeFirstGame, mikeSecondGame, mikeThirdGame;

johnFirstGame = 89;
johnSecondGame = 120;
johnThirdGame = 103;

mikeFirstGame = 116;
mikeSecondGame = 94;
mikeThirdGame = 123;

maryFirstGame = 97;
marySecondGame = 134;
maryThirdGame = 105;

johnAverage = (johnFirstGame + johnSecondGame + johnThirdGame) / 3
console.log("Johns team average score is " + johnAverage);
mikeAverage = (mikeFirstGame + mikeSecondGame + mikeThirdGame) / 3
console.log("Mikes team average score is " + mikeAverage);
maryAverage = (maryFirstGame + marySecondGame + maryThirdGame) / 3
console.log("Marys team average score is " + maryAverage);

if (johnAverage > mikeAverage){
    console.log("John wins against Mike with a average with a score of " + johnAverage);
} else if (mikeAverage > johnAverage){
    console.log("Mike wins against John with a average score of " + mikeAverage);
} else {
    console.log("its a tie with both Mike and John on " + johnAverage);
}

if (maryAverage > mikeAverage && maryAverage > johnAverage){
    console.log("Mary wins in average with a score of " + maryAverage);
} else if (mikeAverage > maryAverage && mikeAverage > johnAverage){
    console.log("Mike wins in average with a score of " + mikeAverage);
} else if (johnAverage > maryAverage && johnAverage > mikeAverage){
    console.log("John wins in average with a score of " + johnAverage);
} else {
    console.log("Its a tie with Johns average score being " +johnAverage + " and marys average score being " + maryAverage + " and mikes average score being " + mikeAverage);
}
*/

/**************
 * FUNCTIONS
 */

// passing an argument into a function called calculateAge and returning a value. Now we need that value to be store somewhere so we define that below with ageJohn ageMike and ageJane.
/*
 function calculateAge(birthYear){
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

//we create a function here with 2 arguments to pass through.
 function yearsUntilRetirement(year, firstName){
    //we call upon the function calcualteAge with the year argument passed through and storing it in the age variable. 
    var age = calculateAge(year);
    //the retirement variable simply calcualtes retirement based on retiremement age of 65
     var retirement = 65 - age;
     if (retirement > 0) {
     console.log(firstName + " retires in " + retirement + " years.");}
     else {
         console.log(firstName + " has already retired.");
     }
     //no return here since we dont need it to return anything outside of this function.
 }

 //we call upon the yearsUntilRetirement function from here.
 yearsUntilRetirement(1990, "John");
 yearsUntilRetirement(1948, "Mike");
 yearsUntilRetirement(1969, "Jane");

 /**
  * 
  * Function Statements and Expressions
  * 
  */

//function declaration
/*
  function whatDoYouDo(job, firstName){

  }
*/
//Function expression
/*
  var whatDoYouDo = function(job, firstName){
    switch(job){
        case "Teacher":
            return firstName + " teaches kids how to code";
        case "Driver":
            return firstName + " Drives a cab in Lisbon."
        case "Designer":
            return firstName + " designs beautiful websites";
        default:
            return firstname + " does something else";
    }
  }

  console.log(whatDoYouDo("Teacher", "John"));
  console.log(whatDoYouDo("Designer", "Mary"));
  console.log(whatDoYouDo("Driver", "Kane"));
  */

/**
 *
 * ***********ARRAYS**********
 *
 */
/*
   //one way of calling an array (and the most popular way) is
   var names = ["John", "Mark", "Jane"];
   // another way of calling an array is
   var years = new Array(1990, 1969, 1948);

   console.log(names);
   console.log(names.length);

   //mutate array data
   names[1] = "Ben";
   names[names.length] = "Mary";
   console.log(names);

   // different data types

var john = ["John", "Smith", 1990, "designer", false];

//below pushes value of Blue to the end of the john array
john.push("Blue");
//below places the var Mr to the beginning of the array
john.unshift("Mr");
console.log(john);

//below deletes an array from the end
john.pop();
john.pop();
//below deteles an array from the beginning.
john.shift();
console.log(john);

//the indexof method reveals the position of an array.
console.log(john.indexOf(1990));

// -1 will be shown if a value searched for (using the indexOf method) is not in the array. we can tehn simply say that if the value is -1 then john is not a designer. 
// var test = john.indexOf("nice") === -1 ? "something" : "something else"
var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John is a designer";

console.log(isDesigner);
*/
/**
 John and his family went on a holiday and went to 3 different restaurants. the bills were £124, £48, and £268.

 to tip the waiter a fair amount, John created a simple tip calcualter (as a function). he likes to tip 20% of the bill when the bill is less than £50, 15% when the bill is between £50 and £200, and 10% if the bill is more than £200.

 in the end, John would like to have 2 arryas:
 1) containing all three tips (one for each bill)
 2) containing all three final paid amounts (bill + tip).

 (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

 GOOD LUCK :)

 */
/*
var bills = [124, 48, 268];

console.log("the bills for the 3 restaurants are \n "+"£" + bills[0],"£" + bills[1],"£" + bills[2]);

function tipCalculator(bill){
    var percentage;
    if(bill <= 50){
        percentage = 0.2;
    } else  if (bill > 50 && bill <= 200){
        percentage = 0.15
    } else if (bill > 200){
        percentage = 0.10;
    }
    var tipOwed = bill * percentage;
    var fullAmountOwed = tipOwed + bill;
    return fullAmountOwed;
}

var firstBillFull = tipCalculator(bills[0]);
var secondBillFull = tipCalculator(bills[1]);
var thirdBillFull = tipCalculator(bills[2]);

var fullAmountArray = [firstBillFull, secondBillFull, thirdBillFull];
console.log("the bills for the 3 restaurants with tips are \n "+ "£" + fullAmountArray[0],"£" + fullAmountArray[1],"£" + fullAmountArray[2]);
*/

/**
 *
 * OBJECTS AND PROPERTIES
 *
 */
/*
 //initialise object with variables inside (Object literal)
var john = {
    firstName: "John", 
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false
};

//various ways of retrieiving data from object
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

//various ways to mutate properties in object
john.job = "Driver";
john["isMarried"] = true;
console.log(john);

//another way of initialising an object (new object syntax)
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
*/

/**
 *
 * OBJECTS AND METHODS
 *
 */
/*
var john = {
    firstName: "John", 
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    //below is a method within an object
    calcAge: function (birthYear){
        this.age =  2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/**
 Lets remember hte first coding challenege where mark and john compared their BMIs. lets now implement the same functionality with objects and methods.
 !) for each of them, create an object with properties for theri full name, mass, and height
 2) then add a method to each object to calcualte the BMI. save the bmi to the object and also return it from teh method.
 3) in teh end, log to the console who has the highest BMI, together with teh full name and respective BMI. dont forget they might have the same BMI.

 remmeber: BMI = mass / height^2. (mass in kg and height in meters).

 */
/*
var john = {
    fullName: "John Smith",
    mass: 110,
    height: 1.95,
    calcBmi: function(mass, height){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
john.calcBmi();
console.log(john.bmi);

var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function(mass, height){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBmi();
console.log(mark.bmi);

console.log(john, mark);

if (john.bmi > mark.bmi){
    console.log("Johns BMI is greater than Marks BMI");
} else if (mark.bmi > john.bmi){
    console.log("Marks BMI is greater than Johns BMI");
} else if (mark.bmi == john.bmi){
    console.log("Both John and Marks BMI are the same");
}
*/

/**
 *
 * LOOPS AND ITERATIONS
 *
 */

//loops are important aspect of any programming language

//initialise "for loop"
//we start by declaring a variable, i. we say for it to perform below operation until i < 10. it will perform the first iteration and then adds 1 to i.
// order of operation for for loop
//   1st step; 2nd step; 4th step
/*
for (var i = 0; i < 10; i++){
    //;3rd step
    console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

//while loop. This is the way we would do it with a while loop
var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}
*/
//continue and break statements
/*
var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++){
    // we are using the !==  which means not equal value or not equal type. we also use the continue statment so we want to only log only string values from the john array. this skips the 1990 in the john array and the false value but doesn't stop the loop.
    if (typeof john[i] !== "string") continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    // we are using the !== which means not equal value or not equal type. we also use the break statement so we want to break the loop if a value other than string type is encountered in the john array. this breaks the loop as soon as 1990 is encountered in the john array.
    if (typeof john[i] !== "string") break;
    console.log(john[i]);
}

//looping backwards

for (var i = (john.length - 1); i >= 0; i--){
    console.log(john[i]);
}

*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/
/*
var john = {
    bill: [124, 48, 268, 180, 42],
    tips:[],
    fullAmount:[],
    calcTip: function(){
        for (var i = 0; i < this.bill.length; i++){
            var percentage;
            if (this.bill[i] <= 50){
                 percentage = 0.2;
            } else if (this.bill[i] > 50 && this.bill[i] <= 200){
                 percentage = 0.15;
            } else if (this.bill[i] > 200){
                 percentage = 0.10;
            }
            tipOwed = percentage * this.bill[i];
            this.tips.push(tipOwed);
            billAndTip = tipOwed + this.bill[i];
            this.fullAmount.push(billAndTip);
        }
    }
}
john.calcTip();
console.log("Johns tips "+john.tips);
console.log("Johns Full amount "+john.fullAmount);

var mark = {
    bill: [77, 375, 110, 45],
    tips: [],
    fullAmount:[],
    calcTip: function(){       
        for (var i = 0; i < this.bill.length; i++){
            // determine percentage based on tipping rules
        if(this.bill[i] < 100){
            percentage = 0.2;
        } else if(this.bill[i] >= 100 && this.bill[i] < 300) {
            percentage = 0.10;
        } else if (this.bill[i] >= 300){
            percentage = 0.25;
        }
    //calculate tip and then assigning it to an array.
       tipOwed = percentage * this.bill[i];
       this.tips.push(tipOwed);
       //calculate total and then assigning it to an array.
       total = tipOwed + this.bill[i];
       this.fullAmount.push(total);
    }
}
}

mark.calcTip();
console.log("Marks tips "+ mark.tips);
console.log("Marks full amount "+mark.fullAmount);

function averageTips(arrayToIterate){
    var tipSum = 0;
    for(var i = 0; i < arrayToIterate.length; i++){
         tipSum = arrayToIterate[i] + tipSum;
    }
    averageTip = tipSum / arrayToIterate.length;
    return averageTip;
}
john.averageTips = averageTips(john.tips);
mark.averageTips = averageTips(mark.tips);
//console.log("Johns average tip is " + averageTips(john.tips));
//console.log("Marks average tip is " + averageTips(mark.tips));
console.log("Johns average tip is " + john.averageTips);
console.log("Marks average tip is " + mark.averageTips);
console.log(john);
console.log(mark);

if(john.averageTips > mark.averageTips){
    console.log("Johns family pays higher on tips");
} else if (mark.averageTips > john.averageTips){
    console.log("Marks family pays higher on tips");
} else {
    console.log("John and Marks family pay the same in tips");
}
*/
/*
// Lecture: Hoisting

calculateAge(1965);

// functions
function calculateAge(year){
    console.log(2016-year);
}


// retirement(1965);


var retirement = function(year){
    console.log(65-(2016-year));
}

//variables
console.log(age);
var age = 23;
//console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/

// Example to sohw teh difference between execution stack and scope chain

//global variable
/*
var a = "Hello";

first();

function first(){
    var b = "Hi!";
    second();

    function second(){
        var c = "Hey";
        third();
}
}

function third(){
    var d = "John";
    //the below log cannot access variable c because the execution stack is different from the scope chain. 
   // console.log(c);
// the only variables this function can access is variables a and d. this is because a is a global variable and d is a variable within this function.
console.log(a + d);
}

*/
