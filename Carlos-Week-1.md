### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  // Arrow Function: In a arrow function the arrow comes after the list of parameters and followed by the function body. You can omit the parentheses if there is only one parameter name.
  // More info on functions that call on themselves. (Recursion)
  //


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

// Linting helps ones code become less error prone by flagging programming errors, stylistic errors and incorrect logic. I believe they are useful and reduces time in figuring out syntax problems and allows one to focus more on solving.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Global scope is the outermost scope that is accessible by all other scopes. Local scopes are created by functions and are only accessible within itself or scopes within the scope.


  //A variable's scope is the range of the script where it is visible. Variables have either global or local scope. A global variable exists only once in a script, and is visible in every function. Modifications to it in one function are permanent and visible to all functions. Unless declared otherwise, all variables in a script are global. Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id. ( https://docs.thunderstone.com/site/vortexman/variable_scope_global_vs_local.html )


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

  // It was alright. I like doing problems on my own text editor and terminal more since it forces me to think more than just following instructions.

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit - m "Updated Carlos-Week-1"
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?
// Console.log() is useful for debbuging and checking my code for certain outputs. It is really useful in seeing where the code may break or to check if it's working. Return is useful to return a value to the global scope and especially useful for higher order functions when you want to use a function as a callback.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Javascript doesnt check the data type of variables which can lead to problems such as renaming a var to a number if it was a string.  


// Static: Types checked before run-time
Dynamic: Types checked on the fly, during execution
(https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7)
