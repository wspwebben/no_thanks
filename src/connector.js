import createGame from './game/createGame';

import { MOVE_DECLINE, MOVE_TAKE } from './game/consts';

const EVENTS = {
  GAME: 'game',
};

class Game {
  constructor(io, socket, players) {
    this.io = io;
    this.socket = socket;
    this.isPlaying = true;

    this.game = createGame(players);
    socket.on(EVENTS.GAME, this.onMessage.bind(this));
  }

  isCurrentPlayer(id) {
    return true;
  }

  onMessage({ id, move }) {    
    if (![MOVE_DECLINE, MOVE_TAKE].includes(move)) return;
    if (!this.isCurrentPlayer(id)) return
    
    this.nextTurn(move);
  }

  nextTurn(move) {
    const { value: state, done } = this.game.next(move);

    if (done) {
      this.showWinner(state.players);
      return;
    }

    this.showMove(state);
  }

  showMove(state) {
    console.log(state);
  }

  showWinner(players) {
    console.log(players);
    this.isPlaying = false;
    this.socket.off(EVENTS.GAME, this.onMessage);
  }
}

export default Game;
