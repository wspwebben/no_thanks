import createDeck from './createDeck'
import createPlayers from './createPlayers'
import getNextPlayerId from './getNextPlayerId'
import addStack from './addStack'
import getStackScore from './getStackScore'

import { REFUSE_COST } from './consts'

export default function * createGame (playersData) {
  const deck = createDeck()
  const [players, playersId] = createPlayers(playersData)
  const getNextPlayer = getNextPlayerId(playersId)

  let currentPlayerId = playersId[0]
  let moneyStack = 0

  yield {
    players
  }

  while (deck.length) {
    const currentCard = deck.pop()

    let canTake = true

    while (canTake) {
      const isTaken = yield {
        currentCard,
        players,
        currentPlayerId,
        moneyStack
      }

      const currentPlayer = players[currentPlayerId]

      if (isTaken) {
        if (currentPlayer.money >= REFUSE_COST) {
          // const updatedPlayer = changeMoney(currentPlayer, moneyStack)
          // updatedPlayer.stack = addStack(currentCard, updatedPlayer.stack)
          currentPlayer.money += moneyStack
          currentPlayer.stack = addStack(currentCard, currentPlayer.stack)
          moneyStack = 0

          canTake = false
        }
        // players[currentPlayerId] = updatedPlayer
      } else {
        currentPlayer.money -= REFUSE_COST
        // players[currentPlayerId] = changeMoney(currentPlayer, -1)
        moneyStack += REFUSE_COST

        currentPlayerId = getNextPlayer(currentPlayerId)
      }
    }

    const scores = Object.entries(players).map(([id, { money, stack }]) => {
      return {
        id,
        score: money - getStackScore(stack)
      }
    }).sort((a, b) => a.score - b.score)

    yield {
      players,
      scores
    }
  }
}
