"use strict";

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Bob', 'Mary', 'Mick', 'Jack'];

var dogs = ['shar pei', 'chow', 'collie', 'pitbull', 'german shepherd', 'husky', 'boxer', 'rottweiler', 'mastiff', 'poodle', 'ridgeback', 'lab ']



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);

console.log(dogs.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    for(var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    for(var j = 0; j < dogs.length; j++) {
        console.log(dogs[j]);
    }


/// when using a name as a function



    names.forEach(function(element, index, array) {
    element === names[index] === array[index]
});

    dogs.forEach(function (element, index, array) {
        element === dogs[index] === array[index]
    })

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log('1. ' + names[0]);
    console.log('2. ' + names[1]);
    console.log('3. ' + names[2]);
    console.log('4. ' + names[3]);

    console.log('1. ' + dogs[0]);
    console.log('2. ' + dogs[1]);
    console.log('3. ' + dogs[2]);
    console.log('4. ' + dogs[3]);
    console.log('5. ' + dogs[4]);
    console.log('6. ' + dogs[5]);
    console.log('7. ' + dogs[6]);
    console.log('8. ' + dogs[7]);
    console.log('9. ' + dogs[8]);
    console.log('10. ' + dogs[9]);
    console.log('11. ' + dogs[10]);
    console.log('12. ' + dogs[11]);


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function first(array) {
        return array[0];
    }

    function second(array) {
        return array[1]
    }

    function last(array) {
        return array[array.length - 1]  // ues this to get the last on the list
    }

    function third(array) {
        return array[2]
    }


    console.log (first(names));
    console.log(second(names));
    console.log(third(names));
    console.log(last(names));




    var fruits = ['apples', 'peaches', 'grapes', 'pears'];
        console.log(second(fruits));

        console.log(last(fruits))
})();