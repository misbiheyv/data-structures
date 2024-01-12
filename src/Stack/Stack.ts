import { AbstractStack } from './interface'

export default class Stack<T> implements AbstractStack<T> {
  get maxSize(): number {
    return this._size;
  }

  get elementsCount(): number {
    return this._elementsCount > this.maxSize ? this.maxSize : this._elementsCount;
  }

  protected set elementsCount(v: number) {
    this._elementsCount = v;
  }


  protected store: Array<T>;

  protected _size: number;

  protected _elementsCount: number = 0;


  constructor(size: number) {
    this.store = new Array(size);
    this._size = size;
  }


  push(data: T): void {
    if (this.elementsCount >= this.maxSize) throw new Error('Stack is full already.')

    this.store[this.elementsCount++] = data;
  }

  pop(): CanUndef<T> {
    if (this.elementsCount <= 0) throw new Error('Stack is empty.');
    return this.store[--this.elementsCount];
  }

  peek(): CanUndef<T> {
    if (this.elementsCount <= 0) throw new Error('Stack is empty.')

    return this.store[this.elementsCount - 1]
  }

  clear(): void {
    this.store = new Array(this.maxSize);
    this.elementsCount = 0;
  }

}