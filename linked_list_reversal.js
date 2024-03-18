export default function reverseLinkedList(head, k) {
  let previous = null;
  let current = head;
  let next = null;

  for (let i = 0; i < k; i++) {
    // temporarily store the next node
    next = current.next;
    // reverse the current node
    current.next = previous;
    // before we move to the next node, point previous to the current node
    previous = current;
    // move to the next node
    current = next;
  }

  return [previous, current];
}
