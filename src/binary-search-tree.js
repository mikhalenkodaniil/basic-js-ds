
//БЫЛО БЕЗ КОММЕНТАРИЕВ:
// const { NotImplementedError } = require('../extensions/index.js');


//БЫЛО БЕЗ КОММЕНТАРИЕВ:
// const { Node } = require('../extensions/list-tree.js');






/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    add(value){
        if(this.value == value) return;
        if(value < this.value){
            this.addLeft(value);
        } else{
            this.addRight(value);
        }
    }
    addLeft(value){
        if(this.left){
            return this.left.add(value);
        }
        this.left = new TreeNode(value)
    }
    addRight(value){
        if(this.right){
            return this.right.add(value);
        }
        this.right = new TreeNode(value)

    }
}

class BinarySearchTree {
    constructor(){
        this.root = undefined;
    }

  root() {
    console.log(this.root);
    return this.root;
  }

  add(value) {
    if(this.root){
        return this.root.add(value);
    }
    this.root = new TreeNode(value);
  }

  has(value) {
    let current = this.root;
    while(true){
        if(current === undefined){ return false;}
        if(current.value == value) {return true;
    }
    if (value < current.value){
        current = current.left;
    }
    if (value > current.value){
        current = current.right;
    }
    }
  }

  find(value) {
    let current = this.root;
    while(true){
        if(current === undefined){ return null;}
        if(current.value == value) {return current;
    }
    if (value < current.value){
        current = current.left;
    }
    if (value > current.value){
        current = current.right;
    }
    }
  }

  remove(value) {
    let current = this.root;
    while(true){
        if(current === undefined){ return null;}
        if(current.left.value == value) {
            current.left = undefined;
            return;
    }
    if(current.right.value == value) {
        current.right = undefined;
        return;
}
    if (value < current.value){
        current = current.left;
        k = 1;
    }
    if (value > current.value){
        current = current.right;
        k = 2;
    }break;
    }
  }

  min(){
    let current = this.root;
    while(true){
    if (current.left){
        current = current.left;
    } else return current.value;
    }
  }

  max() {
    let current = this.root;
    while(true){
    if (current.right){
        current = current.right;
    } else return current.value;
    }
  }
}
//Tests
// const tree = new BinarySearchTree();
// tree.add(27);
// tree.add(14);
// tree.add(35);
// tree.add(10);
// tree.add(19);
// tree.add(31);
// tree.add(42);
// console.log(tree);
// console.log (tree.remove(14));
// console.log(tree);


//БЫЛО БЕЗ КОММЕНТАРИЕВ:
// module.exports = {
//   BinarySearchTree
// };