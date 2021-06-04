// function lengthOfPalindrome(string){
 

//     let max = 0,
//     maxString=string.length==0? "" : string.slice(0,1),
//     first_half ="",
//     second_half ="",
//     substringpair = []
//     for(let i =0 ; i< string.length ; i++){

//         for(let j= i+1; j<string.length ; j++){
          
//             let substring = string.slice(i,j+1)
            
//             if(substring.length%2===0){
//                 let mid = substring.length/2
//                 first_half = substring.slice(0,mid)
//                 second_half= substring.slice(mid, substring.length).split("").reverse().join("")
              
//             }  
          
//             else if(substring.length%2!==0 ){
//                 let mid = (substring.length-1)/2
//                 first_half = substring.slice(0, mid)
//                 second_half = substring.slice(mid+1, substring.length).split("").reverse().join("")
                   
//             }
                
//                 if(second_half == first_half && max < substring.length){
                    
//                     max = substring.length
//                     maxString = substring
//                 }

            
//         }
//     }
    
//     return maxString

// }

// function paindromeValidator(arr){
//     arr.for
// }

//console.log(lengthOfPalindrome("cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj"))

function dynamicLP(str){
    

}
console.log(dynamicLP("babad"))
