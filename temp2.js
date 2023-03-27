class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
   }
      this.length++;
    }
  }

  const list = new LinkedList();
  list.append(40);
  list.append(50);
  list.append(40);
  list.append(80);
  list.append(70);
  list.append(30);
  

  let current = list.head;
let previous = null;

while (current) {
  if (current.value === 40) {
    if (!previous) {
      // If the node to remove is the head of the list
      list.head = current.next;
    } else {
      // If the node to remove is not the head of the list
      previous.next = current.next;
      if (!current.next) {
        // If the node to remove is the tail of the list
        list.tail = previous;
      }
    }
    list.length--;
    break;
  }
  previous = current;
  current = current.next;
}