

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined){
    this._storage[index] = [[k,v]];
  }
  if(this._storage[index].length > 0){
    for(let i = 0; i < this._storage[index].length; i++){
      if(this._storage[index][i][0] === k){
        this._storage[index][i][1] = v;
      } else {
        this._storage[index].push([k,v])
      }
    }
  }
  if (this._storage[index].length === 0){
    this._storage[index].push([k,v])
  };
  // if(this._storage === undefined){
  //   this._storage.set(index,[[k,v]]);
  // } else{
  //   this._storage.set (index,v);
  // }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(let i = 0; i < this._storage[index].length; i++){
    if(this._storage[index][i][0] === k){
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(let i = 0; i < this._storage[index].length; i++){
   if(this._storage[index][i][0] === k)
    return this._storage[index].splice(i,1)
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


