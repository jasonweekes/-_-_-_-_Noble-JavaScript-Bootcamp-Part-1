// 05.01 Lab Exercises
// LOOPS & ARRAYS
/*
1. Write a for loop that makes the following array:

    `[3, 5, 7, 9, 11, 13, 15, 17, 19, 21]`

2. Write a for loop that makes the following array:

    `[100, 80, 60, 40, 20, 0, -20, -40, -60, -80, -100]`

3. Given an array of numbers, `nums`, use a for loop to add up all the numbers. Save the total to a variable, `sum`.

    ```
        let nums = [154, 236, 314, 467, 532, 689, 703];
        let sum = 0;
    ```

4. Given an array of mixed numbers, 'num-like strings' and fruits, add up the nums and 'num-like strings'. This requires you to ignore the fruits and to convert the 'num-like strings' to actual numbers. Hint: You need the `Number()` method for this:

```
    const mixedBag = [93, 67, 'banana', '87', '189', 'cherry', 211, 67, 'kiwi'];
```
24. One more example of looping an array with if-else logic:

- Given an array of **veggies**. 
- If the vegetable starts with **c**, put it in the **juice** array. 
- Else, put it in the **salad** array. 
- Each time through the loop, save the current vegetable, **veggies[i]**, as **veg**
- Then use **veg[0]** to get the first letter of the vegetable.

Start by setting up the arrays: one full of veggies, the others empty:
```
    const veggies = ['lettuce', 'tomato', 'carrot', 'celery', 'onion', 'cucumber', 'radish', 'kale', 'beet'];
    const juice = [];
    const salad = [];
```
Loop through the array and subject each item to the test. 
Push each item into the array where it belongs:
```
    for(let i = 0; i < veggies.length; i++) {
        let veg = veggies[i];
        if(veg[0] == 'c') {
            juice.push(veg);
        } else {
            salad.push(veg);
        }
    }
    console.log(juice);
    console.log(salad);
```

// 10 minute Challenge : looping an array and applying if-else logic to each item in array
// Given an array of `veggies`. 
// if the item starts with `c`, put it in the `juice` array. 
// else, put the item in the `salad` array. 

// Start by setting up the arrays: one full of veggies, the others empty:
const veggies = ['lettuce', 'tomato', 'carrot', 'celery', 'onion', 'cucumber', 'radish', 'kale', 'beet'];
const juice = [];
const salad = [];
// log third item in array, and then log its first character:
console.log('third item in array', veggies[2]); // carrot
console.log('first char of third item', veggies[2][0]); // c

for(let i = 0; i < veggies.length; i++) {
    let veg = veggies[i]; // the current veggie
    let firstChar = veg[0];
    if(firstChar == 'c') {
        juice.push(veg);
    } else {
        salad.push(veg);
    }
}
console.log('juice', juice); 
// ['carrot', 'celery', 'cucumber']
console.log('salad', salad);
// ['lettuce', 'tomato', 'onion', 'radish', 'kale', 'beet']

// Find the missing number in a given integer array of 1 to 100

// make the array from 1-100 
// splice out a random value
// find the missing number
*/
let nums = [];
for(let i = 1; i <= 100; i++) {
    nums.push(i);
}
let r = Math.floor(Math.random() * 100);
nums.splice(r, 1);
r = 0;
console.log('nums', nums);

for(let i = 0; i < nums.length-1; i++) {
    if(nums[i]+1 != nums[i+1]) {
        console.log('missing number', nums[i]+1);
    }
}

//  Find a duplicate number in an array of integers
// add a duplicate number to nums
r = Math.floor(Math.random() * 99);
let arrNum = nums[r];
let i = Math.floor(Math.random() * 100);
nums.splice(i, 0, arrNum); // add rand num at rand index
console.log('nums', nums);
console.log('r', r);
console.log('i', i);

for(let i = 0; i < nums.length-1; i++) {
    if(nums[i]+1 != nums[i+1]) {
        console.log('missing number', nums[i]+1);
    }
}

for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
        if(i != j && nums[i] == nums[j]) {
            console.log(nums[i]);
        }
    }
}

// scramble the array
nums.sort(a, b) {
    return a - b * - 0.5;
}
console.log(nums[i]);

