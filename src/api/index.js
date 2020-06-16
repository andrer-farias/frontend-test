import axios from 'axios'

const baseURL = 'https://deckofcardsapi.com/api'

const transformValue = (value) => value.replace(/10/g, '0')

const createDeck = (cards) => axios.post(`${baseURL}/deck/new?cards=${cards}`)
  .then(response => response)
  .catch(err => err)

const drawCards = (deck, count) => axios.get(`${baseURL}/deck/${deck}/draw/?count=${count}`)

const createPile = (deck, pile, cards) => axios.post(`${baseURL}/deck/${deck}/pile/${pile}/add?cards=${cards}`)

const listPile = (deck, pile) => axios.get(`${baseURL}/deck/${deck}/pile/${pile}/list`)

export const getDeck = async (deckId) => {
  const response = await listPile(deckId, 'selected')
  const { piles: { selected = {}} = {} } = response && response.data
  const { cards = [] } = selected

  return {
    cards,
  }
}

export const createDeckAndPiles = async (cards, onSuccess, onError) => {
  try {
    const cardsString = cards
      .map(value => transformValue(value))
      .reduce((a,b) => `${a},${b}`).toUpperCase()

    const { data } = await createDeck()
    const { deck_id: deckId } = data

    await drawCards(deckId, cards.length)

    await createPile(deckId, 'selected', cardsString)

    onSuccess && onSuccess(deckId)

    return deckId
  } catch (e) {
    onError && onError()
  }
}
