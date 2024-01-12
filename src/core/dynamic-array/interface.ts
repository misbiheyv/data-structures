/* eslint-disable no-unused-vars */
export interface AbstractDynamicArray<T> {
  size: number;

  get(index: number): CanUndef<T>;

  set(index: number, data: T): void;

  add(data: T): void;

  delete(index: number): void;

  values(): IterableIterator<CanUndef<T>>;

  entries(): IterableIterator<[number, CanUndef<T>]>;
}
