import shuffle from '@/logic/shuffle'

describe('shuffling array', () => {
  it('should keep length', () => {
    const length = 10
    const array = Array.from({ length })

    expect(array.length).toBe(length)
    expect(shuffle(array).length).toBe(length)
  })

  it('should not mutate source array', () => {
    const array = Array.from({ length: 10 })
    const copy = [...array]
    const shuffled = shuffle(array)

    expect(shuffled).not.toBe(array)
    expect(array).toEqual(copy)
  })

  /* takes too long
  it('should have same probability for every variant', () => {
    const array = [1, 2, 3]
    const count = {
      123: 0,
      132: 0,
      213: 0,
      231: 0,
      312: 0,
      321: 0
    }

    const iterationsCount = 1000000
    const perfectDistribution = iterationsCount / 6

    for (let i = 0; i < iterationsCount; i++) {
      const shuffled = shuffle(array)
      count[shuffled.join('')] += 1
    }

    Object.values(count).forEach(distribution => {
      const ratio = distribution / perfectDistribution

      expect(ratio).toBeGreaterThanOrEqual(0.99)
      expect(ratio).toBeLessThanOrEqual(1.01)
    })
  }) */
})
