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
    Pseudocoding is a way to write your code in plain English as a method that can be easily followed and understood. 

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

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
var age = 13
if (age >= 16) {
    console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young");
}

// II. Loops
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (var i=0; i<= 10; i++ )
    console.log (i)
// Write a loop that will print out all the numbers from 10 up to and including 400
for (var i=10; i<=400; i++)
  console.log(i)
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (var i=12; i<=4000; i+=3)
    console.log(i)

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (var i=0; i<=100; i++) {
    if (i % 2 == 0) {
        console.log(i + "<-- is an even number")
    }
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages
const FindingMultiples = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 15 == 0){
            console.log("I found a number. Three is a crowd. I found a number. High five!");
        } else if (i % 3 == 0){
            console.log("I found a number. Three is a crowd.");
        } else if (i % 5 == 0){
            console.log("I found a number. High five!");
        } else {
            console.log(i);
        }
    }
}
FindingMultiples();

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

var bank_account = 0;
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}

console.log(bank_account);
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
var bank_account = 0;
for (let i = 1; i <= 100; i++) {
    bank_account += i*2;
}

console.log(bank_account);

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called? Elements.
// Do Arrays guarantee those things will be in order? No.
// What real-life thing could you model with an array? Your favorite fruits or TV shows. 

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

const quotes =["We may encounter many defeats but we must not be defeated. -Maya Angelou" , "Be kind whenever possible. It is always possible. -Dalai Lama" , "One child, one teacher, one book, and one pen can change the world. -Malala Yousafzai"]
let myquotes = quotes.toString();

console.log(myquotes);

// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
randomThings.splice([2],[1],"World")

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);


// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass.splice([4],[1],"Octohat")
console.log(ourClass);

// Add a new element, "Cloud City" to the array
ourClass.splice([5],[0],"Cloud City")
console.log(ourClass);


// E. Mix It Up

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.splice([4],[0],"Aegon","the Dragon")
console.log(myArray);
// Remove the 5from the beginning of the array.
let removed = myArray.splice(0, 1);
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.splice([0],0,"Bob Marley")
console.log(myArray);

// Remove the string of your choice from the end of the array.
let removeMyString = myArray.splice(5,1)
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
//Mutate= Changing the properties of a value
const reversed = myArray.reverse();
console.log("reversed:", reversed);


// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
let integer = 257
if (integer < 100) {
  console.log("little number");
}
else {
  console.log("big number");
}


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log() little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let num = 7
if (num < 5) {
  console.log("little number");
}
else if (num > 10) {
  console.log("big number");
}
else {
  console.log("monkey");
}


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice ([6],0,"raybans")
console.log(kristynsCloset);

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

kristynsCloset.splice([5], [1],"stained knit hat")
console.log(kristynsCloset);
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log(thomsCloset[0][0]);
// 5. In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1][2]);
// 6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset.splice([1],1,"Footie Pajamas");
console.log(thomsCloset[1]);


// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

printGreeting = (myName) => {
    console.log(`Hello there, ${myName}`)
  }
  printGreeting("Sarah");

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

printCool = (name) => {
    console.log(`${name} is cool!`)
  }
  printCool("Black Panther");

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
calculateCube = (n) => {
    console.log(n * n);
  }
  
  calculateCube(100);

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

isVowel = (x) => {
    if (x.toLowerCase() == "a" || x.toLowerCase() == "e" || x.toLowerCase() == "i" || x.toLowerCase() == "o" || x.toLowerCase() == "u")
      console.log(true);
    else {
      console.log(false)
    }
  }
  isVowel("z")

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (string1, string2) => {
    return [string1.length, string2.length]
    }
    
    console.log(getTwoLengths("Hank","Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (arrayOfStrings) => {
    let lengthOfString = []; 
    
    for(let i = 0; i < arrayOfStrings.length; i++) {
      lengthOfString.push(arrayOfStrings[i].length);
    }
    return lengthOfString
  }
  
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = [6, 9, 1];
  
maxOfThree.sort(compareFunction);
  console.log(maxOfThree[2]);

  function compareFunction(a, b){
    return a-b
  }

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (array) => {
    let longestWord = "";
      for (let i= 0; i < array.length; i++) {
        if(array[i].length > longestWord.length) {
          longestWord = array[i]
        }
      }
    return longestWord;
  }
  
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  




