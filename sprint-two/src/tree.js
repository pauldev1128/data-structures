var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // let bool = false;
  // let findTarget = function(newTree){
  //   if(target === newTree.value){
  //      bool = true;
  //   } if(newTree.children.length){
  //     for(let i  = 0; i < newTree.children.length; i++){
  //       findTarget(newTree.children[i]);
  //     }
  //   }
  // }
  // findTarget(this);
  // return bool;

  if(target === this.value){
    return true;
  }

  for (let i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }
    return false
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
