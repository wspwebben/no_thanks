import shuffle from './shuffle'

export default function (min, max, slice) {
  const deck = Array.from({ length: (max - min + 1) }, (_, i) => min + i)
  const shuffled = shuffle(deck)

  return shuffled.slice(0, -slice)
}
