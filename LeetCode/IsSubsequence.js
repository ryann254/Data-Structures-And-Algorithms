function buildIndex(t) {
  const index = new Map(); // Use a map for efficient character lookup

  // Build index of characters in t
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!index.has(char)) {
      index.set(char, []);
    }
    index.get(char).push(i); // Store the positions of each character
  }

  return index;
}

function isSubsequence(s, t, index) {
  let tIndex = -1;

  // Iterate through each character in s
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If char is not found in index or there are no more occurrences of char after tIndex
    if (
      !index.has(char) ||
      index.get(char)[index.get(char).length - 1] <= tIndex
    ) {
      return false; // s is not a subsequence of t
    }

    // Binary search to find the next occurrence of char after tIndex
    const occurrences = index.get(char);
    let left = 0;
    let right = occurrences.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (occurrences[mid] <= tIndex) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // Update tIndex to the position of the next occurrence of char
    tIndex = occurrences[left];
  }

  return true; // s is a subsequence of t
}

// Example usage:
const t = 'ahbgdc';
const index = buildIndex(t);

// Check if each string s is a subsequence of t
const s1 = 'abc';
const s2 = 'axc';

console.log(isSubsequence(s1, t, index)); // Output: true
console.log(isSubsequence(s2, t, index)); // Output: false
