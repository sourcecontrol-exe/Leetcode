var threeSum1 = function(nums) {
    let result = {}
    for(var i=0 ;i<nums.length-1; i++){
        let target = nums[i];
        var set = new Set()
        for(var j = i+1 ;j<nums.length;j++){
            let numberToFind = target+nums[j]!==0?-(target+nums[j]):0;
          
            if(set.has(numberToFind)){
                let a = [nums[i], numberToFind, nums[j]].sort((a,b)=> a-b);
                result[a.join("")] = a
            }
            else{
                set.add(nums[j])
            }
        }
    }
    return Object.values(result);

}
var threeSum = function(nums) {
    
     nums.sort((a,b)=>a-b);
    let result = {}
    for(var i = 0; i<nums.length-2;i++){
        
        let low = i+1;
        let high = nums.length-1;
        while(low<high){
            console.log(nums[high],nums[low],nums[i])
            if(nums[high] + nums[low] + nums[i]>0){
                high--;
            }
            else if(nums[low] + nums[high] + nums[i]< 0){

                low++;
            }
            else{
                result[nums[i]+""+nums[low]+""+nums[high]]=[nums[i], nums[high], nums[low]];
                low++;
                high--;
            }
        }
    }
    return Object.values(result);
};

console.log(threeSum([-2,0,1,1,2]))