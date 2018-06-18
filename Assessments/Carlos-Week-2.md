### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.
Boolean(p)
Null(p)
Undefined(p)
Number(p)
String(p)
Symbol (p)
and Object

According to the latest ECMAScript release, these are the data types:

Boolean
Null
Undefined
Number
String
Symbol
Object

(http://lucybain.com/blog/2015/js-data-types/)

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: It would log 'outside'


Then, past the code in your console and explain why you were right/wrong.
I was wrong. The function doesn't take in a value so it doesn't know what text contains.

#### 3. What is JSON? How does it relate to javascript objects?

A json is a file that contains javascript object information that is useful for databases.   

JSON: JavaScript Object Notation.

JSON is a syntax for storing and exchanging data.

JSON is text, written with JavaScript object notation. (https://www.w3schools.com/js/js_json_intro.asp)

#### 4. Describe a closure, what is it good for and how do you recognize one?

A closure is part of the scope of a function where it's variables lie. It's good to understand where the closure occurs incase you want to pass values that only a certain function contains. I would recognize one whenever a function closes.

  //Googled Answer
  This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

  This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

  The counter is protected by the scope of the anonymous function, and can only be changed using the add function.(https://www.w3schools.com/js/js_function_closures.asp)

#### 5. What's the difference between =, ==, and === in JavaScript?

 = is used to set a variable, == is used to check for equals between values and === is to check both equals and data types


  //Googled Answer
  The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal. (https://www.quora.com/What-is-the-difference-between-and-operator-in-javascript)
