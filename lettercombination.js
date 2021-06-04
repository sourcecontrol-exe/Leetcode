/**
 * @param {string} digits
 * @return {string[]}
 */

const set = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
let findPerMutations = (index,prefix,digit,result) =>{
    if(index == digit.length){
        result.push(prefix);
        return
    }
    let leters = set[digit[index]]
    for(var i =0;i<leters.length;i++){
        findPerMutations(index+1, prefix+leters[i],digit, result)
    }
}
;
var letterCombinations = function (digits) {
    
    let result = [];

    findPerMutations(0, '' ,digits, result)
   return result;
}

console.log(letterCombinations("23"))