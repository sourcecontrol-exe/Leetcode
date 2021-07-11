/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
   if(!root) return null;

   let queue = [root];

   while(queue.length){
      let currArr = [];
      let n = queue.length
      for(let i =0;i< n ;i++){
         let curr = queue.shift();
         currArr.push(curr);
         if(curr.left) queue.push(curr.left);
         if(curr.right) queue.push(curr.right);
      }
      for(let i = 0;i < currArr.length ; i++){
         currArr[i].next = currArr[i+1];
      }
   }
   return root;
};
// @lc code=end

