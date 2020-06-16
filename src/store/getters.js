import { fullHouseCombinations } from "../utils/fullhouse";

export const getCards = state => state.cards

export const loadingDeckStatus = state => state.loadingDeck

export const highCard  = state => {
  const [highCard] = state.cards;
  return highCard && highCard.code;
}

export const getFullHouseCombinations = state => {
  return fullHouseCombinations(state.cards)
}
