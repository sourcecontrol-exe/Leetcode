/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    return i;
}

function QuickSort(items, left = 0, right = items.length - 1) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            QuickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            QuickSort(items, index, right);
        }
    }
    return items;
}
var findKthLargest = function (nums, k) {
    let heap = [];

    for (var i = 0; i < nums.length; i++) {

        let element = nums[i];
        let isAdded = false;
        if (heap.length == 0) {
            heap.push(element);
        }
        for (var j = 0; j < heap.length; j++) {
            if (element > heap[j]) {
                heap.splice(j, 0, element);
                isAdded = true;
                break;
            }
        }
        if(!isAdded){
            heap.push(element);
        }
    }
    return heap[k-1]
};
// @lc code=end

