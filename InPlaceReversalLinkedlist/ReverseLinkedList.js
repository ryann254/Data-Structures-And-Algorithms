import LinkedList from './linked_list.js';
import LinkedListNode from './linked_list_node.js';

export function reverse(head) {
  // Initialize pointers => prev, next = null and current = this.head
  let prev = null,
    next = null,
    current = head;
  // Traverse the linked list while updating the pointer:
  while (current !== null) {
    // Store the next node before reversing the pointer
    next = current.next;
    // 2. Reverse the current node's pointer => current.next = prev
    current.next = prev;
    // 3. Update all the pointers: prev = current, current = next.
    prev = current;
    current = next;
  }
  // 4. Set the new head of the list: this.head = prev.
  head = prev;
  // 5. return the reversed linkedlist.
  return head;
}
