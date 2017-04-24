#!/usr/bin/env node
"use strict"

function selectionsort(list){
  const size = list.length;

  for (let i = 0; i<size; i++){
    let min = list[i];
    for (let j = i+1; j<size; j++){
      if (list[j] < min){
        min = list[j];
        swap(i, j, list);
      }
    }
  }
}

function swap(a, b, list){
  const aux = list[a];
  list[a] = list[b];
  list[b] = aux;
}

// Worst case analysis
// Num of comparisons = (N-1) + (N-2) + (N-3) ... + 2 + 1
// compares to N(N)/2 = 0.5Nˆ2 > O(Nˆ2)
// Space = O(1)

// test
let sample = [1,4,2,3];
selectionsort(sample);
console.log(sample);
