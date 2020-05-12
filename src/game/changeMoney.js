export default function (player, change) {
  const { money, ...rest } = player

  return {
    ...rest,
    money: money + change
  }
}
