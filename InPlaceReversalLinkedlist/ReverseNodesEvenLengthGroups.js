function reverseEvenLengthGroups(head) {
  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
  // After 1st iteration: 1 -> 3 -> 2 -> 4 -> 5 -> 6
  // Initialize a pointer and groupLen tracker -> prev, groupLen
  let prev = head,
    groupLen = 2;
  // Traverse the linked list and set new pointer -> node, numNodes
  while (prev.next !== null) {
    let node = prev,
      numNodes = 0;
    // Create anot her loop to iterate through our current group
    for (let i = 0; i < groupLen; i++) {
      // If we reach the end of the linked list exit the loop
      if (node.next === null) break;
      numNodes++;
      node = node.next;
    }

    if (numNodes % 2) {
      // Odd number of nodes detected
      // Else -> skip the nodes -> prev = node.
      prev = node;
    } else {
      // If numNodes % 2 === 0 -> Reverse current nodes
      let reverse = node.next,
        curr = prev.next,
        currNext = null;
      for (let j = 0; j < numNodes; j++) {
        currNext = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = currNext;
      }
      // Reattach the reversed group back to the original linked list
      let prevNext = prev.next;
      prev.next = node;
      prev = prevNext;
    }
    // Increment groupLen
    groupLen++;
  }
  // Return head
  return head;
}
