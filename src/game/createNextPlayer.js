export default function (players) {
  const playersCount = players.length

  return function (currentPlayer) {
    const index = players.findIndex(player => player.id === currentPlayer.id);
    const nextIndex = (index + 1) % playersCount;

    return players[nextIndex]
  }
}
