// Было без комментариев:
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.items = [];
  }
  push(element) {
    this.items[this.items.length] = element;
    }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length-1];
  }
};


//тесты на примере
// let tests = new Stack();
// tests.push(1);
// tests.push(2);
// tests.push(3);
// tests.push(4);
// console.log(tests)
// console.log(tests.pop());
// console.log(tests);




// Было без комментариев:
module.exports = {
  Stack
};
