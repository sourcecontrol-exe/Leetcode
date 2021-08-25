/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function (head) {

	if (!head || !head.next) return head;

	let mid = findMid(head);

	const right = sortList(mid.next);
	mid.next = null;
	const left = sortList(head)

	return merge(left, right);

};
function merge(l1, l2) {
	let dummy = new ListNode(0);
	let p = dummy;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			p.next = l1
			l1 = l1.next
		}
		else {
			p.next = l2;
			l2 = l2.next;
		}
		p = p.next
	}
	if (!l1) p.next = l2;
	if (!l2) p.next = l1;

	return dummy.next;
}

function findMid(head) {
	let fast = head.next;
	let slow = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next
	}
	return slow;
}
// @lc code=end

