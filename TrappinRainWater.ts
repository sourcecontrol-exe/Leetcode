const rainWater = (height:number[]):number=>{
    //BruteForced Method
    let maxWater: number = 0;
    for(var i = 0; i< height.length-1; i++){
        let leftPivot = i-1 ,rightMax = 0;
        let leftMax = 0, rightPivot=i+1;
        while(leftPivot>=0){
            leftMax= Math.max(leftMax,height[leftPivot]);
            leftPivot--
        }
        while(rightPivot<=height.length-1){
            rightMax= Math.max(rightMax,height[rightPivot]);
            rightPivot++;
        }
        let waterCOntained = Math.min(rightMax,leftMax) - height[i];
        if(waterCOntained >= 0){
            maxWater+=waterCOntained
        }

    }
 return maxWater;
}

const OptimalRainWater = (height:number[]):number =>{
     let waterContained = 0;
     let left = 0 , right = height.length-1;
     let leftMax =0, rightMax=0;

     while(left<right){
        if(height[left] <= height[right]){
            if(height[left] >= leftMax){
                leftMax = height[left];
            }
            else{
                waterContained+= leftMax-height[left];
            }
            left++;
        } else{
            if(height[right] >= rightMax){
                rightMax = height[right];
            }else{
                waterContained+= rightMax-height[right];
            }
            right--;
        }
     }
    return waterContained;

}


 let ans = OptimalRainWater([0,1,0,2,1,0,1,3,2,1,2,1])
 console.log(ans);