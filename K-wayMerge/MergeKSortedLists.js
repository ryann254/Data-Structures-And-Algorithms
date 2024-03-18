// merge2Lists(head1, head2)
function merge2Lists(head1, head2) {
  // Initialize variables => dummy, prev
  let dummy = new LinkedListNode(-1);
  let prev = dummy;
  // Iterate through both lists and:
  while (head1 !== null && head2 !== null) {
    // If head1.data <= head2.data => prev.next = head1, head1 = head1.next
    if (head1.data <= head2.data) {
      prev.next = head1;
      head1 = head1.next;
    } else {
      // Else => prev.next = head2, head2 = head2.next
      prev.next = head2;
      head2 = head2.next;
    }
    // prev = prev.next
    prev = prev.next;
  }

  // If head1 !== null => prev.next = head1
  if (head1 !== null) prev.next = head1;
  // Else => prev.next = head2
  else prev.next = head2;
  // return dummy.next
  return dummy.next;
}

function mergeKLists(lists) {
  // Check if lists has elements in it
  if (lists.length > 0) {
    // If true => Iterate over the lists till we reach lists.length
    // Intialize step counter;
    let step = 1;
    while (step < lists.length) {
      // Iterate and merge the linked lists in pairs
      for (let i = 0; i < lists.length - step; i = i + step * 2) {
        // Merge lists in pairs
        // set result = list[i].head
        lists[i].head = merge2Lists(lists[i].head, lists[i + 1].head);
      }
      // set step counter *= 2;
      step *= 2;
    }
    // return lists[0].head
    return lists[0].head;
  }
  // Else: return;
  return;
}
