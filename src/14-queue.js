const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.arr = [];
    this.head = null;
    this.tail = null;

    this.length = 0;
  }

  get size() {
    return this.arr.length;
  }

  enqueue(element) {
    this.arr.push(element);
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return true;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return this.arr.shift();
  }
}

module.exports = Queue;
