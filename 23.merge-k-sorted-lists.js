/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

	if(lists.length == 0 ) return null;

	let map = new Map();
	for(let i =0;i< lists.length;i++){
		let p = lists[i]
		let temp = p;
		while(temp){
			if(!map.has(temp.val)) map.set(temp.val,0)
			let mapVal = map.get(temp.val)
			map.set(temp.val,mapVal+1)
			temp= temp.next
		}
	}
	let arr = Array.from(map);
	arr.sort((a,b)=> a[0]-b[0]);

	let res = new ListNode();
	let temp = res;

	for(let item of arr){
		while(item[1]--){
			let n = new ListNode(item[0])
			temp.next = n;
			temp = temp.next; 
		}
	}
	return res.next
};
// @lc code=end

