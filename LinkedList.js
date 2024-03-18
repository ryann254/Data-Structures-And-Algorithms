class ListNode {
  constructor(data) {
    this.data = data; // the data the node stores
    this.next = null; // a reference to the next node in the list.
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  addFirst(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addLast(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      // If the list is empty, make the new node at the head
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  deleteFirst() {
    if (this.head === null) {
      console.log('Operation not possible, linkedlist is empty!');
    } else {
      this.head = this.head.next;
    }
  }

  deleteLast() {
    if (this.head === null) {
      console.log('Operation not possible, linkedlist is empty!');
      return;
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  containsData(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        console.log(true);
        return;
      }
      current = current.next;
    }
    console.log(false);
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === data) {
        console.log(index);
        return;
      }
      current = current.next;
      index++;
    }
    console.log(-1);
  }
}

const myList = new LinkedList();
myList.addFirst(1);
myList.addFirst(2);
myList.addFirst(3);
myList.addLast(4);
myList.indexOf(1);
myList.containsData();
myList.print();

function removeNthLastNode(head, n) {
  // Set the left and right pointers to the head of the linked list
  let left = head;
  let right = head;

  // Move the right pointer forward `n` times
  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  // If right is null then we've reached the end of the linked list.
  if (!right) {
    return head.next;
  }

  // Move both the right and left pointers forward till we reach the end of the
  // linked list
  while (right.next !== null) {
    left = left.next;
    right = right.next;
  }
  // Link the left pointer node to the next next node
  left = left.next.next;
  return head;
}
