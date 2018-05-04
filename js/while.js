"use strict";



var count = 2;
while(count <= 65536) {
    console.log(count);
    count = count * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= allCones) {
        console.log( " I have only sold  " +
        conesSold + " cones I need to get back out there!");
        allCones -= conesSold;
    } else {
        console.log(" Sorry I cannot sell you " + conesSold +
            " cones because I only have" + allCones + " cones left.")
    }
} while (allCones > 0);
console.log("Yeah I sold them all, now what?");


// // use for a code that can be ran more than once but uses less code