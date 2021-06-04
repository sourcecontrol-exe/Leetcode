function zeros(arr) {
    let a = 0, b = arr.length-1
    while(a<b)
    {
        if(arr[a] == 0){
            arr.splice(a,1)
            a--
            arr.push(0)
            b--
        }
        a++
    }
    console.log(arr)
}
zeros([1,1,2,0,0,2,0,0,0,0,0,])