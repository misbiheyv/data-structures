import { HashTable, Stringifiable } from 'core/hash-map/interface';
import LinkedList from 'core/linked-list';
import { Vector } from 'core/dynamic-array';

export default class ChainedHashMap<K extends Stringifiable, V> implements HashTable<K, V> {

  protected capacity: number;

  protected count: number = 0;

  protected store: Vector<LinkedList<[K, V]>>;

  protected maxFillingRatio = 2;

  protected get fillingRatio(): number {
    return this.count / this.capacity;
  }

  get size(): number {
    return this.count;
  }

  constructor(size?: number) {
    this.capacity = size ?? 1;

    this.store = new Vector<LinkedList<[K, V]>>(this.capacity).fill(LinkedList<[K, V]>);
  }

  set(key: K, data: V): void {

    if (this.fillingRatio >= this.maxFillingRatio) {
      this.rehashing();
    }

    this.count++;

    const
      index = this.getHash(key),
      el = this.store.get(index);

    el?.insertLast([key, data]);
  }

  get(key: K): CanUndef<V> {
    const
      index = this.getHash(key),
      node = this.store.get(index);

    if (node === undefined) {
      return node;
    }

    for (const el of node) {
      if (el[0] === key) {
        return el[1];
      }
    }
  }

  delete(key: K): void {
    const
      index = this.getHash(key),
      node = this.store.get(index);


    if (node instanceof LinkedList) {
      for (const el of node) {
        if (el[0] !== key) {
          continue;
        }

        node.delete(el);
        this.count--;
      }
    }
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  clear(): void {
    for (const list of this.store) {
      list?.clear();
    }
    this.count = 0;
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  *entries(): IterableIterator<[K, V]> {
    for (const list of this.store) {
      if (list === undefined) {
        continue;
      }

      for (const node of list) {
        yield node;
      }
    }
  }

  *values(): IterableIterator<V> {
    for (const el of this) {
      yield el[1];
    }
  }

  *keys(): IterableIterator<K> {
    for (const el of this) {
      yield el[0];
    }
  }

  protected getHash(data: K): number {
    const k = 10;

    return [...data.toString().normalize()].reduce((sum, char, index) => sum += index ** k * (char.codePointAt(0) ?? 1), 0) % this.capacity;
  }

  protected rehashing() {
    this.count = 0;
    const oldStore = this.store;
    this.capacity *= 2;
    this.store = new Vector<LinkedList<[K, V]>>(this.capacity).fill(LinkedList<[K, V]>);

    for (const list of oldStore) {
      if (list === undefined) {
        continue;
      }

      for (const [k, v] of list) {
        this.set(k, v);
      }
    }
  }
}
