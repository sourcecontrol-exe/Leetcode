/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function reverse(head) {
	if(!head || !head.next) return head;
	
	let reversed = head;
	let toBeReversed = head.next;
	reversed.next = null;
	
	while(toBeReversed){
		let temp = toBeReversed;
		toBeReversed = toBeReversed.next;

		temp.next = reversed;
		reversed = temp;
	}
	return reversed;
}

var addTwoNumbers = function (l1, l2) {
	let sum =0; 
	let carry =0; 
	let revList1 = reverse(l1);
	let revList2 = reverse(l2);
	let res = new ListNode(0);
	let rPointer = res;
	while(revList1 || revList2 || carry){
		if(revList1){
			sum+=revList1.val;
			revList1 = revList1.next;
		}
		if(revList2){
			sum+=revList2.val;
			revList2 = revList2.next;
		}
		if(carry){
			sum+=carry;
			carry=0;
		}
		carry = Math.floor(sum/10);
		sum= sum%10;
		rPointer.next = new ListNode(sum);
		rPointer = rPointer.next;
		sum=0;
	}
	return reverse(res.next);
};
// @lc code=end

