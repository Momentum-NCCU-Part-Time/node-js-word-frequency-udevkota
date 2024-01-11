const fs = require("fs");
const path = require("path");
const filePath = process.argv[2];

const STOP_WORDS = ["a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "i", "in", "is", "it", "its", "of", "on", "that", "the", "to", "were", "will", "with"];

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, "utf8", (err, data) => {
    console.log("Initial data read from file: ", data);
    if (err) {
      console.error("Error reading the file:", err);
      process.exit(1);
    } else {
      const arrOfStopWordsRemoved = data
        .toLowerCase()
        .trim()
        .replace(/[\.,?!]/g, "")
        .split(/[^\w"!?""]+/)
        .filter((word) => !STOP_WORDS.includes(word));

      console.log(arrOfStopWordsRemoved);
      // TODO: write code to count the words in the file
      // callback('Your word count results should be passed in to this callback') !!!!!!!!!!!! IDK
      let wordCount = {};
      //^Create an empty object to store uniqueWord key and frequency value
      arrOfStopWordsRemoved.forEach((element) => {
        wordCount[element] = (wordCount[element] || 0) + 1;
      });
      //^run through each element in the array and if the element(word) matches to a uniqueWord key in the wordCount Object, increase the frequency value by 1
      for (const uniqueWord in wordCount) {
        console.log(`${uniqueWord}: ${wordCount[uniqueWord]}`);
      }
      //^Iterate through the object to display uniqueWord key and frequency value
    }
  });
}

printWordFreq(filePath, (wordCount) => {
  console.log("The results from your word counts:", wordCount);
});

/*
PREP
P)
  1) remove all punctuation, get an array since typeof(data) is string
  2) Remove STOP_WORDS
  3) Make a counter and callback the function till the last element in the array 
*/

//WIP: Don't understand callbacks, need to fix removing punctuation
