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
    ],
    get fullName(){ return this.name.firstName + ' ' + this.lastName; }
};

var posts = [{
    title: "Sample Post", 
    subtitle: "",
    body: "This is the body of the post", 
    createdDate: "2021-01-23T12:13:54"
}];

// Runs after the page loads
$(document).ready(function(){
    // We can use console.log to print to the console window in your browser
    console.log("The page is ready! Here is Person1 ", person1);
    console.log("Person1 contains an object `name`", person1.name);
    console.log("Person1 contains an array of `aliases`", person1.aliases);
    console.log("Lets see the first alias: ", person1.aliases[0]);

    // setTimeout is a built in function
    // We can use it to call another function after some amount of time
    setTimeout(function(){ 
        console.log("Its been 5 seconds! I'm selecting the default person");
        selectPerson(person1);
    }, 5000);
});



// Functions are blocks of code that can be declared and used later
function selectPerson(person){
    // In Javascript, we can construct strings in 3 different ways
    // Here, I use the + sign to concatenate 2 strings together
    var htmlOutput = "<div id='selected-person>Name: " + person.fullName + "</div>";
    return htmlOutput;
}
