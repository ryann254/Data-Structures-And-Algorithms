import LinkedList from '../linked_list';
import LinkedListNode from '../linked_list_node';
import reversedLinkedList from '../linked_list_reversal';

function reverseKGroups(head, k) {
  // Initialize the variables and a dummy node at head.
  let dummy = new LinkedListNode(0);
  dummy.next = head;
  let ptr = dummy;
  // Iterate the linked list and inside the linked list
  while (ptr !== null) {
    let tracker = prt;

    // Check if k number of nodes are found
    for (let i = 0; i < k; i++) {
      // Else exit the inner and outer loop
      if (tracker === null) {
        break;
      }
      tracker = tracker.next;
    }
    // Else exit the inner and outer loop
    if (tracker === null) {
      break;
    }
    // 0 -> 3 -> 2 -> 1 -> 4 -> 5

    // If k number of nodes are found, reverse the group of nodes.
    const updatedNodes = reversedLinkedList(ptr.next, k);
    const previous = updatedNodes[0];
    const current = updatedNodes[1];
    // Reattach the reversed group to the original linked list
    const lastNodeOfReversedGroup = ptr.next;
    lastNodeOfReversedGroup.next = current;
    ptr.next = previous;
    ptr = lastNodeOfReversedGroup;
  }
  // return the reversed linked list.
  return dummy.next;
}
