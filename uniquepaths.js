function pathfinder(grid, m, n,set={}){
    let key = m+","+n;
    if(key in set) return set[key];
    if(m==1 && n==1 && grid[m-1][n-1] !== 1) return 1;
    if(m<1 || n<1) return 0;
    if(grid[m-1][n-1] ==1 ) return 0;
    let ways = 0;
    set[key] = pathfinder(grid,m,n-1) + pathfinder(grid, m-1,n);
    return set[key];
}


function uniquePathsWithObstacles(grid){
    let m = grid.length;
    let n = grid[grid.length -1].length;
    let ways =0;
    ways= pathfinder(grid,m,n);
    return ways
}

console.log(uniquePathsWithObstacles([[0,1],[0,0]]))

