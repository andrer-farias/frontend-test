import suits from '../constants/suits'
import values from '../constants/values'
import { reorderWeight } from './weight'

export const suitFromString = card => card.slice(-1).toUpperCase()
export const valueFromString = card => card.slice(0, -1).toUpperCase()

export const orderCards = (cards, weightedValues) =>
  cards.map(card => {
    const value = valueFromString(card)
    const { weight= 0 } = weightedValues.find(({ name }) => name === value) || {}
    return { value: card, weight }
  }).sort((a,b) => {
    if (a.weight > b.weight) return -1
    return 1
  }).map(({ value }) => value)

export const getOrderedDeck = (rotationCard, cards) => {
  const rotationSuitId = suitFromString(rotationCard)
  const rotationValueId = valueFromString(rotationCard)

  const rotationSuit = suits.find(({ id }) => id === rotationSuitId) || {}
  const weightedSuits = reorderWeight(rotationSuit, suits)

  const rotationValue = values.find(({ id }) => id === rotationValueId) || {}

  const weightedValues = reorderWeight(rotationValue, values)

  let orderedCards = []

  weightedSuits.forEach(suit => {
    const suitCards = cards.filter(card => suitFromString(card) === suit.id)
    orderedCards = [...orderedCards, ...orderCards(suitCards, weightedValues)]
  })

  return orderedCards
}
