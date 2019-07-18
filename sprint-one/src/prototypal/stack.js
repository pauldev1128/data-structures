// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   let instance = Object.create(stackMethods);
//   instance.storage = {};
//   // instance.count1 = 0;
//   return instance;
// };

// var stackMethods = {};
// stackMethods.push = function(value){
//   let keys = Object.keys(this.storage);
//   let nextKey = this.storage[keys] === 0 ? 0 : Math.max.apply(null,keys);
//   this.storage[nextKey] = value;
//   // this.storage[count1];
//   // this.count1++
// }

// stackMethods.pop = function(value){
//   let popped = this.storage[stackMethods.size()-1];
//   delete this.storage[stackMethods.size()-1];
//   // count1--;
//   return popped;
// }

// stackMethods.size = function(value){
//   return Object.keys(this.storage).length;
// }

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);
  instance.storage = {};
  instance.count1 = 0;
  return instance;
};

var stackMethods = {};
stackMethods.push = function(value){
  this.storage[this.count1] = value
  this.count1++
}

stackMethods.pop = function(){
  let popped = this.storage[this.count1-1];
  delete this.storage[this.count1-1];
  this.count1--;
  return popped;
}

stackMethods.size = function(value){
  return Object.keys(this.storage).length;
}