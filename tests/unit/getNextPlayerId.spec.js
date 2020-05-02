import getNextPlayerId from '@/logic/getNextPlayerId'

describe('getting next player', () => {
  it('should get right players', () => {
    const FIRST = 1
    const SECOND = 2
    const THIRD = 3

    const ids = [FIRST, SECOND, THIRD]
    const getNext = getNextPlayerId(ids)
    let currentPlayer = FIRST

    currentPlayer = getNext(currentPlayer)
    expect(currentPlayer).toBe(SECOND)

    currentPlayer = getNext(currentPlayer)
    expect(currentPlayer).toBe(THIRD)

    currentPlayer = getNext(currentPlayer)
    expect(currentPlayer).toBe(FIRST)

    currentPlayer = getNext(currentPlayer)
    expect(currentPlayer).toBe(SECOND)
  })
})
