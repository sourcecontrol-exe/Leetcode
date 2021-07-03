/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList1 = function (head) {

	if (!head) return null;
	let iter = head;
	let map = new Map();

	while (iter) {
		map.set(iter, new Node(iter.val));
		iter = iter.next;
	}
	iter = head;

	while (iter) {
		let newNode = map.get(iter);
		newNode.next = map.get(iter.next) || null
		newNode.random = map.get(iter.random) || null
		iter = iter.next;
	}
	return map.get(head);

};
var copyRandomList = function (head) {
	function createNewNodes(node) {
		if (!node) return;
		const newNode = new Node(node.val);
		newNode.next = node.next;
		node.next = newNode;
		createNewNodes(newNode.next);
	}
	function linkRandomNode(node) {
		if (!node) return;
		node.next.random = node.random ? node.random.next : null;
		linkRandomNode(node.next.next);
	} 
};
// @lc code=end

