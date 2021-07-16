/*
 * @lc app=leetcode id=1669 lang=javascript
 *
 * [1669] Merge In Between Linked Lists
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
	let l1 = list1;
	while(a!=1){
		l1=l1.next;
		a--;
	}
	let l2 = list1; 
	while(b+1){
		l2 = l2.next?l2.next: null;
		b--;
	}
	l1.next = list2;
	while(l1.next){
		l1 = l1.next
	}
	l1.next = l2?l2:null
	return list1
};
// @lc code=end

