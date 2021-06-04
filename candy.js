var candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1);
    
    for(let i=1; i <=ratings.length-1; i++){
        if(ratings[i]>ratings[i-1]){
            candies[i]=candies[i-1]+1;
        }
    }
    for(let j = ratings.length-2;j>=0;j--){
        if(ratings[j]>ratings[j+1]){
            candies[j] = Math.max(candies[j], candies[j+1]+1);
        }
    }
    let temp =0;
    candies.map(ele=>{
        temp+=ele;
    })
    return temp;
};
console.log(candy( [1,2,2]))