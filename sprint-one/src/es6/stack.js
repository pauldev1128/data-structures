class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push (value){
    this.storage[this.count] = value;
    this.count++;
  }

  pop (){
    let popped = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    return popped;
  }

  size (){
    return Object.keys(this.storage).length;
  }
}