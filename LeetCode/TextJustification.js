/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  // Initiliaze variables: result, i, width, currLine
  let result = [],
    i = 0,
    width = 0,
    currLine = [];
  // Iterate over words while checking:
  while (i < words.length) {
    let currWord = words[i];
    // If width + words[i].length <= maxWidth
    if (width + currWord.length <= maxWidth) {
      // add the words[i] to currLine and increment width + 1, counter
      currLine.push(currWord);
      width += currWord.length + 1;
      i++;
    } else {
      // Else add extra spaces: spaces = maxWidth - width + currLine.length
      let spaces = maxWidth - width + currLine.length;
      // Initialize new variables: added, j
      let added = 0,
        j = 0;
      // Iterate over currLine while checking:
      while (added < spaces) {
        // if j >= currLine.length - 1: j = 0
        if (j >= currLine.length - 1) j = 0;

        currLine[j] += ' ';
        // increment j, added
        added += 1;
        j += 1;
      }
      console.log(currLine);
      // add currLine to result
      result.push(currLine.join(''));
      // Reset width = 0, currLine = []
      width = 0;
      currLine = [];
    }
  }
  // Iterate over currLine and add spacing between words
  for (word of currLine) {
    word += ' ';
  }
  // Add extra spaces to the end: currLine += ' '.repeat(maxWidth - width + 1)
  currLine[currLine.length - 1] += ' '.repeat(maxWidth - width + 1);
  // add currLine to result
  result.push(currLine.join(' '));

  return result;
};
