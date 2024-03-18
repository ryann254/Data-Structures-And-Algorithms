export function isHappyNumber(n) {
  // Initialize the slow pointer with the input number
  let slow = n;
  // Initialize the fast pointer with the square of the input number's digits
  let fast = sumOfSquaredDigits(n);
  // Repeat the process while checking if the fast pointer is equal to 1 => TRUE and
  // fast pointer is not equal to the input number => FALSE.
  while (fast > 1) {
    if (fast === n) {
      return false;
    }
    slow = fast;
    fast = sumOfSquaredDigits(fast);
  }

  return true;
}
