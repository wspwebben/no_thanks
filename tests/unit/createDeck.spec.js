import createDeck from '@/logic/createDeck'

import { MIN_VALUE, MAX_VALUE, REMOVED_CARDS } from '@/logic/consts'

describe('creating deck', () => {
  it('should create right amount of cards', () => {
    const deck = createDeck()

    const rightLength = (MAX_VALUE - MIN_VALUE) + 1 - REMOVED_CARDS

    expect(deck.length).toBe(rightLength)
  })
})
