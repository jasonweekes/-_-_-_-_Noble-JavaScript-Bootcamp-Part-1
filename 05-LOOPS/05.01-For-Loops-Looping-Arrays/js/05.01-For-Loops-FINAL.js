// Lesson 05.01 - PROG

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined
// console.log('let i after the loop ends:', i);

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
for(var n = 0; n < 10; n++) {
    console.log(n);
}

console.log('var n after the loop ends:', n);
// 'i outside loop:'; // i outside loop: 11

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.

// 5. Write a loop with a counter that decrements (counts backwards):
// i outside loop:' // i outside loop: 11
for(let i = 10; i > 0; i--) {
    console.log(i);
}
// console.log(i);

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:


// infinite loop

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer:
// for(let i = 0; i < 10; i--) {
//     console.log(i);
// }

// for (let i = 10; i > 0; i++) {
//     console.log(i);
// }

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100
for(let i = 0; i <= 100; i += 5) {
    console.log(i);
}

// challenge 1: use for loop to produce the following output:
// 1900, 1920, 1940, 1960, 1980, 2000, 2020
for(let i = 1900; i < 2021; i+=20) {
    console.log(i);
}

// challenge 2: use a for loop to output the last 10 years of the rabbit as well as the next 3. 
// Hint: 2023 is the Year of the Rabbit
//       Chinese Zodiac Animals repeat every 12 years
for(let i = 2059; i >= 1903; i-=12) {
    console.log(i);
}

// BONUS 1: make the rabbit years an array so that the years get bigger
let yearOfTheRabbitArr = [];
for(let i = 1903; i <= 2059; i+=12) {
    yearOfTheRabbitArr.push(i);
}

console.log(yearOfTheRabbitArr);

// then reverse the array, so that the years run backwards:
yearOfTheRabbitArr.reverse();
// [2059, 2047, 2035, 2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939, 1927, 1915, 1903]
console.log(yearOfTheRabbitArr);

// BONUS 2: make a string out of the array, save that to a var
let yearOfTheRabbitStr = yearOfTheRabbitArr.join(", ");
console.log('yearOfTheRabbitStr:\n', yearOfTheRabbitStr);
// and output it to the Webpage (NOT just the console)
const h3 = document.querySelector('h3');
h3.style.fontSize = '2rem';
h3.style.color = '#C00';
h3.innerHTML = "Year of the Rabbit:<br>" + yearOfTheRabbitStr;
// "Year of the Rabbit: 1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035, 2047, 2059"

// BONUS 3: output the provided rabbit.jpg to the webpage along with the Year of the Rabbit text
const img = document.querySelector('img');
img.src = 'images/rabbit.jpg';

// continue

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipgin 1960:
for(let i = 1900; i <= 2020; i+=20) {
    if(i == 1960) continue;
    console.log(i); // 1900, 1920, 1940, 1980, 2000, 2020
}


// iterating (looping) arrays

// 10. Declare an array:
const fruits =['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];

// 11. Push a few items into the end of the array:
fruits.push('apricot', 'papaya', 'grape');

// 12. Add a few items to the beginning of the array:
fruits.unshift('grapefruit', 'watermelon', 'tangerine');

// 13. Output the array and its length:
console.log(fruits, fruits.length);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
fruits.splice(fruits.indexOf('cherry'), 3, 'lemon', 'pear');
console.log(fruits, fruits.length);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'lemon', 'pear',  'orange', 'plum', 'apricot', 'papaya', 'grape'] 12

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot':
// 'plum', 'raspberry', 'mango', 'apricot' 
fruits.splice(fruits.indexOf('apricot'), 0, 'raspberry', 'mango');
console.log(fruits, fruits.length);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'pear', 'lemon', 'orange', 'plum', 'raspberry', 'mango', 'apricot', 'papaya', 'grape'] 14

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/
for(let i = 0; i < fruits.length; i++) {
    let bean = `${i+1}. ${fruits[i]} jellybean`;
    console.log(bean);
}

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
fruits.push('banana', 'pineapple', 'peach');
fruits.sort();

// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17
for(let i = 0; i < fruits.length; i++) {
    let bean = `${i+1}. ${fruits[i]} jellybean`;
    console.log(bean);
}

// challenge: add lime and strawberry to fruits without having to sort again
// and presevering A-Z order -- this requires 2 steps
// add lime between lemon and mango:
fruits.splice(fruits.indexOf('mango'), 0, 'lime');
fruits.splice(fruits.indexOf('tangerine'), 0, 'strawberry');
console.log(fruits, fruits.length);

 
// 18. Run the loop again:
    // apple jellybean
    // ... etc. ...
    // plum jellybean

// The last three fruits ('raspberry', 'tangerine', 'watermelon') weren't outputted, because we are running the loop only 14 times for 17 array items. 

// array.length for loop condition

// To make a loop dynamically respond to changes in the size of the array, don't hard-code the number of iterations. Use array.length, instead.

