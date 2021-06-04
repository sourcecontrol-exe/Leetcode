/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) =>{ return a - b});
    let res = 0; 
    let min = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i <=nums.length - 2; i++) {
        let head = i + 1;
        let tail = nums.length - 1;

        while (head < tail) {
            let temp = nums[i]+nums[head]+nums[tail] - target
            let dif = Math.abs(temp)
            if(min>dif){
                min = dif;
                res = nums[i]+nums[head]+nums[tail]
            }
            else if(temp<0){
                head++;
            }
            else{
                tail--
            }
        }
    }
    return res
};

console.log(threeSumClosest([0,0,0],1))