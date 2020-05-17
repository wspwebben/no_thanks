import { MOVE_DECLINE, MOVE_TAKE } from './game/consts';

import createGame from './game/createGame';

const playersData = [
  {
    name: 'Anton'
  },
  {
    name: 'Boris'
  },
  { 
    name: 'Carl'
}];
const game = createGame(playersData)
let isPlaying = true;

const { value: players } = game.next();
console.log(players);

while (isPlaying) {
  const willDecline = Math.random() > 0.5;
  
  const { value: turn, done } = game.next(willDecline ? MOVE_DECLINE : MOVE_TAKE);
  console.log(turn);

  if (done) {
    isPlaying = false;
  }
}
