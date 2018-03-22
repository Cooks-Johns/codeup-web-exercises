"use strict";

// 1. Input
// 2. Process the InPut
// 3. OutPut

//==============       Movies

// You have rented some movies for your kids:The little mermaid
// (for 3 days),Brother Bear (for 5 days, they love it), and Hercules
// (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?


// var MoviePricePerDay = 3;
//
// var LittleMermade = prompt("How Many day's did you rent Little Mermade? ");
// var Mermade = LittleMermade * MoviePricePerDay;
//
// var BrotherBear = prompt("How many day's did you rent Brother Bear? ");
// var Bear = BrotherBear * MoviePricePerDay;
//
// var Hercules = prompt("How many day's did you rent Hercules? ");
// var Herc = Hercules * MoviePricePerDay;
//
// var CheckOut = Mermade + Bear + Herc;
//
// alert("Your Owe $"CheckOut);





//==================       Contractor


// Suppose you're working as a contractor for 3 companies: Google,
// 'Amazon and Facebook, they pay you a different rate per hour. Google pays $400,
// 'Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// 'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.



// var google = 400;
//
// var Amazon = 380;
//
// var FaceBook = 350;
//
// // parseFloat allows for the string to be a decibel.
//
// var Go = parseFloat(prompt("How many hours did you work for Google? "));
// var moneyG = Go * google;
//
// var am = parseFloat(prompt(" How many hours did you work for Google? "));
// var moneyA = am * Amazon;
//
// var Fb = parseFloat(prompt(" How many hours did you work for Google? "));
// var moneyb = Fb * FaceBook;
//
//
// var paid = moneyG + moneyA + moneyb;
//
// alert(paid);





//===============          Class

// A student can be enrolled to a class only if the class is not full and the class
// schedule does not conflict with her current schedule. A product offer can be applied
// only if people buys more than 2 items, and the offer has not expired. Premium
// members do not need to buy a specific amount of products.


// var full = prompt("Is the class full?") === "yes";
//
// var conflicts = prompt("Are there schedule conflicts?") === "yes";
//
// // audience :  the developer
// console.log("full:" + full);
//
//
//
// var canEnroll = !full && !conflicts;
//
// // audience: end users
//
// alert("Able to enroll: " + canEnroll);



//  ============== Buy 2

var itemsBrought = parseInt(prompt("How many items were bought?"));

var isOfferValid = prompt("Is the offer valid?") == "yes";

var isPremiumMember = prompt("Are you a premium member") == "yes";

//  [processing
var shouldApplyOffer = (itemsBought > 2 && isOfferValid) || isPremiumMember;

// output

alert("Offer Status" + shouldApplyOffer);













