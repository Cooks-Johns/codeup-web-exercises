"use strict";



function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
}
// getRndInteger(20, 200);
for(var i = 0; i <= 10; i++) {
var random = getRndInteger(20, 200);
   if(random % 2 === 0) {
       console.log(random + " is even!");
   } else {
       console.log(random + " is odd!");
   }
}


