var travler = function(grid,m,n,set = {}){
    
    let key = m+","+n;
    
    if(m ==1 && n ==1) return grid[m-1][n-1];

    if(m<1 || n<1) return Number.MAX_SAFE_INTEGER;
    
    if(key in set) return set[key]
    
    set[key] = grid[m-1][n-1] + Math.min(travler(grid,m-1,n, set),travler(grid,m,n-1,set))
    
    return set[key]
}


var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[grid.length-1].length;
    let min = travler(grid,m,n)
    return min;
};

console.log(minPathSum([[1,2,3],[4,5,6]]))

