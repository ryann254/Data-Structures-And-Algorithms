import LinkedList from './linked_list.js';
import reverseLinkedList from './linked_list_reversal.js';

export function palindrome(head) {
  // Intialize the slow and fast pointers at the head of the linked list
  let slow = head,
    fast = head;
  // Traverse the linkedlist -> slow pointer moves by one node and the fast
  // pointer moves by two nodes.
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // When the fast pointer reaches the end of the array, the slow pointer
  // will be at the middle -> Reverse half the linked list and compare with
  // the other half.
  let lastHalf = reverseLinkedList(slow);
  let check = compareTwoHalves(head, lastHalf);
  reverseLinkedList(lastHalf);
  // If they match return TRUE
  if (check) {
    return true;
  }
  return false;
}

function compareTwoHalves(firstHalf, secondHalf) {
  while (firstHalf !== null && secondHalf !== null) {
    if (firstHalf.data !== secondHalf.data) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}
