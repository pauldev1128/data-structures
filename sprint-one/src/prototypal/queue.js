var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    let instance = Object.create(queueMethods);
    instance.storage = {};
    instance.count1 = 0;
    instance.count2 = 0;
    return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.count1] = value;
  this.count1++;
}

queueMethods.dequeue = function(){
  let shifted = this.storage[this.count2];
  delete this.storage[this.count2];
  this.count2++;
  return shifted;
}

queueMethods.size = function(){
  return Object.keys(this.storage).length
}