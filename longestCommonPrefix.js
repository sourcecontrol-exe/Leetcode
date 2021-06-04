var longestCommonPrefix = function(strs) {
    for(var i = 0; i<strs.length-1; i++){
        let a = strs[i];
        let b = strs[i+1];
        let temp = 0;
        let res = ''
        while(a[temp] == b[temp] && a[temp]!== undefined ){
            res+=a[temp];
            temp++;
        }
        strs.splice(0,2);
        if(res.length > 0){
            strs.push(res);
            i--;
        }
        else{
            return "";
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(['','']))