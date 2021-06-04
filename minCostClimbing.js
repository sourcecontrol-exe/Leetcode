var minCostClimbingStairs = function(cost) {
   if(cost.length <1) return 0;

    var min = 0;
    
    for(var i = 0 ; i< cost.length ;i++){
        cost[i] < cost[i+1] ? i : i++;
        console.log(min)
         if(cost[i]){
             min += cost[i];
         }
    }

    return(min);
};
function memoization(cost,index){
    return Math.min(memoization(cost,index),memoization(cost,index+1))
}

function dynamicFunction(cost){
  for(let  i = 2 ; i< cost.length ;i++)
     {
      cost[i] += Math.min(cost[i-1],cost[i-2])   
     }
      return Math.min(cost[cost.length -1],cost[length-2])

}


let ans = minCostClimbingStairs([10, 15, 20])
console.log(ans)