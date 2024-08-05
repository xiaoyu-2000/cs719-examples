// When the script first runs, display this alert box to the user.
// alert("Welcome to this webpage!");

/**
 * Get a reference to the button on the page from within our JS code.
 *
 * Essentially, the document.querySelector() function will look for the given CSS selector (in this case
 * an element selector - "button") and will return the first HTML element on the page which matches that
 * CSS selector.
 */

console.log("Hello concole")
const button = document.querySelector("button");
let i = 4;
i = 10.932;
console.log(i);
const aBoolean = false;
const a = 5;
const b = 10;
const sum = a + b;
console.log("The sum is:" + sum);
console.log(aBoolean);

const divid = 10 / 8;
const divid2 = Math.floor(10 / 8);
console.log("The divided number is:" + " " + divid);
console.log("The floor divided number is:" + " " + divid2);
const hello = "world";
const myName = "Qiaoyu" + " " + "Lu";
console.log("My name is:" + myName);


const age = 23;
const hobby = "watching movies";
const myInfo = `Hello my name is ${myName}, I am ${age} years old, and my hobby is ${hobby}`;
console.log("Qiaoyu's info:" + " " + myInfo);
console.log(myName.toUpperCase);
console.log(myInfo.length);
console.log(myInfo.indexOf("i"));
console.log(myInfo.substring(10, 20));
console.log(myInfo.includes("my"));

const string42 =42;
console.log(string42);
const value = parseInt("42.5432");
console.log(value);

const value2 = parseFloat("42.5432");
console.log(value2);

const firstPara = document.querySelector("p");
console.log(firstPara);

firstPara.style.color = "red";
firstPara.style.fontWeight = "bold";
firstPara.style.textAlign = "center";














// This is a function that we can call later on to run the code inside.
function handleButtonClick() {
  alert("Helloword!");
}

/**
 * Hook up the button so that when it is clicked, the handleButtonClick() function above will be run.
 *
 * Notice that we do NOT have () - we just wrote handleButtonClick, NOT handleButtonClick(). This is
 * because here, we are only NAMING the function to call later, we are NOT calling it immediately.
 *
 * Experiment by adding () to the end of handleButtonClick below and see what happens.
 */
button.addEventListener("click", handleButtonClick);

/**
 * This is another way of writing the above. Rather than defining a function and naming it to be called later,
 * we can write an anonymous function directly in the addEventListener call here. This can be useful if, for example,
 * we never need to use this function anywhere else.
 */
// button.addEventListener("click", function () {
//   alert("You clicked me!");
// });

/**
 * Here's another way of defining an anonymous function - this time, using arrow function syntax. This is a shorthand for the
 * above on lines 33 - 35. This is probably the most common of the three variations shown in this example, as they are
 * the quickest to write once you get used to them.
 *
 * See: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
 */
// button.addEventListener("click", () => alert("You clicked me!"));
