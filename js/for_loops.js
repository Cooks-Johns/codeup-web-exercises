"use strict";


// 7 x 1 = 7  ==================  showMultiplicationTable
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


function showMultipicationTable(number) {
     for (var i = 1; i <= 10; i++) {
          console.log(number + " x " + i + " = " + (number * i));
     }

}

showMultipicationTable(7);



//      ==================   RANDOM NUMBER
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

function randomInt(start, end) {
     return Math.floor(Math.random() * (end - start)) + start;

}
function isEven(x) {
     return x % 2 === 0;

}
function isOdd(x) {
     return x % 2 !== 0;

}

var number;

for(var i = 1; i <= 10; i++) {
     number = randomInt(20, 200);
     if(isEven(number)){
          console.log("Hi, coder I'm " + number + " let\'s stay even")
     }
     if(isOdd(number)) {
          console.log("Well HI! I'm " + number +
              " I might be odd but its not nice to stare!")
     }
}















// 1     ==================
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


var string;
for(var i = 1; i <= 10; i++) {

}
















// 100     ==================
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5


