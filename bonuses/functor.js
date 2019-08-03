// Functor implements map

const stringFunctor = (value, fn) => {
  let chars = value.split("");
  return chars
    .map(char => {
      return String.fromCharCode(fn(char.charCodeAt(0)));
    })
    .join("");
};

const plus1 = value => value + 1;
const minus1 = value => value - 1;

[3, 4].map(plus1); // returns [4,5]
console.log(stringFunctor("ABC", plus1)); //  returns "BCD"
console.log(stringFunctor("XYZ", minus1)); // returns "WXY"
