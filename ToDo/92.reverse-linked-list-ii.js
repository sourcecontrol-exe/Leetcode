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

    let start = head, curr = head;

    let i = 1;
    while(i< m){
        start = curr;
        curr = curr.next;
        i++;
    }
    let Reversed = null;
    let todo = curr;

    while(i<=n){
        let next = curr.next;
        curr.next = Reversed;
        Reversed = curr;
        curr = next;
        i++;
    }

    start.next = Reversed;
    todo.next = curr;

    return m==1? Reversed:head
};
// @lc code=end

