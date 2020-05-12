export default function * (start = 1) {
  let currentId = start

  while (true) {
    yield currentId++
  }
}
