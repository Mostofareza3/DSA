class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the front of the list
  addFront(data) {
    const newNode = new Node(data, null, this.head);
    if (this.head !== null) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode; // If the list was empty, head and tail are the same
    }
    this.head = newNode;
    this.size++;
  }

  // Add a node to the end of the list
  addEnd(data) {
    if (this.head === null) {
      this.addFront(data);
    } else {
      const newNode = new Node(data, this.tail, null);
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  // Insert at index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false; // Invalid index
    }

    if (index === 0) {
      this.addFront(data);
      return true;
    }

    if (index === this.size) {
      this.addEnd(data);
      return true;
    }

    const newNode = new Node(data);
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
    return true;
  }

  // Print list data from front to back
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Print list data from back to front
  printReverse() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}


const dll = new DoublyLinkedList();
dll.addFront(10);
dll.addEnd(20);
dll.insertAt(15, 1); // Insert 15 at index 1

dll.printListData(); // Prints 10, 15, 20
dll.printReverse();  // Prints 20, 15, 10
