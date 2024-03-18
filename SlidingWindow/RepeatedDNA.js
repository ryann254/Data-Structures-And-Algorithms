function findRepeatedSequences(s, k) {
  const n = s.length;

  if (n < k) {
    return new Set();
  }

  // Mapping of characters
  const mapping = new Map([
    ['A', 1],
    ['C', 2],
    ['G', 3],
    ['T', 4],
  ]);

  // Base value
  const a = 4;

  // Numeric representation of the sequence
  const numbers = new Array(n);
  for (let i = 0; i < n; i++) {
    numbers[i] = mapping.get(s[i]);
  }

  // store the hashValue;
  let hashValue = 0;

  // create a set to store unique hashValues
  const hashSet = new Set();
  // create a set to store repeated substrings
  const output = new Set();

  for (let i = 0; i < n - k + 1; i++) {
    if (i === 0) {
      // Calculate the hashValue
      for (let j = 0; j < k; j++) {
        hashValue += numbers[j] * Math.pow(a, k - j - 1);
      }
    } else {
      const previousHashValue = hashValue;
      hashValue =
        (previousHashValue - numbers[i - 1] * Math.pow(a, k - 1)) * a +
        numbers[i + k - 1];
    }

    // If hashValue is present in hashSet then it's a repeated substring,
    // store the characters in the output set.
    if (hashSet.has(hashValue)) {
      output.add(s.substring(i, i + k));
    }
    // Else add the hashValue to the hashSet
    hashSet.add(hashValue);
  }
}
