function pushCard (number, source) {
  const stacks = [...source]

  for (let i = 0; i < stacks.length; i += 1) {
    const [first, last] = stacks[i]

    if (number + 1 < first) {
      stacks.splice(i, 0, [number, number])
      return stacks
    }

    if (number + 1 === first) {
      stacks[i] = [number, last]
      return stacks
    }

    if (number - 1 === last) {
      // нужно проверить следующий интервал, возможно требуется их склеить
      const nextStack = stacks[i + 1]

      if (nextStack) {
        const [nextFirst, nextLast] = nextStack
        if (number + 1 === nextFirst) {
          stacks.splice(i, 2, [first, nextLast])
          return stacks
        }
      }

      stacks[i] = [first, number]
      return stacks
    }
  }

  stacks.push([number, number])
  return stacks
}

export default pushCard
