/*
 * @lc app=leetcode id=725 lang=javascript
 *
 * [725] Split Linked List in Parts
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let arr =[]
    let temp = head;
    let tempK = k
    while(tempK-- && temp){
	temp = temp.next;
    }

};
// @lc code=end

