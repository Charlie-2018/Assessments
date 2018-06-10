// // 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.
//
if(false) {
  console.log("You'll never see this message!")
} else {
  console.log("This message is visible")
}
//
// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.
// Line 10 creates a variable k that is set to 20. K can be set to any number.
var k = 20;
// Line 13 creates a for loop that subtracts 1 from i which is set to k as long as i >=10. The body console logs i for each step the loop takes.
for( var i = k; i >= 10 ; i = i - 1) {
    console.log(i);

}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".
    array = [ "cat", "dog", "bird", "monkey"]
    console.log(array[1]);
    array.splice(3, 1, "duck")
    console.log(array)

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:
//
if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.


if (light == 0 ) {
    console.log ( " The light is off ")
} else {
    console.log ( " the light is off ")
}

// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"
// //
function practiceFunc(arg1, arg2) {

    var sum = arg1 + arg2


    if ( typeof arg1 == "number" && typeof arg2 == "number") {
        if ( sum < 20 ){
            console.log( sum )
        } else {
            console.log( "can't count that high!")
    }}

    else{
        console.log( "input a number")
    }


}
console.log(practiceFunc(1 , "hey"))
console.log(practiceFunc(2, 20))
console.log(practiceFunc(2, 2))
console.log(practiceFunc(2, ))
console.log(practiceFunc(2, "$"))
