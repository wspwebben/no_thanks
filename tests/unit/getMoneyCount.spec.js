import getMoneyCount from '@/logic/getMoneyCount'

describe('counting money as described in rules', () => {
  it('should give enough money in 3-5 games', () => {
    const money = 11
    const playersCount = [3, 4, 5]

    for (const players of playersCount) {
      expect(getMoneyCount(players)).toBe(money)
    }
  })

  it('should give enough money in 6 players game', () => {
    const money = 9
    const players = 6

    expect(getMoneyCount(players)).toBe(money)
  })

  it('should give enough money in 6 players game', () => {
    const money = 7
    const players = 7

    expect(getMoneyCount(players)).toBe(money)
  })
})
