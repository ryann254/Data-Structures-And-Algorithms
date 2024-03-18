import LinkedList from '../linked_list';

// Reverse the sublist from left to right
function reverseLinkedList(head, left, right) {
  // Initialize variables => prev, curr and next
  let next = null,
    prev = null,
    curr = head;
  // Iterate over the list while swapping pointers.
  while (left <= right && curr) {
    next = curr.next;
    curr = prev;
    prev = curr;
    curr = next;
  }
  // return the reversed list
  return prev;
}

function reverseLinkedListII(head, left, right) {
  // Initialize variables => lpn, right_n, revered_head, curr, counter.
  let lpn = null,
    right_n = null,
    revered_head = null,
    curr = head;

  let counter = 1;
  // Iterate over the linked list using curr:
  // If counter < left && curr => lpn = curr.
  while (counter < left && curr) {
    lpn = curr;
    curr = curr.next;
    counter++;
  }
  // If curr !== null, rpn = curr && counter <= right && rpn
  if (curr) {
    let rpn = curr;
    while (counter <= right && rpn) {
      // right_n =  rpn, rpn = right_n.next, counter++
      right_n = rpn;
      rpn = right_n.next;
      counter++;
    }

    // if (right_n) => reverse the sublist
    if (right_n) {
      revered_head = reverseLinkedList(curr, left, right);
    }

    // if (lpn) => connect it to the head of our sublist
    if (lpn) {
      lpn.next = revered_head;
    }

    // Iterate the sublist to get the last node and update it's next pointer to point to rpn
    if (rpn) {
      let temp = revered_head;
      while (temp !== null) {
        temp = temp.next;
      }
      temp.next = rpn;
    }
  }
  // if (lpn) => head
  if (lpn) {
    return head;
  } else {
    // Else => reversed head.
    return revered_head;
  }
}
