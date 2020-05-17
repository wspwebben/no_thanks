import { MIN_PLAYERS, MAX_PLAYERS } from './consts'

import Player from './entities/Player';

import getMoneyCount from './getMoneyCount'
import createIdGenerator from './createIdGenerator'

export default function createPlayers (playersData) {
  if (playersData.length < MIN_PLAYERS) {
    throw new Error('There\'s not enough playerys')
  }

  if (playersData.length > MAX_PLAYERS) {
    throw new Error('There\'s too much playerys')
  }

  const idGenerator = createIdGenerator()
  const startingMoney = getMoneyCount(playersData.length)


  return playersData.map(({ name }) => {
    const { value: id } = idGenerator.next();
    return new Player(name, id, startingMoney);
  });
}
