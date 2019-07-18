var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count1 = 0;
  this.count2 = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count1] = value;
  this.count1++
}

Queue.prototype.dequeue = function(){
  let shifted = this.storage[this.count2];
  delete this.storage[this.count2];
  this.count2++;
  return shifted;
}

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}

