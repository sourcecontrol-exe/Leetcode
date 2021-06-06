/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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

var mergeTwoLists = function (l1, l2) {

    let temp1 = l1;
    let temp2 = l2;
    let res = new ListNode();
    let resTemp = res;
    let t;
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            t = new ListNode(temp1.val);
            temp1 = temp1.next;
            resTemp.next = t;
            resTemp = resTemp.next
        }
        else if (temp2.val <= temp1.val) {
            t = new ListNode(temp2.val);
            temp2 = temp2.next;
            resTemp.next = t;
            resTemp = resTemp.next

        }
    }
    if (temp1 == null && temp2!==null) {
        resTemp.next = temp2;
        temp2 = null;

    }
    if (temp2 == null && temp1 !== null) {
        resTemp.next = temp1;
        temp1 = null;
    }

    return (res.next)
};
// @lc code=end

