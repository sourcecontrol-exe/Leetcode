/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

	let arr = []
	let node = head;
	while(node){
		arr.push(node);
		node = node.next
	}
	let left = 0, right = arr.length-1;

	while(left<right){
		arr[left].next = arr[right]
		left++;
		arr[right].next = arr[left]
		right--;
	}
	arr[left].next = null
	return arr[0]
};
// @lc code=end

