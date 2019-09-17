// let name = "budi";
// const greet = () => console.log(`hello ${name}!`);

// name = "suci";
// greet();

// const init = () => {
//   return name => console.log(name);
// };

// let showName = init();

// showName("Budi");

// const greet = time => {
//   return name => {
//     console.log(`Hello, ${name}. Good ${time}`);
//   };
// };

// let morning = greet("Morning");

// morning("Matt");

let add = (() => {
  let counter = 0;
  return () => {
    return console.log(++counter);
  };
})();

add();
add();
add();
