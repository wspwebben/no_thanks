import { MIN_VALUE, MAX_VALUE, REMOVED_CARDS } from './consts'

import shuffle from './shuffle'

export default function () {
  const deck = Array.from({ length: (MAX_VALUE - MIN_VALUE + 1) }, (_, i) => MIN_VALUE + i)
  const shuffled = shuffle(deck)

  return shuffled.slice(0, -REMOVED_CARDS)
}
