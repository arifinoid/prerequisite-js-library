// Predict Outcomes with Regression Functions in JavaScript

const prevResults = [
  { weekend: 0, temperature: 1, pies: 100 },
  { weekend: 0, temperature: 2, pies: 150 },
  { weekend: 1, temperature: 3, pies: 200 },
  { weekend: 1, temperature: 4, pies: 300 }
];

function calcDistance(data) {
  return Math.sqrt(
    data.reduce((acc, [init, test]) => acc + Math.pow(init - test, 2), 0)
  );
}

function calcNeighbors(results, { weekend, temperature }) {
  return results
    .reduce((acc, cur) => {
      let curCalc = calcDistance([
        [weekend, cur.weekend],
        [temperature, cur.temperature]
      ]);
      return [...acc, Object.assign({ dist: curCalc }, cur)];
    }, [])
    .sort((a, b) => (a.dist < b.dist ? -1 : a.dist > b.dist ? 1 : 0));
}

const [first, second, ...rest] = calcNeighbors(prevResults, {
  weekend: 1,
  temperature: 2
});

console.log((first.pies + second.pies) / 2);

// if we console.log ((first.pies + second.pies) / 2), we'll get the number of pies we should make for today. This process of finding an N number of closest neighbors and then finding the average between them is called regression. It's a simple but powerful way of predicting future events based on past events.
