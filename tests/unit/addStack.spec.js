import addStack from '@/logic/addStack'

describe('adding cards', () => {
  it('should add card to empty stack', () => {
    const source = []

    const number = 1
    const result = [
      [1, 1]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add separate card from left edge', () => {
    const source = [
      [3, 6]
    ]

    const number = 1
    const result = [
      [1, 1],
      [3, 6]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add separate card from right edge', () => {
    const source = [
      [3, 6]
    ]

    const number = 9
    const result = [
      [3, 6],
      [9, 9]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add separate card between intervals', () => {
    const source = [
      [3, 6],
      [12, 13]
    ]

    const number = 9
    const result = [
      [3, 6],
      [9, 9],
      [12, 13]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add card to interval from left', () => {
    const source = [
      [3, 6]
    ]

    const number = 2
    const result = [
      [2, 6]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add card to interval from right', () => {
    const source = [
      [3, 6]
    ]

    const number = 7
    const result = [
      [3, 7]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should add card and merge', () => {
    const source = [
      [3, 6],
      [8, 10]
    ]

    const number = 7
    const result = [
      [3, 10]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should not merge if next interval is not connected', () => {
    const source = [
      [3, 6],
      [9, 10]
    ]

    const number = 7
    const result = [
      [3, 7],
      [9, 10]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('should not merge if current interval is the last one', () => {
    const source = [
      [3, 6],
      [9, 10]
    ]

    const number = 11
    const result = [
      [3, 6],
      [9, 11]
    ]

    expect(addStack(number, source)).toEqual(result)
  })

  it('works with multiple intervals', () => {
    const source = [
      [3, 6],
      [8, 10],
      [13, 14],
      [16, 16]
    ]

    const number1 = 7
    const result1 = [
      [3, 10],
      [13, 14],
      [16, 16]
    ]

    const number2 = 15
    const result2 = [
      [3, 6],
      [8, 10],
      [13, 16]
    ]

    expect(addStack(number1, source)).toEqual(result1)
    expect(addStack(number2, source)).toEqual(result2)
  })

  it('doesnt mutate source data', () => {
    const source = [
      [3, 6]
    ]

    const number = 2
    const copy = [...source]

    addStack(number, source)
    expect(source).toEqual(copy)
  })
})
