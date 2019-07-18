var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);
  instance.storage = {};
  instance.count1 = 0;
  instance.count2 = 0;
  return instance;
};

var stackMethods = {};
stackMethods.push = function(value){
  let keys = Object.keys(this.storage)
  storage[this.size()] = value
}

stackMethods.pop = function(value){
  
}

stackMethods.size = function(value){
  return Object.keys(this.storage).length
}