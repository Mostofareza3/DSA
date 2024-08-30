class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert_at_head(node) {
    // if head==Null
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  insert_at_tail(node) {
    if (this.size === 0) {
      this.insert_at_head(node);
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  insert_at_random_position(node, pos) {
    if (pos > this.size) {
      console.log("Invalid index");
      return;
    } else if (pos === 0) {
      this.insert_at_head(node);
    } else if (pos === this.size) {
      this.insert_at_tail(node);
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < pos) {
        previous = current;
        current = current.next;
        index++;
      }

      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
const head = new Node(5);
const a = new Node(10);
const b = new Node(15);
const c = new Node(20);
const d = new Node(30);
ll.insert_at_head(head);
ll.insert_at_tail(a);
ll.insert_at_tail(b);
ll.insert_at_tail(c);
ll.insert_at_random_position(d, 2);

ll.printListData();
