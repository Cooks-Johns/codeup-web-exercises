(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,


        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
           var area = Math.PI * Math.pow(this.radius, 2);
            console.log(area);
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            var circArea = circle.getArea();
            if(doRounding) {
                 circArea = Math.round(circArea)
            }
            // doRounding = Math.floor(intg);
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);





    //
    // Returns a random integer between miin and max.
    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }
    //
    // console.log(Math.sqrt(16));


})();