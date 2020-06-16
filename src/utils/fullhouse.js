
export const findCombos = (workingCombo, currentIndex, remainingItems, sourceArray, combos) => {
  // LOOP OVER THE REMAINING ELEMENTS TO BE CHECKED
  for (let sourceIndex = currentIndex; sourceIndex < sourceArray.length; sourceIndex++) {
    // NEXT COMBO POSSIBILITY.
    const comboPossibility = [ ...workingCombo, sourceArray[sourceIndex] ];
    // IF COMBO IS OF RIGHT LENGTH (COMBO IS FOUND)
    if (remainingItems === 1) { 
      combos.push(comboPossibility);
    } else {
      //IF NOT GO CHECK AND THE NEXT INDEX IN COMBINATION
      combos = findCombos(comboPossibility, sourceIndex + 1, remainingItems - 1, sourceArray, combos);
    }
  }
  return combos;
}

const generateCombinations = (sourceArray, comboLength) => {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];
  // RECURSIVELY FIND COMBOS
  return findCombos([], 0, comboLength, sourceArray, []);
}

export const fullHouseCombinations = (cards) => {
  let threeCombinations = {};
  let twoCombinations = {};
  const fullHouseCombinations = [];

  // SEPARATING COMBOS
  cards.forEach(card => {
    const matches = cards.filter(match => match.value === card.value);
    if (matches.length > 2){
      threeCombinations[card.value] = matches;
    }
    if (matches.length >= 2){
      twoCombinations[card.value] = matches;
    }
  });
  
  // BUILDING POSSIBLE COMBOS
  Object.keys(threeCombinations)
    .forEach(key => {
      const suitableTwoCombinations = Object
        .keys(twoCombinations)
        .filter(twoCombKey => twoCombKey !== key)
      
      //CHECKING IF HAS SUITABLE COMBOS THAT ARE NOT FROM THE SAME SUIT
      if (suitableTwoCombinations.length === 0) return

      //IF HAS COMBINATIONS OF TWO COMBINE BOTH THREE AND TOW COMBOS 
      suitableTwoCombinations.forEach(twoKey => {
        const allThreeCombinations = generateCombinations(threeCombinations[key].map(card => card.code), 3);
        const allTwoCombinations = generateCombinations(twoCombinations[twoKey].map(card => card.code), 2);
        
        allThreeCombinations.forEach(item3 => {
          allTwoCombinations.forEach(item2 => {
            fullHouseCombinations.push([...item3, ...item2].reduce((a,b) => `${a},${b}`))
          })
        });
      });
    });

  return fullHouseCombinations
}
