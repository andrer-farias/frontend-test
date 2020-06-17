import { suitFromString, valueFromString, orderCards, getOrderedDeck } from '../cards'

describe('suitFromString', () => {
  it('returns the suit in last char', () => {
    expect(suitFromString('AC')).toEqual('C')
    expect(suitFromString('10D')).toEqual('D')
    expect(suitFromString('2H')).toEqual('H')
  })
})

describe('valueFromString', () => {
  it('returns the value removing the last char', () => {
    expect(valueFromString('AC')).toEqual('A')
    expect(valueFromString('10D')).toEqual('10')
    expect(valueFromString('2H')).toEqual('2')
  })
})

describe('orderCards', () => {
  it('returns the card order according to the weight', () => {
    const cards = ['7D', 'AS', 'QH', '9S', '6D']
    const weights = [
      { id: 'A', name: 'A', weight: 5 },
      { id: '9', name: '9', weight: 4 },
      { id: '7', name: '7', weight: 3 },
      { id: 'Q', name: 'Q', weight: 2 },
      { id: '6', name: '6', weight: 1 },
    ]
    expect(orderCards(cards, weights)).toEqual([ 'AS', '9S', '7D', 'QH', '6D' ])
  })
})

describe('getOrderedDeck', () => {
  it('returns the deck card order according to the rotationCard', () => {
    expect(getOrderedDeck('2H', ['7D', 'AS', 'QH', '9S', '6D'])).toEqual([ 'QH', '7D', '6D', '9S', 'AS' ])
    expect(getOrderedDeck('10C', ['7D', 'AS', 'QH', '9S', '6D'])).toEqual([ '9S', 'AS', 'QH', '7D', '6D' ])
    expect(getOrderedDeck('2H', ['AS', 'AD', 'AC', 'KH', 'KS'])).toEqual([ 'KH', 'AD', 'AC', 'AS', 'KS' ])
    expect(getOrderedDeck('2H', ['2H', '2D', '2C', '2S', '3H', '3D', '3C'])).toEqual([ '2H', '3H', '2D', '3D', '2C', '3C', '2S' ])
  })
})