#!/usr/bin/env node
"use strict"

class ArrayList {

  constructor(){
   this.list = new Array(1);
   this.size = 0;
  }

  getSize(){
   return this.size;
  }

  // o(n)+  (amortized)
  add(item){
    if (item.key){
      for (let i = 0; i < this.size; i++){ // doesn't allow repetition
        if (this.list[i].key == item.key) return;
      }
      if (this.size == this.list.length) this.double();
      this.list[this.size++] = item;
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


  //o(n)
  remove(key){
    for (let i = 0; i < this.size; i++){
      if (this.list[i].key == key){
          const aux = this.list[i];
          for (let j = i; j < this.size; j++){
              this.list[j] = this.list[j+1];
          }
          this.size--;
          return aux;
      }
    }
    throw "item not found";
  }

  //o (n)
  find(key){
    for (let i = 0; i < this.size; i++){
      if (this.list[i].key == key){
          return this.list[i];;
      }
    }
    throw "item not found";
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
  list.remove(4);

  const aux = list.find(2);
    console.log("find(2): " + JSON.stringify(aux));

  // summary
  console.log("summary:");
  console.log("size: " + list.getSize());
  console.log("list: " + list.toString());

} catch (err){
  console.log(err);
  if (err.stack) console.log(err.stack);
}
