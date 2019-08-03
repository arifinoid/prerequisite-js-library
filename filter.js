// in JS function are values

const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" }
];

// const dogs = [];
// for (let i = 0; i >= animals.length; i++) {
//   if (animals.species === "dog") dogs.push(animals[i]);
// }

const isDog = animal => animal.species === "dog";
const dog = animals.filter(isDog);
console.log(dog);
