
export const reorderWeight = (startItem, items) => {
  const firstHalf = items.filter(({ weight }) => weight < startItem.weight)
  const secondHalf = items.filter(({ weight }) => weight > startItem.weight)

  return [startItem, ...firstHalf, ...secondHalf]
    .map((item, index) => (
      { ...item, weight: items.length - index }
    ))
}
