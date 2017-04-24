#!/usr/bin/env node
"use strict"

function bubblesort(list){
  let r = list.length;
  let swapped;
  do{
    swapped = false;
    for (let i = 0; i<r; i++){
      if (list[i] > list[i+1]){
        swap(i, i+1, list);
        swapped = true;
      }
    }
    r--;
  } while(swapped);
}

function swap(i, j, list){
  const aux =list[i];
  list[i] = list[j];
  list[j] = aux;
}

// worst case analysis
// Num of comparisons for ordered array = (N-1) + (N-2) + (N-3) ... + 2 + 1
// compares to N(N-1)/2 0.5Nˆ2 + 0.5N ~ O(Nˆ2)
// Space = O(1)

// test
let sample = [1,4,2,3,0];
bubblesort(sample);
console.log(sample);
