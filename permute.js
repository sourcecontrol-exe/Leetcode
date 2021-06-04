var permute=(nums, set = [],ans=[])=>{
    if(!nums.length) ans.push([...set])

    nums.forEach((ele,index)=> {
        let rest = nums.filter((ele,ind) => ind != index)
        set.push(ele);
        permute(rest,set,ans)
        set.pop()
    });

    return ans
}

console.log(permute([1,2,3]))