function backspaceCompare(S: string, T: string): boolean {
    let len1 = S.length;
    let len2 = T.length;
    let t1=[]
    let t2 =[]
    for(var i = 0 ; i<len1 ;i++)
    {
      if(S[i]== "#"){
        t1.pop()
        continue;
      }
      t1.push(S[i])
    }

    for(var i = 0 ; i<len2 ;i++)
    {
        if(T[i]== "#"){
        t2.pop()
        continue;
      }
      t2.push(T[i])

    }
     //if(t1.join("") == t2.join(""))

      console.log(t1.join(""),t2.join(""))

     return false;

};

let ans = backspaceCompare("xywrrmp","xywrrmu#p")
console.log(ans)