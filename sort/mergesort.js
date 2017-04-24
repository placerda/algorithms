#!/usr/bin/env node
"use strict"

function mergesort(list){
  sort(list, 0, list.length-1);
}

function sort(list, l, r){
  if (r<=l) return;
  const mid = Math.floor((l+r)/ 2);
  sort(list, l, mid);
  sort(list, mid+1, r);
  merge(list, l, mid, r);
}

function merge(list, l, m, r){
  const size = r-l+1;
  const aux = new Array(size);
  let i = l;
  let j = m+1;
  for (let k = 0; k < size; k++){
    if (i>m) aux[k] = list[j++];
    else if (j>r) aux[k] = list[i++];
    else if (list[i] < list[j]) aux[k] = list[i++];
    else aux[k] = list[j++];
  }
  for (let k = 0; k < size; k++){
    list[l+k] = aux[k];
  }
}

// Worst case analysis
// Recursion
//  T(N) = 2 * T(N/2) + N
//  T(N) = 0 se N = 1
// > N Log N
// Time = O(N Log N)
// Space = O(N)

// test
let sample = [30,40,15,20];
mergesort(sample);
console.log(sample);
