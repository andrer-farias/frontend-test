import { reorderWeight } from '../weight'

describe('reorderWeight', () => {
  it('reorder based on start weight', () => {
    const startItem = { id: 4, weight: 4 }
    const items = [
      { id: 1, weight: 1 },
      { id: 2, weight: 2 },
      { id: 3, weight: 3 },
      startItem,
      { id: 5, weight: 5 },
      { id: 6, weight: 6 },
      { id: 7, weight: 7 },
      { id: 8, weight: 8 },
    ]
    const result = reorderWeight(startItem, items)

    expect(result).toEqual([
      { id: startItem.id, weight: 8 },
      { id: 1, weight: 7 },
      { id: 2, weight: 6 },
      { id: 3, weight: 5 },
      { id: 5, weight: 4 },
      { id: 6, weight: 3 },
      { id: 7, weight: 2 },
      { id: 8, weight: 1 }
    ])
  })
})