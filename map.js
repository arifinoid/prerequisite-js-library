// const animals = [
//   { name: "Fluffykins", species: "rabbit" },
//   { name: "Caro", species: "dog" },
//   { name: "Hamilton", species: "dog" },
//   { name: "Harold", species: "fish" },
//   { name: "Ursula", species: "cat" },
//   { name: "Jimmy", species: "fish" }
// ];

// const names = animals.map(animal => animal.name);

// // let names = [];
// // for (let i = 0; i < animals.length; i++) {
// //   names.push(animals[i].name);
// // }
// console.log(names);

// ---------------------

// const map = (arr, func) => {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const result = func(arr[i]);
//     newArray.push(result);
//   }

//   return newArray;
// };

const map = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);

console.log(map([1, 2, 3], x => x * 2)); //should be [2,4,6]
console.log(map([5, 6, 7], x => -x)); //should be [-5,-6,-7]
console.log(map(["a", "b", "c"], x => x.toUpperCase())); //should be ["A","B","C"]
