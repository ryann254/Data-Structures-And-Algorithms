export function reverseWords(sentence) {
  sentence = sentence.trim().replace(/  +/g, ' ');
  sentence = [...sentence];
  const strLen = sentence.length;

  // Reverse the entire sentence -> Create a helper function
  strRev(sentence, 0, strLen - 1);
  // Iterate over the reversed sentence and re-reverse word by word
  let start = 0;
  let end = 0;
  while (start < strLen) {
    while (end < strLen && sentence[end] !== ' ') {
      end += 1;
    }

    strRev(sentence, start, end - 1);
    start = end + 1;
    end += 1;
  }
  // Join characters to form a sentence
  return sentence.join('');
}

function strRev(str, startIndex, endIndex) {
  while (startIndex < endIndex) {
    let temp = str[startIndex];
    str[startIndex] = str[endIndex];
    str[endIndex] = temp;

    startIndex += 1;
    endIndex -= 1;
  }
  return str;
}
