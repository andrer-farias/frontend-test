import { createDeckAndPiles, getDeck } from "../api"
import { getOrderedDeck } from "../services/cards"

export const saveDeck = (_commands, payload) => {
  const { deck, rotationCard, onSuccess } = payload
  const orderedCards = getOrderedDeck(rotationCard, deck)

  createDeckAndPiles(
    orderedCards,
    onSuccess,
  );
}

export const loadDeck = ({ commit }, payload) => {
  const { id } = payload;

  getDeck(id).then(({ cards }) => {
    commit('receiveDeck', { cards });
  })
}
