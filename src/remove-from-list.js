// Было без комментариев:
const { NotImplementedError } = require('../extensions/index.js');



const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


function removeKFromList(l, k) {
  while(l.value === k) {
    l = l.next;
  }
  let tmp = l;
  while(tmp){
    if (tmp.value == k){
      tmp.value = tmp.next.value;
      tmp.next = tmp.next.next;
      continue;
    }
    tmp=tmp.next;
  }
  return l;
}




// Было без комментариев:
module.exports = {
  removeKFromList
};


// проверял на примере:
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// let k = 3;
// removeKFromList(list, k);

// function printList(list) {

//   console.log(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }

// }
// printList(list);
// console.log(list);