// 19. Change the loop condition so that it will always run as many times as there are items in the array. Dispense with the bean variable and the item numbering, and just log the jellybean directly:
    /* apple jellybean
    ... etc. ...
    watermelon jellybean */

// Now, we get all 17 jellybeans.

// loops with conditional logic

// Loops that iterate arrays often include conditional logic to evaluate the individual items. Let's give this a try.

// Let's make jellybeans again, but this time only if the fruit has five or fewer characters. To check how many letters the fruit is, use the string.length property.

// 20. Make jellybeans, but only if the fruit is five letters or less:
// jellybeans: 'apple', 'grape', 'lemon', 'mango', 'peach', 'pear', 'plum'
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length <= 5) {
        console.log(fruits[i] + ' jellybean');
    }
}

/* Challenge: 
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters, make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
// BONUS: don't just log the results, make arrays for each treat:
// ["apple jellybean", "grape jellybean", ... "plum jellybean"]
// ["apricot popsicle", "banana popsicle", ... "papaya popsicle"]
// ["blueberry lollipop", "pineapple lollipop", ... "raspberry lollipop"]
// {category: "jellybean", flavor: "grape"}
*/
console.log("\nMake jellybeans, popsicles or lollipops:\n");

const jellyTreats = [];
const popTreats = [];
const lolliTreats = [];
for(let i = 0; i < fruits.length; i++){
    if(fruits[i].length <= 5){
        jellyTreats.push(`${fruits[i]} jellybean`);
    } else if (fruits[i]. length <= 8){
        popTreats.push(`${fruits[i]} popsicle`);
    } else {
        lolliTreats.push(`${fruits[i]} lollipop`);
    }
}
console.log(jellyTreats);
console.log(popTreats);
console.log(lolliTreats);

// BONUS: instead of pushing strings, push objects such as:
// {category: "jellybean", flavor: "grape"}
const treatObjsArr = [];
for(let i = 0; i < fruits.length; i++) {
    let obj = {};
    obj.flavor = fruits[i];
    if(fruits[i].length <= 5) {
        obj.category = "jellybean";      
    } else if (fruits[i].length <= 8) {
        obj.category = "popsicle";
    } else {
        obj.category = "lollipop";
    }
    treatObjsArr.push(obj);
}

console.log(treatObjsArr);
    // apple jellybean
    // apricot popsicle 
    // ... etc. ...
    // watermelon lollipop

// making a new array while looping

// The loop is not saving the treats anywhere; they're just being dumped out onto the console. 

// 22. Refactor the loop so that the treats are saved to a new array, which we declared before the above the loop:

console.log("\nSave jellybeans, popsices and lollipops to the treats array:\n");

const treats = [];

// ['apple jellybean', 'apricot popsicle' .. etc. .. 'watermelon lollipop']

// 23. Push in three more berries, and then sort the array:
// 'strawberry', 'blackberry', 'boysenberry'

/* Challenge: 
24. Refactor the fruit loop, so that we still make treats, based on the length of the word. But if the fruit is a 'berry', make jam instead of lollipops. Also this time, since we are using fruits[i] so often, simplify fruits[i] by saving it to a variable:
*/

const treats2 = [];


// making arrays of objects with a loop

// It can be very useful to make arrays of objects on a loop. As objects, the resulting array items can have as many properties as you like:

// 25. Make a loop that goes through this array of full names, and makes objects consisting of three properites each: firstName, lastName, pin, the last being a random 4-digit PIN, with leading 0's, as needed.
const bballStarsArr = ["LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"];
// Push each object into this given array:
const bballStarsObjArr = [];

for(let i = 0; i < bballStarsArr.length; i++) {
    // 26. Split the current array item, the full name, into an array of two names
    let fullName = bballStarsArr[i];
    let nameArr = fullName.split(" "); // ["LeBron", "James"]

    // 27. Save the first name, which is the first array item, to a variable
    let fName = nameArr[0];
    // 28. Save the last name, which is the second array item, to a variable
    let lName = nameArr[1];

    // 29. Generate a random integer from 0-9999
    let r = Math.floor(Math.random() * 10000); // 0-9999  
    // 30. Precede the number with leading 0's, as needed
    // it's already 4 digits, but stringify it
    let pin = "";
    if(r == 0) {
        pin = "0000";
    } else if(r < 10) {
        pin = "000" + r;
    } else if(r < 100) {
        pin = "00" + r;
    } else if(r < 1000) {
        pin = "0" + r;
    } else {
        pin = "" + r;
    }

    // 31. Make an object containing the three properties
    let obj = { "first name": fName, "last name": lName, "pin number": pin };
    // 32. Push the object into the array
    bballStarsObjArr.push(obj);
}

// CHALLENGE: write the code that can be used to reverse any string

