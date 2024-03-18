function swapPairs(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const firstNode = head;
    const secondNode = head.next;

    prev.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    prev = firstNode;
    head = firstNode.next;
  }

  return dummy.next;
}
