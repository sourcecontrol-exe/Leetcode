/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */


var maxScore = function (cardPoints, k) {
    let head = k-1; 
    let tail = cardPoints.length-1;
    let sum =0;
    for(var i =0;i<k;i++) sum+=cardPoints[i];
    let max = sum;
    
    while(k--){
        sum+=cardPoints[tail--]-cardPoints[head--];
        max = Math.max(sum,max);
    }
    return max;
}
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3))