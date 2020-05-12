export default function (stack) {
  return stack.reduce((score, [lowest]) => score + lowest, 0)
}
