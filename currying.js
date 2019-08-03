// const dragon = name => size => element =>
//   `${name} is a ${size} dragon that breathes ${element}!`;

const _ = require("lodash");

let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

dragon = _.curry(dragon);

const fluffykinsDragon = dragon("Fluffykins");
const tinyDragon = fluffykinsDragon("tiny");

console.log(tinyDragon("lightning"));

let dragons = [
  { name: "fluffykins", element: "lightning" },
  { name: "noomi", element: "lightning" },
  { name: "karo", element: "fire" },
  { name: "doomer", element: "timewarp" }
];

let hasElement = _.curry((element, obj) => obj.element === element);
let lightningDragons = dragons.filter(hasElement("lightning"));

console.log(lightningDragons);
