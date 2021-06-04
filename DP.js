function getWays(n, c) {
    // Write your code here
    const store = new Array(n+1).fill(0);
    store[0] = 1;
    for(let coin of c){
        for( let total = coin ; total < store.length; total++){
            
            console.log(total, coin, total - coin)
            const reminder = total - coin;
            store[total] += store[reminder];
            console.log(store)
        }
    }
    console.log(store)
     return store[n];
}

let sol = getWays(3,[8,3,1,2])
console.log(sol)