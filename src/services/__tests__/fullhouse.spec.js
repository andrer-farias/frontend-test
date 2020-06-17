import { fullHouseCombinations } from '../fullhouse'

describe('fullHouseCombinations', () => {
  it('return combo when has one combination (AS, AD, AC, KH, KS)', () => {
    const cards = [
      { value: 'ACE', suit: 'SPADES', code: 'AS' },
      { value: 'ACE', suit: 'DIAMONDS', code: 'AD' },
      { value: 'ACE', suit: 'CLUBS', code: 'AC' },
      { value: 'KING', suit: 'HEARTS', code: 'KH' },
      { value: 'KING', suit: 'SPADES', code: 'KS' },
    ]

    const combos = fullHouseCombinations(cards)
    expect(combos).toHaveLength(1)
    expect(combos[0]).toEqual('AS,AD,AC,KH,KS')
  })
  it('return combo when has more than one combination (2H, 2D, 2C, 2S, 3H, 3D, 3C)', () => {
    const cards = [
      { value: '2', suit: 'HEARTS', code: '2H' },
      { value: '2', suit: 'DIAMONDS', code: '2D' },
      { value: '2', suit: 'CLUBS', code: '2C' },
      { value: '2', suit: 'SPADES', code: '2S' },
      { value: '3', suit: 'HEARTS', code: '3H' },
      { value: '3', suit: 'DIAMONDS', code: '3D' },
      { value: '3', suit: 'CLUBS', code: '3C' },
    ]

    const combos = fullHouseCombinations(cards)
    expect(combos).toHaveLength(18)

    const expectedCombos = [
      '2H,2D,2C,3H,3D', '2H,2D,2C,3H,3C',
      '2H,2D,2C,3D,3C', '2H,2D,2S,3H,3D',
      '2H,2D,2S,3H,3C', '2H,2D,2S,3D,3C',
      '2H,2C,2S,3H,3D', '2H,2C,2S,3H,3C',
      '2H,2C,2S,3D,3C', '2D,2C,2S,3H,3D',
      '2D,2C,2S,3H,3C', '2D,2C,2S,3D,3C',
      '3H,3D,3C,2H,2D', '3H,3D,3C,2H,2C',
      '3H,3D,3C,2H,2S', '3H,3D,3C,2D,2C',
      '3H,3D,3C,2D,2S', '3H,3D,3C,2C,2S'
    ]

    combos.forEach((combo, index) => {
      expect(combo).toEqual(expectedCombos[index])
    })
  })
})
