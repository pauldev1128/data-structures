class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count1 = 0;
    this.count2 = 0;
  }

  enqueue (value){
    this.storage[this.count1] = value;
    this.count1++;
  }

  dequeue (){
    let shifted = this.storage[this.count2];
    delete this.storage[this.count2];
    this.count2++;
    return shifted;
  }

  size (){
    return Object.keys(this.storage).length;
  }
}
