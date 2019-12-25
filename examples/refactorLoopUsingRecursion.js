// const counter = () => {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// };

// INSTEAD OF USING FOR LOOPS, LETS CHANGE INTO RECURSION
const counter = n => {
  console.log(n);
  if (n === 10) {
    return;
  }
  return counter(n + 1);
};

counter(0);

// -------------------

const items = [
  [1, 2, 3],
  [4, 5, [1, 2, [1, 2, [3, 4, [46, 3, [6]]]]]]
];

const findSix = i => {
  let hasSix = "no!";
  i.forEach(a => {
    if (a === 6) {
      hasSix = "yes!";
    }

    if (Array.isArray(a)) {
      hasSix = findSix(a);
    }
  });

  return hasSix;
};

console.log(findSix(items));
