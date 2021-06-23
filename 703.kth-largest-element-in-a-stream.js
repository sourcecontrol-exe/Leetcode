/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
	
	this.sorted = nums.sort((a, b) => a - b);
	this.k = k
	this.binarySearch=(low, high, val)=>{
		let mid = low + Math.floor((high - low) / 2)
		if (low < high) {
			if (this.sorted[mid] == val) return mid;
			if (this.sorted[mid] > val) this.binarySearch(mid + 1, high, val);
			if (this.sorted[mid] < val) this.binarySearch(low, mid - 1, val);
		}
		return -1;
	}
	console.log(this.sorted)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {

	
	let PointOfIntersection = this.binarySearch(0, this.sorted.length - 1, val);

	let temp = 0;
	if(this.sorted[PointOfIntersection] > 0){
		this.sorted.splice(PointOfIntersection-1,0,val);
	}
	else{
		
		while(this.sorted[temp] < val){
			temp++;
		}
		this.sorted.splice(temp,0,val);
	}
	return this.sorted[this.sorted.length-this.k];

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));   // return 4
// console.log(kthLargest.add(5));   // return 5
// console.log(kthLargest.add(10));  // return 5
// console.log(kthLargest.add(9));   // return 8
// console.log(kthLargest.add(4));   // return 8


// @lc code=end

