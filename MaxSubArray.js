function MaxSubArray(arr){
    let max= arr[0] 

    for(let i =0 ; i<arr.length ; i++){

        let temp = 0
        for(let j = i ; j < arr.length ;j++ ){
            
            temp +=arr[j]
            
            if(temp>max){
                max = temp
            }
            

        }
        
    }
    
    return max
}

let ans = MaxSubArray([-2,-1])
console.log(ans)