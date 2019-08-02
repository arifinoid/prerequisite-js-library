let countDownFrom = num => {
  if (num === 0) return;

  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);

// output
// 10
// 9
// 8
// ...
// 1

let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" }
];

const makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(category => category.parent === parent)
    .forEach(
      category => (node[category.id] = makeTree(categories, category.id))
    );
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));

// output
// {
//   animals: {
//     mammals: {
//       dogs: {
//         chihuahua: null;
//         labrador: null;
//       }
//       cats: {
//         persian: null;
//         siamese: null;
//       }
//     }
//   }
// }
