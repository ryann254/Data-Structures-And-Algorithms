// My Solution.
function minWindow(s, t) {
  if (t === '') {
    return '';
  }
  // Initialize varaibles
  const str1Len = s.length;
  const str2Len = t.length;
  let tCharFreq = new Map();
  let currentCharFreq = new Map();
  let left = 0;
  let right = 0;
  let required = str2Len;
  let current = 0;
  let res = [left, right];

  // Iterate all the chars in `t` and find out their frequencies
  for (let i = 0; i < str2Len; i++) {
    if (tCharFreq.has(t[i])) {
      tCharFreq.set(t[i], tCharFreq.get(t[i]) + 1);
    } else {
      tCharFreq.set(t[i], 1);
      currentCharFreq.set(t[i], 0);
    }
  }

  // Iterate over the `s` string and compare chars with the `t`
  while (right < str1Len) {
    // If the characters match increment the frequency in the
    // current window hash map.
    if (tCharFreq.has(s[right])) {
      currentCharFreq.set(s[right], currentCharFreq.get(s[right]) + 1);
      // If the frequency in our current window hash map matches the frequency
      // in our `t` hash map then increment current
      if (currentCharFreq.get(s[right]) === tCharFreq.get(s[right])) {
        current += 1;
        // If current === required, update res
        if (current === required) {
          res = [left, right];
        }

        // Since we've found all the characters of `t` in our current window.
        // Trim down our current window by moving the left pointer.
        // After each step update res, if current === required.
        while (current === required) {
          left += 1;
          if (currentCharFreq.has(s[left])) {
            currentCharFreq.set(s[left], currentCharFreq.get(s[left]) - 1);
            current -= 1;
          } else {
            res = [left, right];
          }
        }
      }
    }
    right++;
  }
  return s.slice(res[0], res[1]);
}

// Educative.io's Solution
function minWindow2(s, t) {
  if (t === '') {
    return '';
  }
  // Initialize the hashmaps
  let tHashMap = {};
  let currentWindowHashMap = {};

  // Iterate over the `t` string and store all chars with their
  // frequencies
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    tHashMap[c] = 1 + (tHashMap[c] || 0);
    currentWindowHashMap[c] = 0;
  }

  // Initialize pointers and other variables
  let left = 0;
  let subStringLen = Infinity;
  let subStringIndexes = [-1, -1];
  let current = 0;
  const required = Object.keys(tHashMap).length;
  for (let right = 0; right < s.length; right++) {
    const c = s.charAt(right);

    // Update our current window hash map if s[right] is a
    // char in `t`
    if (t.indexOf(c) !== -1) {
      currentWindowHashMap[c] = 1 + (currentWindowHashMap[c] || 0);
    }

    // Update current if the frequency in current window matches
    // frequency in tHashMap
    if (tHashMap[c] && currentWindowHashMap[c] === tHashMap[c]) {
      current += 1;
    }

    // If current === required then start minimizing our current window
    while (current === required) {
      // Update subStringLen and indexes
      if (right - left + 1 < subStringLen) {
        subStringIndexes = [left, right];
        subStringLen = right - left + 1;
      }

      // If the [left] is part of `t` string, decrement it's frequency in
      // current window hash map
      let leftChar = s.charAt(left);
      if (t.indexOf(leftChar) !== -1) {
        currentWindowHashMap[leftChar] -= 1;
      }

      // Update current;
      if (
        tHashMap[leftChar] &&
        tHashMap[leftChar] > currentWindowHashMap[leftChar]
      ) {
        current -= 1;
      }
      left += 1;
    }
  }
  return subStringLen !== Infinity
    ? s.slice(subStringIndexes[0], subStringIndexes[1] + 1)
    : '';
}

function main() {
  const s = ['PATTERN', 'LIFE', 'ABRACADABRA', 'STRIKER', 'DFFDFDFVD'];
  const t = ['TN', 'I', 'ABC', 'RK', 'VDD'];
  // minWindow(s[0], t[0]);
  for (let i = 0; i < s.length; i++) {
    console.log(
      `${i + 1}.\ts: ${s[i]}\n\tt: ${
        t[i]
      }\n\tThe minimum substring containing ${t[i]} is: ${minWindow2(
        s[i],
        t[i]
      )}`
    );
    console.log('-'.repeat(100));
  }
}

main();

// Educative Solution
