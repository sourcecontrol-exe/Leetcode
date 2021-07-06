/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let lead = head;
	while (n--) {
		lead = lead.next;
	}
	let follower = head;

	while (lead && lead.next) {
		lead = lead.next;
		follower = follower.next;
	}
	if(!lead) return head.next;
	follower.next= follower.next? follower.next.next: null
	return head;

};
// @lc code=end

