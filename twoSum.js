  let twoSum = function(nums, target){
    let hash ={};
      for(var i =0 ; i< nums.length ; i++){
          let curentMapVal = hash[nums[i]];
           if(curentMapVal>= 0){
              return [curentMapVal,i]
           }
           else{
              const numberTOfind = target-nums[i];

              hash[numberTOfind] = i;
           }
      }
      return null;
    }

     let n=twoSum([1,3,7,9,2], 11);
     console.log(n)