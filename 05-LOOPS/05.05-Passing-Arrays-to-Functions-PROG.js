// Lesson 05.05
// Passing Arrays to Functions 

// 1. Declare two arrays of strings:

// Write a function that takes in an array of nouns and adds article 'a' or 'an'
// to the beginning, so: 'apple' => 'an apple' ; 'banana' => 'a banana'
// function returns a new array of all the items of the input array, but w article
// input: ['apple', 'apricot', 'banana', 'blueberry'] =>
// output: ['an apple', 'an apricot', 'a banana', 'a blueberry']

// challenge: write algo and then code on how to add correct article in front of any noun
const VOWELS = 'aeiou';
let wrd = 'umbrella'; // => 'an umbrella'
wrd = 'T-Rex'; // => 'a T-Rex'
wrd = 'Alfa Romeo';
// on your own AM Challenge -- solve this code challenge
// no function, no loop (not yet, anyway) -- just do those 2 words
let firstLetter = wrd[0].toLowerCase(); // "u"
// check if word starts w vowel:
if(VOWELS.includes(firstLetter)) {
  console.log("an " + wrd); // vowel article is "an" (not "a")
} else { // first char is NOT a vowel; it's a consonant
  console.log("a " + wrd); // consonant article is "a" (not "an")
}

const fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 
'cherry', 'cherimoya', 'cranberry', 'elderberry', 'grape', 'grapefruit', 
'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 
'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];

const cars = ['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Dodge', 'Edsel', 
'Eagle', 'Fiat', 'Ford', 'Honda', 'Kia', 'Infiniti', 'Isuzu', 'Mazda', 'Nissan', 
'Opel', 'Porsche', 'Rolls Royce', 'Tesla', 'Toyota', 'Volvo'];

// using a for loop, apply the above algo to the provided arrays, fruits and cars
// result for each array should be a new array of same words w 'a' or 'an' in front
// still no function -- just wrap the above code in a loop
// DO NOT console.log the answers .. but rather accumulate results in a new array
// loop only ONE array at a time -- your loop should only work on one array
// so to process both arrays, run the loop twice

// loop fruits w for loop, each time through loop, log current fruit -- that's all
// let vowels = 'aeiou';
// const wordsArr = []; // new empty array to hold the results
// for (let i = 0; i < cars.length; i++) {
//   let word = cars[i];
//   let firstLetter = word[0].toLowerCase();
//   if(vowels.includes(firstLetter)) {
//     wordsArr.push("an " + word); // vowel article is "an" (not "a")
//   } else { // first char is NOT a vowel; it's a consonant
//     wordsArr.push("a " + word); // consonant article is "a" (not "an")
//   }
// }
// console.log(wordsArr);

// 2. Declare the function and assign it a parameter, **arr**:
function addArticle(wordsArr) {
  let vowels = 'aeiou';
  const articleWords = []; // new empty array to hold the results
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    let firstLetter = word[0].toLowerCase();
    if(vowels.includes(firstLetter)) {
      articleWords.push("an " + word); // vowel article is "an" (not "a")
    } else { // first char is NOT a vowel; it's a consonant
      articleWords.push("a " + word); // consonant article is "a" (not "an")
    }
  }
  return articleWords; // "export" the "answer"
} // end addArticle function  

// 9. Call the function twice, passing in a different array of strings each time. Save the return values to variables and log them:
// console.log('articleWords:', articleWords); // ERROR: articleWords is not defined
// console.log('vowels:', vowels); // ERROR: vowels is not defined
console.log(addArticle(fruits));

// a function is an input (parameter/argument) output (return value)
// if a function returns a value, save the function call equal to a variable
// to capture the return value, which is the answer / result of the function 
const fruitsWithArticles = addArticle(fruits);
console.log('fruitsWithArticles:', fruitsWithArticles);

const carsWithArticles = addArticle(cars);
console.log('carsWithArticles:', carsWithArticles);

// calculate area of all the 3 rooms of a house:
function calcArea(L, W) {
  return L * W;
}

let livingRoomArea = calcArea(17,12); // 204
console.log('livingRoomArea:', livingRoomArea);

let masterBedroom = calcArea(18,15); // 270
console.log('masterBedroom:', masterBedroom);

let kitchen = calcArea(10,14); // 140
console.log('kitchen:', kitchen);

let totalHouseArea = livingRoomArea + masterBedroom + kitchen;
console.log('totalHouseArea:', totalHouseArea);

const roomDimensions1 = [ [17,12], [18,15], [10,14], [16,10], [13,9], [14,10], [17,13] ];
const roomDimensions2 = [ [22,15], [20,14], [10,17], [16,12] ];

// finish this function which accepts an array of arrays, 
// each child array being a 2-item array of 2 numbers, length and width [L,W]
function calcHouseArea(roomDimsArr) {
  // loop it and calc area of each of the several rooms as [L,W]
  // return the area of the entire house as one number 
}

let houseArea = calcHouseArea(roomDimensions); 
console.log(houseArea); // 

// function #2: find target number in array

// This next function has not just an array parameter, but also a number param. The function loops through the array, looking for the number. 
/*
- If the number is found, the function returns the index. 
- If the number is NOT found, the function returns -1. 
*/

// 10. Declare an array of numbers, followed by a function:

const numsArr = [5, 7, 9, 12, 14, 16, 20, 25, 30, 40, 50];

// 11. Write the function with two parameters.

  // 12. Iterate the array with a for loop:

    // 13. Check if the current array item equals the target number, and if it does, return the index:

  // 14. If the loop ends without finding the target number, return -1:

// 15. Call the function. The function returns a value, so set the call equal to a variable to "capture" the return value:

let find9;
console.log(find9);  // 3

let find8; 
console.log(find8);  // -1

// 16. Instead of just returning the index, let's return a string, specifying the number being looked for and where it was found. Do this as a new function:

let find25;
console.log(find25);  // 25 found at index 7

let find250; 
console.log(find250);  // 250 not found

// function #3: check array to see if all numbers are even
/*
Let's try one more function that takes an array for its argument. The function checks each number to see if it is odd or even. 
- If all numbers are even, the function returns true. 
- If an odd number or float are found, the function returns false.
*/

// 17. Declare three arrays of numbers:
let nums1 = [2, 4, 6, 8, 10];

// 18. Write a function that expects an array to be passed to it:

  // 19. Have the function iterate over the array:

    // 20. Each time through the loop, run an if statement that uses the modulo operator (%) to divide the current number by 2. If the reminder is not equal to (!=) 0, the number is *not* even, so return false:

  // 21. If the loop ends without finding a non-even number, all numbers in the array must be even, so return true:

// 22. Call the function three times, once for each array; save the return value to a variable and log it:

let allEven1;
console.log('allEven1', allEven1); // true

// END Lesson 05.05
// NEXT: Lab 05.05
// Lesson 05.06

