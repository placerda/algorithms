#!/usr/bin/env node
"use strict"

function sort(list){
  quicksort(list, 0, list.length-1);
}

function quicksort(list, low, high){
  if (low >= high) return;
  const index = partition(list, low, high);
  quicksort(list, low, index-1);
  quicksort(list, index+1, high);
}

function partition(list, low, high){
  let left = low;
  let right = high;
  let pivot = list[Math.floor((low+high)/2)];
  while(left <= right){
    while (list[left] < pivot) left++;
    while (list[right] > pivot) right--;
    if (left <= right)
      swap(list,left,right);
    left++;
    right--;
  }
  return left;
}

function swap(list, left, right){
  const aux = list[left];
  list[left] = list[right];
  list[right] = aux;
}

// analysis
// O(nˆ2)
// o(n log n) averaga
// Space = O(log(n))

// test
let sample = [1,4,2,3];
sort(sample);
console.log(sample);
