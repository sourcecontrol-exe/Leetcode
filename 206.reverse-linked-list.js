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
var reverseList1 = function(head) {

    if(!head || !head.next) return head;
    
    let reverse = head;

    let listToDo = head.next;
     
    reverse.next = null;

    while(listToDo){
        let temp = listToDo;
        listToDo = listToDo.next;
        temp.next = reverse;
        reverse = temp;
    }
    return reverse;

};
var reverseList = function(head) {

    if(!head || !head.next) return head;

    let list = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return list;

};
// @lc code=end

