
export const findCombos = (workingCombo, currentIndex, remainingItems, sourceArray, combos) => {
  for (let sourceIndex = currentIndex; sourceIndex < sourceArray.length; sourceIndex++) {
    const comboPossibility = [ ...workingCombo, sourceArray[sourceIndex] ];
    if (remainingItems === 1) { 
      combos.push(comboPossibility);
    } else {
      combos = findCombos(comboPossibility, sourceIndex + 1, remainingItems - 1, sourceArray, combos);
    }
  }
  return combos;
}

const generateCombinations = (sourceArray, comboLength) => {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];
  return findCombos([], 0, comboLength, sourceArray, []);
}

export const fullHouseCombinations = (cards) => {
  let threeCombinations = {};
  let twoCombinations = {};
  const fullHouseCombinations = [];

  cards.forEach(card => {
    const matches = cards.filter(match => match.value === card.value);
    if (matches.length > 2){
      threeCombinations[card.value] = matches;
    }
    if (matches.length >= 2){
      twoCombinations[card.value] = matches;
    }
  });
  
  Object.keys(threeCombinations)
    .forEach(key => {
      const suitableTwoCombinations = Object
        .keys(twoCombinations)
        .filter(twoCombKey => twoCombKey !== key)
      
      if (suitableTwoCombinations.length === 0) return

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
