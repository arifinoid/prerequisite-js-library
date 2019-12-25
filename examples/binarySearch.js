// Refactor a Linear Search into a Binary Search

const numbers = [
  1,
  2,
  14,
  19,
  20,
  1,
  3,
  6,
  14,
  17,
  3,
  6,
  16,
  18,
  19,
  2,
  10,
  11,
  16,
  18,
  1,
  6,
  7,
  13,
  18,
  1,
  7,
  8,
  15,
  20,
  4,
  6,
  9,
  11,
  17,
  9,
  11,
  14,
  16,
  19,
  1,
  2,
  200,
  9,
  18,
  12,
  14,
  15,
  16,
  18
];

// The big O notation is O(n) which represents linear time
// Once for each element in the array

// Big O represents the worst case scenario. With our current search function, because the number 200 was towards the end of the array, it took us 43 iterations until we found the number.

// const search = (list, item) => {
//   let hasItem = null;
//   let counter = 0;

//   for (let i of list) {
//     counter++;
//     if (i === item) {
//       hasItem = true;
//       break;
//     }
//   }

//   console.log(counter);
//   return hasItem;
// };

// console.log(search(numbers, 200));

// This is relatively fast, with just a small sample size. What if our list had 1,000 items, or 10,000, or even a million? The worst case scenario is, our program would take one million loops until it found our item. This has some real performance issues as it grows larger.

// Again, our algorithm grows linearly, or big O notation O to the number of items, with each item added to the list. Let's begin to refactor our function. First thing we'll do is sort our items from lowest to greatest.

const search = (list, item) => {
  const sorted = list.sort((a, b) => a - b);

  let low = 0;
  let high = sorted.length;
  let counter = 0;

  while (low <= high) {
    counter++;
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    // console.log(counter);
    if (guess === item) return true;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }

  //   console.log(counter);
  return null;
};

console.log(search(numbers, 200));

// Logs are the flip of exponentials. When working with running time and big O notation, log always means log-two. Since we have eight items in our array, our search function will take at most just three iterations to find the answer. Though some might take four, because of our rounding down to a whole number is not exact.

// O(log n)
// 2^3 = 8
// 2^10 = 1024
// 2^20 = 1 million

// The true power of binary search and log time specifically is when our list grows. At 1,000 items, we only need about 10 iterations. At a million items, we only need around 20 at most.
