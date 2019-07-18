

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count1 = 0
  let count2 = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count1++
    storage[count1] = value;
  };

  someInstance.dequeue = function() {
    count2++;
    var popped = storage[count2];
    delete storage[count2];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
