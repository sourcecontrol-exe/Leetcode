/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {

    let revHead = head, part1Tail = null;
    for (let i=1;i<m;i++) {
        part1Tail = revHead;
        revHead = revHead.next;
    }
    
    let revTail = revHead; // after the reversal, the original head will become the tail
    let revPrev = null, revNext = null;
    for (let i=0;i<=(n-m);i++) {
        revNext = revHead.next;
        revHead.next = revPrev;
        revPrev = revHead;
        revHead = revNext;
    }
    
    // revHead now is the head of part2 
	// connect reversed part to part2
    revTail.next = revHead;
    
    // m == 1, the new head is the head of the reversed part
    if (part1Tail == null) return revPrev;
    
    // revPrev now is the head of the reversed part
    part1Tail.next = revPrev;
    return head;

};
// @lc code=end

