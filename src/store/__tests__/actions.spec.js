import { loadDeck } from '../actions'
import { mockCards } from './mocks/index'

jest.mock('../../api', () => ({
  getDeck: () => Promise.resolve({
    cards: mockCards
  }),
}))

describe('loadDeck', () => {
  it('should commit "receiveDeck" mutation', async () => {
    const commit = jest.fn()
    loadDeck({ commit }, { id: '1' })
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(commit).toHaveBeenCalledWith('receiveDeck', { cards: mockCards })
  })
})

