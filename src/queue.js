// Не было комментария:
const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class ListNode{
//   constructor(value){
//     this.value = value;
//     this.next = undefined;
//   }
//   add(value){
//     if(this.next){
//       return this.next.add(value);
//   }
//   this.next = new ListNode(value)
//   }

// }
class Queue {
  constructor(){
    this.head = undefined;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(this.head){
      return this.head.add(value);
  }
  this.head = new ListNode(value);
  }

  dequeue() {
    let k = this.head.value;
    this.head = this.head.next;
    return k;
  }
}
// Тест на примере:
// const test = new Queue();
// test.enqueue(1);
// test.enqueue(2);
// test.enqueue(3);
// test.enqueue(4);
// console.log (test.getUnderlyingList());

// Не было комментария:
module.exports = {
  Queue
};
