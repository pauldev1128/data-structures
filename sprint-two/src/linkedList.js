var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value);
    if(list.head === null){
      list.head = node;
      list.tail = list.head;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  }


  list.removeHead = function() {
    let remove = list.head;
    list.head = list.head.next;
    return remove.value;
  }

  list.contains = function(target) {
    let currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target){
        return true;
      } else {
        currentNode = currentNode.next;
      }
    };
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
