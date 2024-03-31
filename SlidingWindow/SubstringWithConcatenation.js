/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // Initialize the variables: wordLength, result, wordMap
  let wordLength = words[0].length,
    result = [],
    wordMap = new Map();
  // Iterate over words and store all the string with freq.
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  // Iterate over s while checking:
  for (let i = 0; i <= s.length - wordLength * words.length; i++) {
    // Initialize new variables: j = 0, substringMap
    let substringMap = new Map(),
      j = 0;
    // Iterate over words while checking:
    while (j < words.length) {
      // Extract the substring from
      const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
      // Check if it exists in wordMap: else break
      if (!wordMap.has(word)) break;
      // Add it to substringMap
      substringMap.set(word, (substringMap.get(word) || 0) + 1);
      // Check the substring's frequency: else break
      if (substringMap.get(word) > wordMap.get(word)) break;
      // Increment j++
      j++;
    }
    // If j === words.length: push i into result
    if (j === words.length) result.push(i);
  }
  return result;
};
