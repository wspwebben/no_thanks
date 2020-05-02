export default function (playersIds) {
  const playersCount = playersIds.length

  return function (currentId) {
    const idIndex = playersIds.findIndex(id => id === currentId)
    const nextIdIndex = (idIndex + 1) % playersCount

    return playersIds[nextIdIndex]
  }
}
