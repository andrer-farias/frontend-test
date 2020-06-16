import faker from 'faker'
import axios from 'axios'
import { createDeckAndPiles, getDeck } from '../index'
import { pilesMock } from './mocks/piles'

jest.mock('axios')

describe('getDeck', () => {
  it('returns the deck cards data', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: pilesMock
    }));
    const response = await getDeck(faker.random.uuid())
    expect(response.cards).toEqual(pilesMock.piles.selected.cards)
  })
})

describe('createDeckAndPiles', () => {
  it('create and return the deck id', async () => {
    const onSuccess = jest.fn()
    const deckId = faker.random.uuid()
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: {
        deck_id: deckId
      }
    }));
    const response = await createDeckAndPiles(['2C'], onSuccess)
    expect(response).toEqual(deckId)
    expect(onSuccess).toHaveBeenCalledWith(deckId)
  })

  it('callback "onError" if fails', async () => {
    const onSuccess = jest.fn()
    const onError = jest.fn()
    axios.post.mockImplementationOnce(() => {
      throw new Error();
    });
    await createDeckAndPiles(['2C'], onSuccess, onError)
    expect(onError).toHaveBeenCalled()
  })
})
