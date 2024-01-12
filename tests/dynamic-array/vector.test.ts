import {Vector} from 'core/dynamic-array';

describe('Vector', () => {
  let vector = new Vector(2);

  beforeEach(() => {
    vector = new Vector(2)

    vector.add(1)
    vector.add(2)
    vector.add(3)
    vector.add(4)
  });

  test('iterator', () => {
    expect(Array.from(vector)).toEqual([1, 2, 3, 4])

    expect(Array.from(vector.entries())).toEqual([[0, 1], [1, 2], [2, 3], [3, 4]])
  });

  test('delete', () => {
    expect(vector.size).toEqual(4)

    vector.delete(0)
    expect(Array.from(vector)).toEqual([2, 3, 4])

    vector.delete(2)
    expect(Array.from(vector)).toEqual([2, 3])

    vector.delete(1)
    expect(Array.from(vector)).toEqual([2])

    vector.delete(0)
    expect(Array.from(vector)).toEqual([])

    expect(vector.size).toEqual(0)
  });

  test('get and set', () => {
    vector.set(0, 10)
    expect(vector.get(0)).toEqual(10)

    vector.set(3, 10)
    expect(vector.get(3)).toEqual(10)

    vector.set(1, 10)
    expect(vector.get(1)).toEqual(10)
  })

  test('corner cases', () => {
    expect(() => vector.set(10, 10)).toThrow()

    expect(() => vector.get(11)).toThrow()

    expect(() => vector.get(10)).toThrow()
  })

});