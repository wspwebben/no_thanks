import { MIN_VALUE, MAX_VALUE, REMOVED_CARDS, INITIAL_BANK, MOVE_DECLINE, MOVE_TAKE } from './consts';

import createDeck from './createDeck';
import createPlayers from './createPlayers';
import createNextPlayer from './createNextPlayer';

export default function * createGame (playersData) {
  const deck = createDeck(MIN_VALUE, MAX_VALUE, REMOVED_CARDS)
  const players = createPlayers(playersData);
  const getNextPlayer = createNextPlayer(players);
  const getPublicInfo = () => players.map(player => player.publicInfo);
  const getPrivateInfo = () => players.map(player => player.privateInfo);

  let [currentPlayer] = players;
  let bank = INITIAL_BANK;


  yield {
    players: getPrivateInfo(),
  }

  while (deck.length) {
    const card = deck.pop()

    let isCardFree = true

    while (isCardFree) {
      const move = yield {
        card,
        bank,
        currentPlayer: currentPlayer.id,
        players: getPublicInfo(),
        _private: getPrivateInfo(),
      }

      switch (move) {
        case MOVE_DECLINE: {
          if (currentPlayer.canDecline) {
            const payment =  currentPlayer.declineCard()
            bank += payment;

            currentPlayer = getNextPlayer(currentPlayer);
          }
          break;
        }
        case MOVE_TAKE: {
          currentPlayer.takeCard(card, bank);
          bank = 0

          isCardFree = false
          break;
        }
      }
    }
  }

  const scoredPlayers = players.map(player => ({ 
    ...player.privateInfo
  })).sort((a, b) => a.score - b.score)
    .map((player, index) => ({ 
      ...player,
      place: index + 1
    }));


  return {
    players: scoredPlayers
  }
}
