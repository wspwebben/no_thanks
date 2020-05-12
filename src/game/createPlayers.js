import { MIN_PLAYERS, MAX_PLAYERS } from '@/logic/consts'

import getMoneyCount from '@/logic/getMoneyCount'
import createIdGenerator from '@/logic/createIdGenerator'

export default function createPlayers (playersData) {
  if (playersData.length < MIN_PLAYERS) {
    throw new Error('There\'s not enough playerys')
  }

  if (playersData.length > MAX_PLAYERS) {
    throw new Error('There\'s too much playerys')
  }

  const players = {}
  const playersId = []
  const idGenerator = createIdGenerator()
  const startingMoney = getMoneyCount(playersData.length)

  for (const { name } of playersData) {
    const { value: id } = idGenerator.next()

    playersId.push(id)
    players[id] = {
      id,
      name,
      money: startingMoney,
      stack: []
    }
  }

  return [players, playersId]
}
