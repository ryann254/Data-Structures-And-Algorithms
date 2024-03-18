function longestRepeatingCharacterReplacement(s, k) {
  // Initialize the variables => stringLen, start, lengthOfMaxSubstring
  // mostFreqChar and charFreq
  const strLen = s.length;
  let start = 0;
  let lengthOfMaxSubstring = 0;
  let mostFreqChar = 0;
  let charFreq = new Map();

  // Iterate over the string:
  for (let end = 0; end < strLen; ++end) {
    // If the character is in the charFreq => increment++
    if (charFreq.has(s[end])) {
      charFreq.set(s[end], charFreq.get(s[end]) + 1);
    } else {
      // Else add it the char and give it an occurrence of 1
      charFreq.set(s[end], 1);
    }

    // Update mostFreqChar
    mostFreqChar = Math.max(mostFreqChar, charFreq.get(s[end]));

    // If the number of replacements(k) has exceeded the limits,
    // move the start pointer by 1.
    if (end - start + 1 - mostFreqChar > k) {
      charFreq.set(s[start], charFreq.get(s[start]) - 1);
      start += 1;
    }

    // If the window is the longest so far, update current lengthOfMaxSubstring
    lengthOfMaxSubstring = Math.max(lengthOfMaxSubstring, end - start + 1);
  }
  return lengthOfMaxSubstring;
}
