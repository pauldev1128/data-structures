var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};
  instance.storage = {};
  instance.count1 = 0;
  instance.count2 = 0;
  _.extend(instance, queueMethods);
  return instance;
};



var queueMethods = {
  enqueue: function(val){
    // var keys = Object.keys(this.storage)
    // var nextKey = keys.length === 0 ? 0 : Math.max.apply(null,keys)+1;
    this.storage[this.count1] = val;
    this.count1++
  },

  dequeue: function(){
    let shifted = this.storage[this.count2];
    delete this.storage[this.count2];
    this.count2++
    return shifted;
  },

  size: function(){
    return Object.keys(this.storage).length
  }

};


