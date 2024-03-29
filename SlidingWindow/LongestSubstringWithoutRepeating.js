// Alternative and Shorter solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Initialize a set to keep track of characters in the current window
  const set = new Set();
  let maxLength = 0;
  let left = 0;

  // Iterate through the string with the right pointer
  for (let right = 0; right < s.length; right++) {
    // If the current character is already in the set, move the left pointer until the character is removed from the set
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    // Add the current character to the set
    set.add(s[right]);
    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  // Intialize the variables(window, subStringLen, etc)
  let windowStart = 0;
  let windowLength = 0;
  let uniqueChars = {};
  let subStringLen = 0;
  // Iterate over the string, storing our chars in a hashmap
  let i = 0;
  for (; i < str.length; i++) {
    const c = str.charAt(i);

    // If the current char is NOT in the hashmap then add it.
    if (!uniqueChars[c]) {
      uniqueChars[c] = i;
    } else {
      // Check if the previous occurrence of the element is before or after the windowStart
      // If it's before then calculate current window length and compare it the substring length.
      if (uniqueChars[c] >= windowStart) {
        windowLength = i - windowStart;
        if (subStringLen < windowLength) subStringLen = windowLength;

        // Start the next iteration one step ahead of the current index.
        windowStart = uniqueChars[c] + 1;
      }
      // Update the current element's index in the hashmap
      uniqueChars[c] = i;
    }
  }
  if (subStringLen < windowLength) subStringLen = windowLength;
  // return substringLen
  return subStringLen;
}

// Educative.io's Solution
var findLongestSubstring2 = function (str) {
  if (str.length == 0) return 0;

  let n = str.length;
  let windowStart = 0,
    longest = 0,
    windowLength = 0;

  let lastSeenAt = {};

  // Traverse str to find the longest substring
  // without repeating characters.
  let index = 0;
  for (; index < n; index++) {
    let val = str[index];

    // If the current element is not present in the hash map,
    // then store it in the hash map with the value as the current index.
    if (!(val in lastSeenAt)) lastSeenAt[val] = index;
    else {
      // If the current element is present in the hash map,
      // it means that this element may have appeared before.
      // Check if the current element occurs before or after `windowStart`.
      if (lastSeenAt[val] >= windowStart) {
        windowLength = index - windowStart;
        if (longest < windowLength) longest = windowLength;
        // The next substring will start after the last
        // occurence of the current element.
        windowStart = lastSeenAt[val] + 1;
      }

      // Update the last occurence of
      // the element in the hash map
      lastSeenAt[val] = index;
    }
  }

  // Update the longest substring's
  // length and starting index.
  if (longest < index - windowStart) longest = index - windowStart;

  return longest;
};

function main() {
  let str = [
    'abcabcbb',
    'pwwkew',
    'bbbbb',
    'ababababa',
    '',
    'ABCDEFGHI',
    'ABCDEDCBA',
    'AAAABBBBCCCCDDDD',
  ];

  for (let i = 0; i < str.length; i++) {
    console.log(i + 1 + '. \t Input String:', str[i]);
    console.log(
      '\t Length of longest substring:',
      findLongestSubstring(str[i])
    );
    console.log('-'.repeat(100));
  }
}

main();
