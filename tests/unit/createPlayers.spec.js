import { MIN_PLAYERS, MAX_PLAYERS } from '@/logic/consts'

import createPlayers from '@/logic/createPlayers'

describe('creating players from data', () => {
  it('should create players', () => {
    const PLAYER1_NAME = 'Artyom'
    const PLAYER2_NAME = 'Nikita'
    const PLAYER3_NAME = 'Mark'

    const data = [
      {
        name: PLAYER1_NAME
      },
      {
        name: PLAYER2_NAME
      },
      {
        name: PLAYER3_NAME
      }
    ]

    const [players, ids] = createPlayers(data)

    expect(ids.length).toBe(3)
    expect(Object.keys(players).length).toBe(ids.length)

    for (const id of ids) {
      const player = players[id]

      expect(player).toBeDefined()
      expect([PLAYER1_NAME, PLAYER2_NAME, PLAYER3_NAME].includes(player.name))
    }
  })

  it('should throw if theres not enough players', () => {
    const PLAYER1_NAME = 'Artyom'
    const PLAYER2_NAME = 'Nikita'

    const data = [
      {
        name: PLAYER1_NAME
      },
      {
        name: PLAYER2_NAME
      }
    ]

    expect(data.length).toBeLessThan(MIN_PLAYERS)

    expect(() => {
      createPlayers(data)
    }).toThrow()
  })

  it('should throw if theres too much players', () => {
    const PLAYER1_NAME = 'Tester'

    const data = Array.from({ length: 10 }, (_, i) => ({ name: `${PLAYER1_NAME}_${i}` }))

    expect(data.length).toBeGreaterThan(MAX_PLAYERS)

    expect(() => {
      createPlayers(data)
    }).toThrow()
  })
})
