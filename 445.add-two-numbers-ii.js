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
let reverse = function(head){
	if(!head || !head.next){
		return head;
	}
	let currentHead = head.next;
	let reversedList = head;
	reversedList.next = null;

	while(currentHead){
		let temp = currentHead;
		currentHead = currentHead.next;

		temp.next = reversedList;
		reversedList = temp;
	}
	return reversedList;
}
var addTwoNumbers = function(l1, l2) {
	let head = new ListNode(0);
	let temp = head; 
	let sum = 0; 
	let carry =0;

	let rl1 = reverse(l1);
	let rl2 = reverse(l2);

	while(rl1 || rl2 || carry){
		if(rl1){
			sum+=rl1.val;
			rl1 = rl1.next;
		}
		if(rl2){
			sum+=rl2.val;
			rl2= rl2.next;
		}
		if(carry){
			sum+=carry;
			carry = 0;
		}
		carry = Math.floor(sum/10);
		sum = 
	}
    
};
// @lc code=end

