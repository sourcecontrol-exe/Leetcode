/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs= function (head) {

	if (head == null || head.next == null) return head;
	const next = head.next;
	const rest = swapPairs(next.next);
	head.next = rest;
	next.next = head
	return next

};

// @lc code=end

