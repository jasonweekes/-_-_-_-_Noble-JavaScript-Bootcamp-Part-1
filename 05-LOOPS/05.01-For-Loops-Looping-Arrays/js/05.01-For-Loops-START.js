// Lesson 05.01 - PROG

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/


// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
// 'i outside loop:'; // i outside loop: 11

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.

// 5. Write a loop with a counter that decrements (counts backwards):
// i outside loop:' // i outside loop: 11

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:


// infinite loop

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer:


// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100


// challenge: use for loop to produce the following output:
// 1900, 1920, 1940, 1960, 1980, 2000, 2020

// continue

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipgin 1960:
// 1900, 1920, 1940, 1980, 2000, 2020

// iterating (looping) arrays

// 10. Declare an array:
// 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'

// 11. Push a few items into the end of the array:
// 'apricot', 'papaya', 'grape'

// 12. Add a few items to the beginning of the array:
// 'grapefruit', 'watermelon', 'tangerine'

// 13. Output the array and its length:
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
// 'cherry' 'lemon', 'pear'
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'pear', 'lemon', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 12

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot':
// 'apricot' 'raspberry', 'mango'

// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'pear', 'lemon', 'orange', 'plum', 'raspberry', 'mango', 'apricot', 'papaya', 'grape'] 14

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
// 'banana', 'pineapple', 'peach'

// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

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
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
*/
console.log("\nMake jellybeans, popsicles or lollipops:\n");

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

const ballplayersArr = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];

    // 35. Split the first and last name into array

    // 36. Assign the first and last names to variables
    let fName;

    // 37. Split the first name string into an array
    let fNameCharsArr;

    // 38. Reverse the array
    let fNameCharsArrRev;
    // make a backwards string from the reversed array
    let fNameBackwards;

    // 39. O, chain split(), reverse() and join() together:
    let fNameRev;

    // 40 Start concatenating the password, beginning with the first name backwards:
    let pswd;

    // 41. Add a special character, based on the length of the first name:
    // add "#", if the first name has 4 letters or less
    
    // add "&", if the first name has exactly 5 letters
    
    // first name has 5+ letters, so add "%""

    // 42. Add the first three letters of the last name:

    // 43. If first name and last name have the same number of letters, add "!"

    // if first name is longer than last name, add "?"

    // last name is longer than first; add ":"
      
    // 44. Check if the first and last names start with the same letter 
 
    // 45. Check if the first name starts with a vowel, consonant or "y"
  
    // 46. Make an object of 3 properties:
    let ballplayersObjArr;

    // 47. Add the object to the new array
 
// 48. Output the new array

// Expected output:
/* namesAndPasswords = [
    {firstName: "Hank", lastName: "Aaron", password: "knah#Aar:9*V"},
    {firstName: "Ernie", lastName: "Banks", password: "einre&Ban!10C="},
    {firstName: "Carl", lastName: "Yastrzemski", password: "lrac"},
    -- etc. --
]; */
