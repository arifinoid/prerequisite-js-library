const words = require("an-array-of-english-words");

// {
//   c: 1;
//   i: 1;
//   n: 1;
//   e: 1;
//   m: 1;
//   a: 1;
// }

const countOccurrences = arr =>
  arr.reduce(
    (acc, str) => ({
      ...acc,
      [str]: acc[str] ? acc[str] + 1 : 1
    }),
    {}
  );

const hasSameLetterCount = (word1, word2) => {
  const word1Count = countOccurrences(word1.split(""));
  const word2Count = countOccurrences(word2.split(""));

  return (
    Object.keys(word1Count).length === Object.keys(word2Count).length &&
    Object.keys(word1Count).every(
      letter => word1Count[letter] === word2Count[letter]
    )
  );
};

const findAnagrams = (word, allWords) => {
  return allWords
    .filter(entry => hasSameLetterCount(word, entry))
    .filter(anagram => anagram !== word);
};

console.log(findAnagrams("cinema", words));

/*
    Expected output: ['iceman', 'anemic']
*/
