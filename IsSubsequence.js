function isSubsequence(s,t){
    let index = 0;
    for(let i =0 ;i < t.length ; i++){
        if(s[index] == t[i]){
            index++;
            console.log(index)
        }
    }
    if(index==s.length){
        return true
    }
    else {
         return false
    }
}

let ans= isSubsequence("0", "1001011");
console.log(ans)