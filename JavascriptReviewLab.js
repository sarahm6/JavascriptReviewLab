// I. Variables & Datatypes
/* A. Q + A 
How do we assign a value to a variable?
    With the assignment operator
How do we change the value of a variable?
    With global and local variables
How do we assign an existing variable to a new variable?
    With the assignment operator
Remind me, what are declare, assign, and define?
    Declare: Determines the name and data type of a variable or other element
    Assign: To give a value to a variable
    Define: Give it a meaning 
What is pseudocoding and why should you do it?
    Pseudocoding is a way to write your code in plain English as a method that can be easily followed and understoof. 

*/

/* B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.*/

// Create a variable called firstVariable
var firstVariable
// // Assign it the value of the string "Hello World"
var firstVariable = ("Hello World")
// // Change the value of this variable to some number
var firstVariable = 7
// // Store the value of firstVariablein a new variable called secondVariable
var secondVariable = firstVariable
// // Change the value of secondVariableto any string.
var secondVariable = ("Hi friend")
// What is the value of firstVariable?
firstVariable = "Hi friend 7"
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
var yourName = ("Sarah Memon");
var greeting = (`Hello my name is ${yourName}`);
console.log(greeting);


/* C. Booleans */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false || false || false || false && true);
console.log(false == false)
console.log(e == 'Kevin');
console.log((a + b) == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log((a * a) == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 === '48');


/*D. The farm*/
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

var animal = "cow"
if (animal=="cow") {
    console.log("mooooo");
} else {
  console.log("Hey! You're not a cow");
}
    
// Commit

