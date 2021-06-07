/*
the following is the list of algorithms and for learning purposes
*/

/* Quick algorithm */

function QuickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return QuickSort(left).concat(pivot, QuickSort(right));
};

// subsets algo;
let resutl = []
let i=0;
function subsets(i,t){
  if(i==subsets.length){
    resutl.push(t);
    return
  }
  subsets(i+1,t.concat(array[i]))
  subsets(i+1, t);
}







// function MinHeap(array) {

// }

// function MaxHeap(array) {

// }
