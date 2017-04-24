#!/usr/bin/env node
"use strict"

class Node{
  constructor(item){
    this.item = item;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
      this.size = 0;
      this.first = null;
  }

  getSize(){
    return this.size;
  }

  add(item){
    if (item.key){
      const node = new Node(item);
      node.next = this.first;
      this.first = node;
      node.previous = null;
      if (node.next)
        node.next.previous = node;
      this.size++;
    } else {
      throw "item doesn't have a key";
    }
  }

  find(key){
    if (this.size > 0){
      let current = this.first;
       while (current != null){
        if (current.item.key == key){
          return current.item;
        }
        current = current.next;
      };
      throw "item not found";
    } else {
      throw "empty list";
    }
  }

  remove(key){
    if (this.size > 0){
      let current = this.first;
      while (current != null){
          if (current.item.key == key){
            if (current == this.first){ // first
              this.first = current.next;
              current.next.previous = null;
            } else if (current.next == null){ // last
              current.previous.next = null;
            } else { // other
              current.previous.next = current.next;
              current.next.previous = current.previous;
            }
            this.size--;
            current = null;
            return;
          }
          current = current.next;
      }
      throw "item not found";
    } else {
      throw "empty list";
    }
  }

  toString() {
    let output;
    let current = this.first;
    while(current != null){
      if (current == this.first){
        output =  JSON.stringify(current.item);
      } else {
        output = output + ", " + JSON.stringify(current.item);
      }
      current = current.next;
    }
    return output;
  }
}


// tests
try{
let list = new DoublyLinkedList();

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
