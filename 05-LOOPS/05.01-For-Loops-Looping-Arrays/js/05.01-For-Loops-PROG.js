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
    console.log(i); // 0 1 2 .. 9
}

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
// for(var i = 0; i < 10; i++) {
//     console.log(i); // 0 1 2 .. 9
// }
// console.log('i after loop ends:', i);// 10
// 'i outside loop:'; // i outside loop: 11

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.
for(let j = 0; j <= 10; j++) {
    console.log(j); // 0 1 2 .. 9
}
// console.log('j after loop ends:', j); // j is not defined

// 5. Write a loop with a counter that decrements (counts backwards):
for(let i = 10; i > 0; i--) {
    console.log(i);
}
// i outside loop:' // i outside loop: 11

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:


// infinite loop

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer:


// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100
for(let i = 0; i <= 100; i+=5) {
    console.log(i);
}

// continue

// 9. Starting with 2023, output each Year of the Rabbit from 1903 to 2059
// also output rabbit image; get the 2023 from the DOM--don't type it

// challenge: use for loop to output Years of the Rabbit
// given 2023, back up 10 cycles and go forward 3,
// expected output: 2059, 2047, 2035, 2023, 2011, 1999, 1987, 1975, 1963, 1951, 1939, 1927, 1915, 1903
// output this to the DOM, not just the console
// make the text big and red to go w red rabbit image

const bunnyImage = document.querySelector('img');
bunnyImage.src = `images/rabbit.jpg`;
// get the 2023 out of this thing:
// <h3 id="rabbit-years">2023</h3>
const rabbitYears = document.getElementById('rabbit-years');
let rabbitYr = Number(rabbitYears.textContent); // 2023
console.log('rabbitYr:', rabbitYr); // 2023
let rabbitYearsStr = ""; // 1903, 1915, 1927, ... 2059
const rabbitYearsArr = [];
for(let yr = rabbitYr - 240; yr <= rabbitYr + 24; yr+=12) {
    rabbitYearsArr.push(yr);
    // put current year in a span to be styled
    // if(yr == rabbitYr) {
    //     rabbitYearsStr += `<span id="current-yr">${yr}</span>, `;
    // } else {
    //     rabbitYearsStr += yr + ", ";
    // }
}
// make the str from the arr: [1903, 1915, 1927, 1939] => "1903, 1915, 1927, 1939"
rabbitYearsStr = rabbitYearsArr.join(', ');
// rabbitYearsStr = rabbitYearsStr.slice(0,-2); // get all but last char
console.log('rabbitYearsStr:', rabbitYearsStr); // 1783, 1795, 1807 ... 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035, 2047,
rabbitYears.innerHTML = rabbitYearsStr;
// rabbitYears.style.color = "#C21";
// rabbitYears.style.lineHeight = "2rem";
// // get the span and style it w reverse colors:
// const currentYearSpan = document.getElementById('current-yr');
// currentYearSpan.style.cssText = 'padding:3px 7px; background-color:#C21; color:#fff; margin:0 3px; border-radius:10px;';
// iterating (looping) arrays

// 10. Declare an array:
const fruits = ['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];

// 11. Push a few items into the end of the array:
fruits.push('apricot', 'papaya', 'grape');

// 12. Add a few items to the beginning of the array:
fruits.unshift('grapefruit', 'watermelon', 'tangerine');

// 13. Output the array and its length:
console.log(fruits);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
fruits.splice(fruits.indexOf('cherry'), 3, 'lemon', 'pear');
console.log('14. fruits:', fruits);
// 'cherry' 
// 'lemon', 'pear'
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'pear', 'lemon', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 12

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot':
// 'apricot' 'raspberry', 'mango'
fruits.splice(fruits.indexOf('apricot'), 0, 'raspberry', 'mango');
console.log('15. fruits:', fruits);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'pear', 'lemon', 'orange', 'plum', 'raspberry', 'mango', 'apricot', 'papaya', 'grape'] 14

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/
for(let f = 0; f < fruits.length; f++) {
    console.log(fruits[f] + ' jellybean');
}
// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
fruits.push('banana', 'pineapple', 'peach');
fruits.sort();
// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

console.log('Five-Letter Max Fruit Jellybeans:');
// make jellybeans from just the short-fruits (5 letter max)
for(let f = 0; f < fruits.length; f++) {
    if(fruits[f].length <= 5) {
        console.log(fruits[f] + ' jellybean');
    }
}
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