let nombreStr = "Ramon"; // Nomar
let nombreArr = nombreStr.split("");
console.log(nombreArr); // ['R', 'a', 'm', 'o', 'n']
let reversedNombreArr = nombreArr.reverse();
console.log(reversedNombreArr); //  ['n', 'o', 'm', 'a', 'R']
let reversedNombreStr = reversedNombreArr.join("");
console.log(reversedNombreStr); // nomaR
// bonus: capitalize the result: Nomar
reversedNombreStr = reversedNombreStr.toLowerCase(); 
// - make all lowercase:
console.log(reversedNombreStr); // nomar
// - capitalize first char:
reversedNombreStr = reversedNombreStr[0].toUpperCase() + reversedNombreStr.slice(1); 
console.log(reversedNombreStr); // Nomar

// 33. Log the newly made array of objects
console.log(bballStarsObjArr);
/* 
34. Given this array of names, make passwords consisting or:
the first name, backwards, all lowercase
+ a special character:
    "#" if the first name has 4 letters or less
    "&" if the first name has exactly 5 letters
    "%" if the first name has more that 5 letters
+ the first three letters of the last name
+ a piece of punctuation:
    an exclamation point ("!") if the first name and last name have the same number of letters 
    a question mark ("?") if the first name is longer than the last name
    an colon (":") if the last name is longer than the first name
+ the number of letters in the full name 
+ if the first and last name start with the same letter:
    add an equal sign "=" to the end
    otherwise, add an asterisk "*"
+ finally, if the last name starts with a vowel:
    add "V" for vowel 
    otherwise add "C" for consonant--unless the last name starts with "Y", in which case, add "X"

Save the passwords to an array of objects that include the names, divided into first and last name
*/

const ballplayers = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", 
"Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];
const playersObjArr = [];

for(let i = 0; i < ballplayers.length; i++) {
    // 35. Split the first and last name into array
    let player = ballplayers[i].split(" "); // ["Hank", "Aaron"]
    // 36. Assign the first and last names to variables
    let fName = player[0];
    let lName = player[1];
    // 37. Split the first name string into an array
    let fNameCharsArr = fName.split(""); // ["H", "a", "n", "k"]
    // 38. Reverse the array
    let fNameCharsArrRev = fNameCharsArr.reverse(); // ["k", "n", "a", "H"]
    // 38B. Make a backwards string from the reversed array
    let fNameBackwards = fNameCharsArrRev.join(""); // knaH
    // Steps 35-38B in one line of code: this process is called Chaining Array Methods
    // 39. split(" "), [O], split(""), reverse(). join(""), toLowerCase() together:
    let fNameRevLC = ballplayers[i].split(" ")[0].split("").reverse().join("").toLowerCase();
    // 40 Start concatenating the password, beginning with the first name backwards:
    let pswd = fNameRevLC;
    // 41. Add a special character, based on the length of the first name:
    if(fName.length <= 4) {
        pswd += '#'; // add "#", if the first name has 4 letters or less
    } else if(fName.length == 5) {
        pswd += '&'; // add "&", if the first name has exactly 5 letters
    } else {
        pswd += '%'; // first name has 5+ letters, so add "%""
    } 
    // 42. Add the first three letters of the last name:
    pswd += lName.slice(0,3);
    // 43. If first name and last name have the same number of letters, add "!"
    if(fName.length == lName.length) {
        pswd += "!";
    // if first name is longer than last name, add "?"
    } else if(fName.length > lName.length) {
        pswd += "?";
    } else { // last name is longer than first; add ":"
        pswd += ":";
    }
    // 44. Check if the first and last names start with the same letter 
    pswd += fName[0] == lName[0] ? "=" : "*";
    // 45. Check if the first name starts with a vowel, consonant or "y"
    // check if first name is a vowel by seeing if first letter is among the 5 vowels
    if('aeiou'.includes(fName[0].toLowerCase())) {
        pswd += "V";
    } else if(fName[0] == 'Y') {
        pswd += "X";
    } else { // first name does NOT start w a,e,i,o,u or y, so it is a consonant
        pswd += "C";
    }
    // 46. Make an object of 3 properties:
    let obj = {"first name": fName, "last name": lName, "password": pswd};
    // 47. Add the object to the new array
    playersObjArr.push(obj);
}

// 48. Output the new array
console.log(playersObjArr)

// Expected output:
/* 
{first name: 'Hank', last name: 'Aaron', password: 'knah#Aar:*C'}
{first name: 'Ernie', last name: 'Banks', password: 'einre&Ban!*V'}
{first name: 'Carl', last name: 'Yastrzemski', password: 'lrac#Yas:*C'}
{first name: 'Mickey', last name: 'Mantle', password: 'yekcim%Man!=C'}
{first name: 'Tony', last name: 'Oliva', password: 'ynot#Oli:*C'}
{first name: 'Babe', last name: 'Ruth', password: 'ebab#Rut!*C'}
{first name: 'Willie', last name: 'Mays', password: 'eilliw%May?*C'}
{first name: 'Nolan', last name: 'Ryan', password: 'nalon&Rya?*C'}
]; 
*/
