import changeMoney from '@/logic/changeMoney'

describe('changing player\'s money ', () => {
  it('should count money correctly', () => {
    const STARTING_MONEY = 7
    const PLAYER_ID = 1

    const players = {
      [PLAYER_ID]: {
        id: PLAYER_ID,
        name: 'Player 1',
        money: STARTING_MONEY,
        stack: []
      }
    }

    const DECREASE = -1
    const INCREASE = 5

    players[PLAYER_ID] = changeMoney(players[PLAYER_ID], DECREASE)
    expect(players[PLAYER_ID].money).toBe(STARTING_MONEY + DECREASE)

    players[PLAYER_ID] = changeMoney(players[PLAYER_ID], INCREASE)
    expect(players[PLAYER_ID].money).toBe(STARTING_MONEY + INCREASE + DECREASE)
  })
})
