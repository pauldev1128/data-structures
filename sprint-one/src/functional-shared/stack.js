var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};
  instance.storage = {};
  extend(instance, stackMethods);
  return instance;
};

let extend = function(to, from){
  for (let key in from){
    to[key] = from[key];
  }
};


var stackMethods = {

  push: function(value){
    var keys = Object.keys(this.storage);
    var nextKey = keys.length === 0 ? 0 : Math.max.apply(null,keys)+1;
    this.storage[nextKey] = value;
  },

  pop: function(){
    if(this.size !== 0){
    let keys = Object.keys(this.storage);
    let lastKey = Math.max.apply(null, keys);
    let popped = this.storage[lastKey];
    delete this.storage[lastKey];
    return popped;
    } 
  },

  size: function(){
    return Object.keys(this.storage).length;
  }

};


