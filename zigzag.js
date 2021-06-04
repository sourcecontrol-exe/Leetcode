var convert = function(s, numRows) {
    let ans = [];
    let temp = 0;
    let n = 1;
    while(temp<s.length){
        if(n%2==0){
            ans.push(s.slice(temp,temp+(numRows-2)));
            temp+= numRows-2
        }
        else{
            ans.push(s.slice(temp,temp+numRows))
            temp+=numRows;
        }
        n++;
    }
    let ans1 = ''
    for(var i=0 ;i<numRows;i++){
        if(i%2==0){
            ans1+=ans[i][i]
        }
    }
    console.log(ans1)
};
 
let a = convert("PAYPALISHIRING", 2)