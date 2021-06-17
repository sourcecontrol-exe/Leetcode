/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */

var isPalindrome = function (head) {
	let stack = [];
	let temp = head;
	while (temp) {
		stack.push(temp.val);
		temp = temp.next;
	}
	let left = 0;
	let right = stack.length-1;
	while(left<right){
		if(stack[left] == stack[right]){
			left++;right--;
		}
		else{
			return false;
		}
	}
	return true;
};
// @lc code=end

