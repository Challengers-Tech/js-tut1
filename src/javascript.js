/*
This is just a test. It should appear as a comment.

DATA TYPES

Number  - a number value (1, 1.34)
Boolean - a truthy or falsy value (TRUE or FALSE)
Char    - a single character (`a` or `+`)

String  - an array of characters (for ex: `a+b isa sampl`)
Array   - a list of values. Use `[x]` to access, where x is the key. 
    For example:
    var arr1 = []; // empty array
    arr1[0] = "zero"; // sets the value at position 0 to "zero"
    arr1[1] = "onetwothree"; // sets the value at position 1 to "onetwothree"

Object - An object can contain properties and methods. It is created with {}
    Similar to an array, an object may contain multiple values
    It can also contain functions, or other objects. The main difference here, is
    that the "key" can be a string. See person1 for an example below.
 

VARIABLES
*/

var myName = "Justin";
var myLastName = "Challenger";
var dateBornYear = 1993;
var dateBornMonth = 9;


var person1 = {
    name: { // this `name` key points to a value that is also an object
        firstName: "Justin",
        lastName: "Challenger"
    },
    dobYear: 1993, 
    dobMonth: 9,
    aliases: [ // the `aliases` key points to an array value
        "iAmHokum",
        "ThatGuySlim"
    ]
};

// Runs after the page loads
$(document).ready(() => {
    console.log("The page is ready! My name is ", person1);
    console.log("And his name is: " + person1.name.firstName );

    console.log("Person1 is an object, and contains an object `name`", person1.name);
    console.log("Person1 is an object, and contains an array of `aliases`", person1.aliases);
});