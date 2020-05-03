import getStackScore from '@/logic/getStackScore'

describe('counting score of a stack', () => {
  it('should score empty stack', () => {
    const stack = []
    const score = 0

    expect(getStackScore(stack)).toBe(score)
  })

  it('should score single pile', () => {
    const PILE1 = 1

    const stack = [
      [PILE1, PILE1]
    ]
    const score = PILE1

    expect(getStackScore(stack)).toBe(score)
  })

  it('should score discrete piles', () => {
    const PILE1 = 1
    const PILE2 = 3
    const PILE3 = 6

    const stack = [
      [PILE1, PILE1],
      [PILE2, PILE2],
      [PILE3, PILE3]
    ]
    const score = PILE1 + PILE2 + PILE3

    expect(getStackScore(stack)).toBe(score)
  })

  it('should score piles with multiple cards', () => {
    const PILE1_BOT = 1
    const PILE1_TOP = 3

    const PILE2_BOT = 7
    const PILE2_TOP = 11

    const stack = [
      [PILE1_BOT, PILE1_TOP],
      [PILE2_BOT, PILE2_TOP]
    ]
    const score = PILE1_BOT + PILE2_BOT

    expect(getStackScore(stack)).toBe(score)
  })
})
