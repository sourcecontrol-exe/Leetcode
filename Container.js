let maxArea = (height) =>{

    let temp = 0;
    let temp2  = height.length-1;
    let max = 0;
    let vol = 0;
    while(temp< temp2){
        vol = Math.min(height[temp], height[temp2]) * (temp2-temp);
        max = Math.max(max,vol);
         height[temp] > height[temp2]? temp2--:temp++;
        }
    return max;
    //  let max = 0 ;
    //  let min = 0;
    //  for (var i = 0; i<height.length; i++){
    //      for(var j = i+1; j<height.length; j++){
    //         min = Math.min(height[i] ,height[j]);
    //         vol = min *(j - i)
    //          max = Math.max(vol,max)
    //      }
    //  }

    //  return max;
}

let ans = maxArea([1,8,6,2,5,4,8,3,7])
console.log(ans)