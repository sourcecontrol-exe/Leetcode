const getCombos = (combos, candidates, remaining, startIndex, currCombo) => {
  for (let i = startIndex; i < candidates.length; i++) {
    const value = candidates[i];
	
	// If true we know this and all subsequent candidates will not result in a valid combo (backtrack)
    if (remaining - value < 0) return;

    // We know we have a valid candidate so add value to combo with O(1) add operation
    currCombo.push(value);

    if (remaining - value === 0) {
	  // Pushing using spead operator (or slice) to push a *new* array because currCombo is passed by
	  // reference, which means all subsequent operations to currCombo would affect the array we 
	  // push to our result, even when returning
	  
      combos.push([...currCombo]);
      currCombo.pop(); // remove value before backtracking ( O(1) removal )
      return;
    }

    // We pass current index (i) as startIndex because we can reuse values for combos, but we do not 
	// want to allow repeat combos (i.e. [2, 2, 3] and [2, 3, 2])
    getCombos(combos, candidates, remaining - value, i, currCombo);
    currCombo.pop(); // currCombo is passed by reference need to remove current value
  }
};

const combinationSum = (candidates, target) => {
  const combos = [];

  // Sort candidates first for the purpose of abandoning a candidate ("backtrack")
  // as soon as we can determine the candidate cannot lead to final solution (i.e.
  // if in ascending order, and adding current value exceeds target, we know adding
  // any subsequent values will exceed target value as well.
  
  candidates.sort((a, b) => a - b);
  getCombos(combos, candidates, target, 0, []);

  return combos;
};
 let a = combinationSum([2,3,6,7],7)
console.log(a)