/* Challenge: 
21. Make different fruit treats, depending on the number of letters
// - if the fruit is a kind of 'berry', make 'jam'
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
BONUS: don't just console lo every time cuz that doesn't save the data
// instead, store all the results (jams, lollipops, etc) in a treats array
*/
console.log("\nMake jellybeans, popsicles or lollipops:\n");
const treats = []; 
for(let i = 0; i < fruits.length; i++) {
    let fru = fruits[i];
    // - if the fruit is a kind of 'berry', make 'jam'
    if(fru.includes('berry')) {
        treats.push(fru + ' jam');
    // - if the fruit is 5 or fewer letters, make jellybeans
    } else if(fru.length <= 5) {
        treats.push(fru + ' jellybeans');
    // - if the fruit has 6-8 letters,
    } else if(fru.length <= 8) {
        treats.push(fru + ' popsicle');
    } else {
        treats.push(fru + ' lollipop');
    }
}
console.log('treats:', treats); // ['apple jellybeans', 'apricot popsicle', 'banana popsicle', 'blueberry jam', 'grape jellybeans', 'grapefruit lollipop', 'lemon jellybeans', 'mango jellybeans', 'orange popsicle', 'papaya popsicle', 'peach jellybeans', 'pear jellybeans', 'pineapple lollipop', 'plum jellybeans', 'raspberry jam', 'tangerine lollipop', 'watermelon lollipop']

// The loop is not saving the treats anywhere; they're just being dumped out onto the console. 

// 22. Refactor the loop so that the treats are saved to a new array, which we declared before the above the loop:

console.log("\nSave jellybeans, popsices and lollipops to the treats array:\n");

// const treats = [];

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
const basketballStarsArr = ["LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"];
// Push each object into this given array:

    // 26. Split the current array item, the full name, into an array of two names

    // 27. Save the first name, which is the first array item, to a variable

    // 28. Save the last name, which is the second array item, to a variable

    // 29. Generate a random integer from 0-9999

    // 30. Precede the number with leading 0's, as needed

    // it's already 4 digits, but stringify it

    // 31. Make an object containing the three properties
    let obj;

    // 32. Push the object into the array

// 33. Log the newly made array of objects

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

const baseballGreats = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];

// start w simple version were pswd is capitalized first name
// backwards followd by length of full name: "Knah9", "Einre10"
const objArr = [];
const VOWELS = 'aeiou';
for(let i = 0; i < baseballGreats.length; i++) {

    // save the current baseall great to a var:
    let playerName = baseballGreats[i]; // Hank Aaron

    // declare a new empty object to hold the 3 properties: firstName, lastName, password
    const obj = {};

    // 35. Split the player's full name into an array of first name and last name:
    const playerArr = playerName.split(' '); // ['Hank', 'Aaron']

    // 36. Assign the first and last names to the obj as properties
    obj.firstName = playerArr[0]; // Hank
    obj.lastName = playerArr[1]; // Aaron

    // 37. Split the first name string into an array
    let firstNameLettersArr = playerArr[0].split(''); ['H', 'a', 'n', 'k']

    // 38. Reverse the array:
    firstNameLettersArr.reverse(); // ['k', 'n', 'a', 'H']
    // make a backwards string from the reversed array and lower case it
    let firstNameBackwards = firstNameLettersArr.join('').toLowerCase(); 
    console.log('firstNameBackwards:', firstNameBackwards); // 'knah'
    // capitalize the first name backwards:Knah
    firstNameBackwards = firstNameBackwards[0].toUpperCase() + firstNameBackwards.slice(1);

    // 40 Start concatenating the password, beginning with the first name backwards:
    let pswd = firstNameBackwards; // Knah

    // 41. Add a special character, based on the length of the first name:
    // add "#", if the first name has 4 letters or less
    if(obj.firstName.length <= 4) {
        pswd += "#";
        // add "&", if the first name has exactly 5 letters
    } else if(obj.firstName.length == 5) {
        pswd += "&";
    // first name has 5+ letters, so add "%""
    } else {
        pswd += "%";
    }
    
    // 42. Add the first three letters of the last name:
    pswd += obj.lastName.slice(0,3);

    // 43. If first name and last name have the same number of letters, add "!"
    if(obj.firstName.length == obj.lastName.length) {
        pswd += "!";
    // if first name is longer than last name, add "?"
    } else if(obj.firstName.length > obj.lastName.length) {
        pswd += "?";
    } else { // last name is longer than first; add ":"
        pswd += ":";
    } 

    // 44. Check if the first and last names start with the same letter 
    if(obj.firstName[0] == obj.lastName[0]) {
        pswd += "=";
    } else {
        pswd += "*";
    }
 
    // 45. Check if the first name starts with a vowel, consonant or "y"
    if(VOWELS.includes(obj.firstName[0].toLowerCase())) {
        pswd += "V";
    } else if(obj.firstName[0] == "Y") {
        pswd += "X";
    } else {
        pswd += "C";
    }

    obj.password = pswd;
    objArr.push(obj);
  
    // 46. Make an object of 3 properties:
    let ballplayersObjArr;

    // 47. Add the object to the new array

}

// 48. Output the new array
console.log('objArr:', objArr);
// Expected output:
/* namesAndPasswords = [
    {firstName: "Hank", lastName: "Aaron", password: "knah#Aar:9*V"},
    {firstName: "Ernie", lastName: "Banks", password: "einre&Ban!10C="},
    {firstName: "Carl", lastName: "Yastrzemski", password: "lrac"},
    -- etc. --
]; */

// 49. Refactor the "fruit loop" using shorthand:
for(fru of fruits) {
    if(fru.length <= 5) {
        console.log('shorthand: ' + fru + ' jellybean');
    }
}
