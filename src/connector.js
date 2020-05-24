import createGame from './game/createGame';

import { MOVE_DECLINE, MOVE_TAKE } from './game/consts';

const EVENTS = {
  GAME: 'game',
};

class Game {
  constructor(sockets, players) {
    this.sockets = sockets;
    this.isPlaying = true;

    this.onMessage = this.onMessage.bind(this);
    this.bindEvents();

    this.game = createGame(players);
    // initialize game
    const { value: state } = this.game.next();
    this.sendGameState(state);
  }

  bindEvents() {
    this.sockets.forEach(socket => {
      socket.on(EVENTS.GAME, this.onMessage);
    })
  }

  unbindEvents() {
    this.sockets.forEach(socket => {
      socket.off(EVENTS.GAME, this.onMessage);
    })
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
      this.sendPlayersScore(state.players);
      return;
    }

    this.sendGameState(state);
  }

  sendGameState(state) {
    this.sockets.forEach(socket => {
      socket.emit(EVENTS.GAME, state);
    })
  }

  sendPlayersScore(players) {
    this.isPlaying = false;
    this.unbindEvents();
  }
}

export default Game;
