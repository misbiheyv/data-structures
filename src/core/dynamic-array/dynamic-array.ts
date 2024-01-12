import LinkedList, { IListNode } from 'core/linked-list';
import type { AbstractDynamicArray } from 'core/dynamic-array/interface';

export default class DynamicArray<T> implements AbstractDynamicArray<T> {

  protected arrSize: number;

  protected list: LinkedList<CanUndef<T>[]> = new LinkedList();

  protected currentLength: number = 0;

  get size(): number {
    return this.currentLength;
  }

  constructor(arraySize: number) {
    this.arrSize = arraySize;
  }

  add(data: T): void {
    if (this.list.length === 0) {
      this.list.insertFirst(new Array<T>(this.arrSize));
    }

    const arrIndex = this.getArrIndex(this.currentLength);
    let el = this.getElementByIndex(this.currentLength);

    if (el === undefined) {
      this.list.insertLast(new Array<T>(this.arrSize));
      el = this.list.last;
    }

    el!.data[arrIndex] = data;
    this.currentLength++;
  }

  get(index: number): CanUndef<T> {
    const arrIndex = this.getArrIndex(index);
    return this.getElementByIndex(index)!.data[arrIndex];
  }

  set(index: number, data: T): void {
    const arrIndex = this.getArrIndex(index);
    this.getElementByIndex(index)!.data[arrIndex] = data;
  }

  delete(index: number): void {
    if (index > this.size || index < 0) {
      throw new Error('Index out of bounds.');
    }

    for (let i = 0; i < this.currentLength - index - 1; i++) {
      this.getElementByIndex(index + i)!.data[this.getArrIndex(index + i)] =
        this.getElementByIndex(index + i + 1)?.data[this.getArrIndex(index + i + 1)];
    }

    this.currentLength--;
  }

  [Symbol.iterator](): IterableIterator<CanUndef<T>> {
    return this.values();
  }

  *values(): IterableIterator<CanUndef<T>> {
    let j = 0;

    for (const el of this.list) {
      for (let i = 0; i < el.length && j < this.currentLength; i++, j++) {
        yield el[i];
      }
    }
  }

  *entries(): IterableIterator<[number, CanUndef<T>]> {
    let j = 0;

    for (const el of this.list) {
      for (let i = 0; i < el.length && j < this.currentLength; i++, j++) {
        yield [j, el[i]];
      }
    }
  }

  protected getElementByIndex(globalIndex: number): CanUndef<IListNode<CanUndef<T>[]>> {
    const listNumber = this.getListNumber(globalIndex);

    let cur = this.list.first;

    for (let i = 0; i < listNumber; i++) {
      cur = cur?.next;
    }

    return cur;
  }

  protected getListNumber(globalIndex: number) {
    return Math.floor(globalIndex / this.arrSize);
  }

  protected getArrIndex(globalIndex: number) {
    return globalIndex > this.arrSize - 1 ? globalIndex % this.arrSize : globalIndex;
  }
}
