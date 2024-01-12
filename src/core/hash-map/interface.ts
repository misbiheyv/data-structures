/* eslint-disable no-unused-vars */
export interface HashTable<K extends Stringifiable, V> {

  size: number;

  get(key: K): CanUndef<V>;

  set(key: K, data: V): void;

  delete(key: K): void;

  has(key: K): boolean;

  clear(): void;

  [Symbol.iterator](): IterableIterator<[K, V]>

  entries(): IterableIterator<[K, V]>;

  values(): IterableIterator<V>;

  keys(): IterableIterator<K>;
}

export type Stringifiable = { toString(): string }
