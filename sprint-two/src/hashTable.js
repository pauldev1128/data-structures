

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined){
    this._storage[index] = [[k,v]];
  } else if (this._storage[index].length){
    for(let i = 0; i < this._storage[index].length; i++){
      if(this._storage[index][i][0] === k){
        this._storage[index][i][1] = v;
      }
    }
  }
  else {
    this._storage[index].push([k,v])
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage[index];
  for(let i = 0; i < storage.length; i++){
    if(storage[i][0] === k){
      return storage[i][1];
    } 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


