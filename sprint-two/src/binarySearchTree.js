var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if(this.value < value){
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  } else {
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};


BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    // check if bigger than current val if y if n
    if (this.value > value && this.left) {
      return this.left.contains(value);
    } else if (this.value < value && this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */




