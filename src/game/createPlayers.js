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


  return playersData.map(({ name: id }, i) => {
    // const { value: id } = idGenerator.next();
    const name = String.fromCharCode(65 + i).repeat(5);

    return new Player(name, id, startingMoney);
  });
}
