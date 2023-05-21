// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// Pseudocode:
// 1. Calculate the length of the word
// 2. Find the middle index by dividing length by 2
// 3. Use an if statement to return 1 middle index if odd and 2 indexes if even

function getMiddle(word) {
  let length = word.length;
  let middleIndex = Math.trunc(length/2);
  
  if (length % 2 === 0) {
return word.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return word.charAt(middleIndex);
  }
}
