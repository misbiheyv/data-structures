import {DynamicArray} from 'core/dynamic-array';

describe('DynamicArray', () => {
  let dynamicArray = new DynamicArray(3);

  beforeEach(() => {
    dynamicArray = new DynamicArray(3);

    dynamicArray.add(1);
    dynamicArray.add(2);
    dynamicArray.add(3);
    dynamicArray.add(4);
    dynamicArray.add(5);
    dynamicArray.add(6);
    dynamicArray.add(7);
  });

  test('get and set', () => {
    expect(dynamicArray.get(0)).toEqual(1);
    dynamicArray.set(0, 10);
    expect(dynamicArray.get(0)).toEqual(10);

    expect(dynamicArray.get(3)).toEqual(4);
    dynamicArray.set(3, 10);
    expect(dynamicArray.get(3)).toEqual(10);

    expect(dynamicArray.get(6)).toEqual(7);
    dynamicArray.set(6, 10);
    expect(dynamicArray.get(6)).toEqual(10);
  });

  test('iterator', () => {
    expect(Array.from(dynamicArray)).toEqual([1, 2, 3, 4, 5, 6, 7]);

    expect(Array.from(dynamicArray.entries())).toEqual([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
  });

  test('delete', () => {
    dynamicArray.delete(0);
    expect(Array.from(dynamicArray)).toEqual([2, 3, 4, 5, 6, 7]);

    dynamicArray.delete(5);
    expect(Array.from(dynamicArray)).toEqual([2, 3, 4, 5, 6]);

    dynamicArray.delete(3);
    expect(Array.from(dynamicArray)).toEqual([2, 3, 4, 6]);

    expect(dynamicArray.size).toEqual(4);
  });

  test('corner cases', () => {
    expect(() => dynamicArray.delete(10)).toThrow('Index out of bounds.');

    expect(() => dynamicArray.delete(-1)).toThrow('Index out of bounds.');
  });

});
