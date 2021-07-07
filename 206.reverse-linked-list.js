/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
    if(!head || !head.next ) return head;
    
    let reverseList = head;
    let tobeReversed = reverseList.next;
    reverseList.next = null;
     
    while(tobeReversed){
        let temp = tobeReversed.next;
        tobeReversed.next = reverseList;
        reverseList = tobeReversed;
        tobeReversed = temp
    }

    return reverseList;
};

var reverseList1= function(head) {

    if(!head || !head.next) return head;

    let list = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return list;

};
// @lc code=end

