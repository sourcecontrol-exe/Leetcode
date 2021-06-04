function move(arr){
    let count = 0;
    let result = []
   for(let i =0; i< arr.length ;i++){
       if(arr[i] ==0){
            count++
       }
       else {
           result.push(arr[i])
       }
   }
   
   while(count--){
        result.push(0)
   }
   return result
}

let ans = move([0,1,0,3,12])