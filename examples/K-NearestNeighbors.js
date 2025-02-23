function determineFruit({ size, redness }) {
  const fruit = [
    { name: "grape", size: 1, redness: 0 },
    { name: "orange", size: 2, redness: 1 },
    { name: "grapefruit", size: 3, redness: 2 }
  ];

  const { name } = fruit.reduce(
    (prev, cur) => {
      let curCalc = calcDistance([
        [size, cur.size],
        [redness, cur.redness]
      ]);
      console.log(curCalc);
      return prev.dist < curCalc ? prev : { name: cur.name, dist: curCalc };
    },
    {
      name: fruit[0].name,
      dist: calcDistance([
        [size, fruit[0].size],
        [redness, fruit[0].redness]
      ])
    }
  );
  return `This is most likely a ${name}`;
}

function calcDistance(data) {
  return Math.sqrt(
    data.reduce((acc, [init, test]) => acc + Math.pow(init - test, 2), 0)
  );
}

console.log(determineFruit({ size: 2, redness: 2 }));

// k-nearest neighbors or KNN
// The metric we're using to calculate the distance between our items is called the EUCLIDEAN DISTANCE. This formula is to subtract the same features of our mystery item against the controlled fruit features. To then take this to the power of two and add it to the other features doing the same thing.

// Picking the right features is important when using the KNN algorithm to classify an item and our algorithm becomes smarter as we add more features to calculate distance. Also, ideally, we would not just use the one closest neighbor to guess what the mystery fruit is. The more controlled data points and features you have to work with the better.

// no magic number, sqrt(N) number of neighbor
