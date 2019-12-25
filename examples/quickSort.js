// D&C algorithm that uses recursion
// less than array
// pivot
// greater than array
// O(n) * O(log n) = O(n log n) -> best and average case
// O(n) * O(n) = O(n^2) -> worse case

const numbers = [5, 6, 2, 4, 3, 1];

const quickSort = arr => {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  let less = [];
  let greater = [];

  for (i in arr) {
    if (i != pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(numbers));

// use '<' in line 21 for desc orders

// In recursion, it's first in last out
