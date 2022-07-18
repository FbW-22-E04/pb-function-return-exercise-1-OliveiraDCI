//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  let eachWord = str.split(" ");
  let newArr = [];
  for (let i = 0; i < eachWord.length; i++) {
    newArr.push(eachWord[i][0].toUpperCase() + eachWord[i].slice(1));
  }
  return newArr.join(" ");
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  let wordsArr = str.split(" ");
  let wordLengthArr = [];
  let longestWord = "";
  for (let i = 0; i < wordsArr.length; i++) {
    wordLengthArr.push(wordsArr[i].length);
    if (wordLengthArr[i] > longestWord.length) longestWord = wordsArr[i];
  }
  return longestWord;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  let wordLengthArr = [];
  let longestCountryName = "";
  for (let i = 0; i < country_name.length; i++) {
    wordLengthArr.push(country_name[i].length);
    if (wordLengthArr[i] > longestCountryName.length)
      longestCountryName = country_name[i];
  }
  return longestCountryName;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
