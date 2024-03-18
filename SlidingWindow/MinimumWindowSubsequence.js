function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;

  // Initialize minSubLen => Infinity
  let minSubLen = Infinity;
  // Initialize index variables => indexS1 and indexS2 and minSubsequence
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = '';
  // Iterate over both strings
  for (let indexS1; indexS1 < sizeStr1; i++) {
    // If the str1[indexS1] === str2[indexS2] => increment both counters
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      // If we reach the end of str2 => Create a reverse loop
      if (indexS2 === sizeStr2) {
        // Initialize start and end to indexS1(decrement indexS2--).
        let start = indexS1;
        let end = indexS1;
        indexS2--;

        // Iterate over our current substring => If str1[start] === str2[indexS2]
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            // Decrement both counters
            indexS2--;
          }
          // Else decrement start only.
          start--;
        }
        // (increment start++)
        start++;

        // If the current substring length is shorter than minSubLen => store our current substring in minSubsequenc
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        // Set indexS1 = start and indexS2 = 0
        indexS1 = start;
        indexS2 = 0;
      }
    }
    // Else increment indexS1 only
    indexS1++;
  }
  // Return minSubsequence.
  return minSubsequence;
}
