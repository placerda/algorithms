#!/usr/bin/env node
"use strict"

class ArrayList {

  constructor(){
   this.list = [];
   this.size = 0;
  }

  getSize(){
   return this.size;
  }


  add(item){
    if (item.key){

      //empty list
      if (this.size == 0){
        this.list = [item];
        this.size++;
        return;
      }

      // binary search
      let l, r, m;
      l = 0;
      r = this.size-1;
      m = 0;
      do {
        if (this.list[m].key == item.key){
          return; // doesn't allow repeated items
        } else if (item.key < this.list[m].key){
          r = m;
        } else {
          l = m+1;
        }
        m = Math.floor((l+r)/2);
    } while (l < r);

      // expand
      if (this.size == this.list.length) this.double();

      // define which is lower (the new item or the middle)
      let lower;
      if (item.key > this.list[m].key){
        lower  = this.list[m];
        this.list[m] = item;
      } else {
        lower = item;
      }

      // shift right
      for (let i = this.size; i > m; i--){
        this.list[i] = this.list[i-1];
      }
      this.list[m] = lower;
      this.size++;


    } else {
      throw "object doesn't have a key";
    }
  }

 double(){
   let doubleList = new Array(this.list.length*2);
   for (let i = 0 ; i < this.list.length; i++){
      doubleList[i] = this.list[i];
   }
   this.list = doubleList;
 }

 binarySearch(key){
  let l, r, m;
  l = 0;
  r = this.size;
  do {
    m = Math.floor((l+r)/2);
    if (key == this.list[m].key){
      return m;
    } else if (key < this.list[m].key){
      r = m
    } else {
      l = m+1
    }
  } while (l < r);
  throw "item not found";
 }

 find(key){
   const pos = this.binarySearch(key);
   return this.list[pos];
 }

  remove(key){
    const pos = this.binarySearch(key);
    for (let i = pos; i < this.size-1; i++){
      this.list[i] = this.list[i+1];
    }
    this.size--;
  }



  toString() {
    let output = "";
    if (this.size > 0) output = output + JSON.stringify(this.list[0]);
    for (let i = 1; i < this.size; i++){
      output = output + ", " + JSON.stringify(this.list[i]);
    }
    return "["  + output + "]";
  }

}

// tests
try{
  let list = new ArrayList();

  console.log("add: {'key':1}, {'key':4}, {'key':2}, {'key':3}");
  list.add({'key':1});
  list.add({'key':4});
  list.add({'key':2});
  list.add({'key':3});


  console.log("remove(2)");
  list.remove(2);


  const aux = list.find(3);
    console.log("find(3): " + JSON.stringify(aux));

  // summary
  console.log("summary:");
  console.log("size: " + list.getSize());
  console.log("list: " + list.toString());

} catch (err){
  console.log(err);
  if (err.stack) console.log(err.stack);
}
