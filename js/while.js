"use strict";


//
// var count = 2;
// while(count <= 65536) {
//     console.log(count + count);
//      count = count * 2;
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log().floor(Math.random() * 5) + 1;
//
// function allCones(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
//
// // use for a code that can be ran more than once but uses less code
// // if there are enough cones
//      // If there are not enough cones
//     // If there are no more cones
// var cones = prompt("How Many cones would you like?");
// function (cones) {
//
// }
// do {
//     if (cones === 5)
//         confirm('5 cones sold...  ');
//     count++;
// } while(!answer);
// console.log('Cannot sell you 6 cones I only have 3... ' + count +
//     'Yay! I sold them all! ');
//
//



for(var i = 3; i<= 10; i++){
    //     document.write("This loop is repeating " +i+ " times </br>" );
    //
    // }

    if(i % 4 == 0) {
        continue
    }
    // for(var i = 1; i <= 100; i++) {
    if(i == 9) {
        break
    }

    document.write("I have " +i+ " but these " +i+ " aint loops aint one! </br>" )
}
