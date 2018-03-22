"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *
 *
 *


//
// var number = prompt("Would you like to enter a number?");
// var even = nowEven("Your number is even");
// var odd = nowOdd("Your number is odd");
// var boost = plusNumber("Your number plus 100 ");
// // var odd2 = stillOdd("Your number is still odd lol");
// // var  even2 = stillEven("Your number is still even YASSSSS");
//
// function checkEven($val){
//
// }
//     if (number === user);{
//         alert(even);
//     } else if (number < user) {
//         alert(odd);
//     } else {
//         alert(number + 100)
// }
// function () {
//
// }

//______________________________________               ANSWERS*/
// function inputNumber(message){
//     var input = prompt(message);
//     var number = parseInt(input);
//    return number
// }
//
// function isNumeric(value) { // will return a boolean value
//     // return !isNaN(value);
//     return typeof value === 'number';  // its better to use this for finding booleans
// }
// // inputNumber();
//
// function isEvenOrOdd(number) {
//     // this will let us pass a number and get pop up results
//     if (number % 2 === 0) { // consequence
//         return(number + " is even");   // you can us a return or a alert
//     } else {
//         return(number + " is odd");
//     }
//
// function addOneHundredTo(number) {
//         return number + " + 100 = " + (number + 100);
//
// }
//
// function isPositiveOrNegitive() {
//         if (number % 2 === 0) {
//         return number + " is Even :)";
//     } else {
//         return number + " is Odd :)";
//
// }
// function ex1() {
//
//
//     // * // 1. as the user if they want to enter a number
//     // confirm will return a boolean
//     var answer = confirm('Do you want to enter a number');
//     // if the answer is cancel go to step 7
//     if (answer) {
//         // 2. if the answer is Cancel go to step?
//         // 3. ask the use for the number
//         var number = parseInt(prompt('Enter a number'));
//         //3.1. if the user input is not a number show an error message and go to 7
//         if (isNumeric(number)) {
//             document.write(isEvenOrOdd(number));
//             alert(isEvenOrOdd(number));
//
//             alert(addOneHundredTo(number));
//             document.write(addOneHundredTo(number));
//
//             alert(isPositiveOrNegative(number));
//             document.write(isPositiveOrNegative(number));
//
//         }
        // 4. show a message telling if the number is even or odd
        // if (!isNaN(number % 2 === 0)) { // consequence
        //     alert(number + " is even");
        // } else {
        //     alert(number + " is odd")
        // }
        // 5. sum 100 to the number and show the result
        // alert(number + " + 100 =" + (number + 100));
        //6. show a message saying if the number is positive or negative
        // if (number >= 0) {
        //     alert(number + " is a positive number :)");
        // } else {
        //     alert(number + " is a negative numb.er :)");
        //     7. End of program
    //     }
    // }



// /* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


//
//
//
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyceColors(rainbow){
//     if(rainbow === 'blue') {
//         return'blue is the color of the sky';
//     } else  if(rainbow === 'red') {
//         return 'strawberries are red';
//     } else if (rainbow === 'orange') {
//         return 'orange is the new black';
//     } else if (rainbow === 'green') {
//         return'grass is green';
//     } else  if(rainbow === 'indigo') {
//         return 'ink is super indigo';
//     } else if (rainbow === 'violet') {
//         return 'legendary items are violet';
//     } else if (rainbow === 'cyan') {
//         return 'stop cyan'
//     }
//     }
//

//     // switches
// function anaylzeColor(rainbow) {
    ////var pop =
//
// // if you use returns you  dont need to use breaks
//     switch (rainbow) {
//         case 'blue': {
//             return 'blue is the color of the sky';
//         }
//         case 'red': {
//             return 'Strawberrys are red';
//         }
//         case 'cyan': {
//             return 'I dont know anything about cyan';
//         }
//         case 'indgo': {
//             return 'ink is super indigo'
//         }
//         case 'orange': {
//             return 'orange is the new black'
//         }
//         case 'green': {
//             return 'grass is green'
//         }
//         case 'violet': {
//             return 'legenday items are violet'
//         }
//         default: {
//             return "I don't knot anything about  " + color;
//         }
//             return(anaylzeColor(rainbow));
//     }
//
//
// }


 //
 // /*
 // * TODO:
 // * Pass the `randomColor` variable to your function and console.log the results.
 // * You should see a different message everytime you refresh the page
 // */








/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */








/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */










// /* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 *
 * If your lucky number is 0 you have
 * no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%, and
 *if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calvulateTotal(luckNumber, originalamout) {
    switch (luckNumber) {
        case 0:
            return originalamout;
        case 1:
            return originalamout - (originalamout * .1)
        case 2:
            return originalamout * .75;
        case 3:
            return originalamout * .65;
        case 4:
            return originalamout * .5;
        case 5:
            return 0;
    }

}







/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// 1. Show the user the lucky number
alert('Your luck number is ' + luckNumber);
// 2. ask the user for the original price
var originalAmout = inputNumber('How much did bought?');
// 3. calculate total




//  =============================   notes   =============================================================

// var num1;
// var num2;

// num1 = 10;
// num2 = 2;

// sum = num1 + num2;
// console.log(sum);

// function sum(a, b) {
//     retun a + b;
//
// }
//
// var x = 10;
// var y = 2;
// var sum = sum (x, y)
// consloe.log(sum;)
//
//
// function (n1, n2) {
//     return n1 + n2;
// }
//
// var x = prompt('n1');
// var y = prompt('n2');
//
// console,log(sum(x, y));
// console.log(n1);
