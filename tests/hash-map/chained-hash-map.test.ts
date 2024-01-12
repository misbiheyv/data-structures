import {ChainedHashMap} from 'core/hash-map';

describe('ChainedHashMap', () => {
  const map = new ChainedHashMap();

  test('contract', () => {
    map.set('name', 'Misha');
    map.set('age', 20);
    map.set('sex', 'male');
    map.set('job', 'programmer');
    map.set('etc', 'etc');

    expect(map.get('name')).toEqual('Misha');
    expect(map.get('age')).toEqual(20);
    expect(map.get('sex')).toEqual('male');
    expect(map.get('job')).toEqual('programmer');
    expect(map.get('etc')).toEqual('etc');

    expect(map.has('name')).toEqual(true);
    expect(map.has('qwe')).toEqual(false);

    expect(map.size).toEqual(5);
  });

  test('delete and clear', () => {
    map.delete('etc');
    map.delete('age');

    expect(map.size).toEqual(3);
    expect(map.has('age')).toEqual(false);

    map.clear();

    expect(map.size).toEqual(0);
    expect(map.has('name')).toEqual(false);
  });

  test('iterator', () => {
    map.set('name', 'Misha');
    map.set('age', 20);

    let target: any[] = Array.from(map).sort();
    let example: any[] = [['name', 'Misha'], ['age', 20]].sort();

    expect(same(example, target)).toEqual(true);

    target = Array.from(map.values()).sort();
    example = [['Misha'], [20]].sort();

    expect(same(example, target)).toEqual(true);

    target = Array.from(map.keys()).sort();
    example = [['name'], ['age']].sort();

    expect(same(example, target)).toEqual(true);
  });


  function same(arr1: { toString(): string }[], arr2: { toString(): string }[]) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const normalizedArr1 = arr1.map(el => el.toString());
    const normalizedArr2 = arr2.map(el => el.toString());

    for (const el of normalizedArr1) {
      if (!normalizedArr2.includes(el)) {
        return false;
      }
    }

    return true;
  }
});
