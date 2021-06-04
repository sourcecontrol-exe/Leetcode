var combinationSum2 = function(candidates, target) {

     candidates.sort((a,b)=> a-b);
     let result = []

     function getCombos(target,combo=[], start =0){
          if(target <= 0){
               if(target===0 ){ result.push([...combo]);};
               return
          }

          for(var i =start; i< candidates.length ; i++){
               if(i > start && candidates[i] === candidates[i - 1]) continue;
               getCombos(target-candidates[i], [...combo,candidates[i]],i+1);
          }
     }

     getCombos(target);
     return result;

     
};

let a  = combinationSum2([1,1,2,5,6,7,10], 8)
console.log(a);

// sort the element in accending order
// iterate through each element for loop 1 
// for loop 2 j= i+1 to array length
// addingf and pushing to an array 
// if sum == target j = j+1; array push to compbinaiton
// if sum > = 