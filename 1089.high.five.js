function HighFive(arr) {
    let map = new Map();
    arr.map(([key, value]) => {
        if(!map.has(key))map.set(key,[]);
        let arr = map.get(key);
        arr.push(value);
        arr = arr.sort((a,b) => b-a);
        map.set(key,[...arr])
    })
    for(let [key,value] of map){
        let sum =0
       value.filter((item,index)=>{ if(index<5)
        sum+=item
       })
       map.set(key,Math.floor(sum/5))
    }
    let ans = Array.from(map,([key,value]) => ([key,value]));
    return ans
}
console.log(HighFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]))