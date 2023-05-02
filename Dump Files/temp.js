class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // insert a new node into the tree
    insert(value) {
      const newNode = { value, left: null, right: null };
  
      if (!this.root) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
  
        while (true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              break;
            } else {
              currentNode = currentNode.left;
            }
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              break;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
    // search for a node with the given value
    contains(value) {
      let currentNode = this.root;
  
      while (currentNode) {
        if (value === currentNode.value) {
          return true;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
  
      return false;
    }
    // delete a node with the given value
    delete(value) {
      let parentNode = null;
      let currentNode = this.root;
  
      while (currentNode && currentNode.value !== value) {
        parentNode = currentNode;
  
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
  
      if (!currentNode) {
        return;
      }
  
      if (!currentNode.left && !currentNode.right) {
        if (!parentNode) {
          this.root = null;
        } else if (currentNode === parentNode.left) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else if (!currentNode.left || !currentNode.right) {
        const childNode = currentNode.left || currentNode.right;
  
        if (!parentNode) {
          this.root = childNode;
        } else if (currentNode === parentNode.left) {
          parentNode.left = childNode;
        } else {
          parentNode.right = childNode;
        }
      } else {
        const successor = this.findSuccessor(currentNode);
  
        this.delete(successor.value);
  
        currentNode.value = successor.value;
      }
    }
    // find the node with the smallest value in the right subtree of the given node
    findSuccessor(node) {
      let currentNode = node.right;
      let successor = currentNode;
  
      while (currentNode) {
        successor = currentNode;
        currentNode = currentNode.left;
      }
  
      return successor;
    }
  
    // convert the tree to an array
    toArray() {
      const result = [];
  
      this.traverse(node => {
        result.push(node.value);
      });
  
      return result;
    }
    // perform an in-order traversal of the tree, calling the given function on each node
    traverse(fn) {
      function inOrder(node) {
        if (node) {
          inOrder(node.left);
          fn(node);
          inOrder(node.right);
        }
      }
  
      inOrder(this.root);
    }
  }

  const numberArray = [6, 5, 7, 8, 4, 5, 6, 9, 10];

  // Step 1
  const binarySearchTree = new BinarySearchTree();
  
  // Step 2
  for (const element of numberArray) {
    // Step 2a
    if (!binarySearchTree.contains(element)) {
      binarySearchTree.insert(element);
    }
  }
  
  // Step 4
  binarySearchTree.delete(5);
  binarySearchTree.delete(8);
  binarySearchTree.delete(9);
  binarySearchTree.delete(10);
  
  // Step 6
  console.log(binarySearchTree.toArray())