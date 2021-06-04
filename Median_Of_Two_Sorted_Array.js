
function MedianOfSortedArray(nums1, nums2){
    let key1 = 0,
        key2 = 0,
        result = []
       
    while(key1 != nums1.length || key2 != nums2.length){
        
        if(nums1[key1] > nums2[key2] && key2 < nums2.length){
            result.push(nums2[key2])
            key2++
            
        }
        else if(nums2[key2] > nums1[key1] && key1 < nums1.length){
            result.push(nums1[key1])
            key1++
        }
        else{
            if(key1< nums1.length)    
            {   
                result.push(nums1[key1])
                key1++

            }
            if(key2 < nums2.length){
                result.push(nums2[key2])
                key2++
            }            
        }

    }
    console.log(result[(result.length/2)-1],result[(result.length/2)])
    let ans =  result.length%2==0 ?  (result[(result.length/2)-1]+result[(result.length/2)+1])/2:result[Math.floor(result.length/2)]  
    console.log(ans)
}

let arr1 = [1,2],
    arr2 = [3,4]
let testPrint = MedianOfSortedArray(arr1, arr2)

console.log(testPrint)