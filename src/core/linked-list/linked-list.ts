import ListNode from 'core/linked-list/list-node';

import type {

  IListNode,
  ILinkedList,
  ListDirection,
  ListNodeView,

} from 'core/linked-list/interface';


export default class LinkedList<T> implements ILinkedList<T>, Iterable<T> {

  get first(): CanUndef<IListNode<T>> {
    return this.left;
  }

  get last(): CanUndef<IListNode<T>> {
    return this.right;
  }

  get length(): number {
    return this.size;
  }


  protected left?: IListNode<T>;

  protected right?: IListNode<T>;

  protected size = 0;


  constructor(iterable?: Iterable<T>) {
    if (iterable) {
      for (const el of iterable) {
        this.insertLast(el);
      }
    }
  }


  insertFirst(data: T): void {
    if (this.left === undefined) {
      this.left = new ListNode(data);
      this.right = this.left;
    } else {
      this.left.prev = new ListNode(data, undefined, this.left);
      this.left = this.left.prev;
    }

    this.size++;
  }

  insertLast(data: T): void {
    if (this.right === undefined) {
      this.right = new ListNode(data);
      this.left = this.right;
    } else {
      this.right.next = new ListNode(data, this.right);
      this.right = this.right.next;
    }

    this.size++;
  }

  deleteFirst(): CanUndef<T> {
    if (this.size <= 0 || this.left === undefined) throw new Error('List is empty.');

    let res;

    if (this.size === 1) {
      res = this.left.data;

      this.left = undefined;
      this.right = undefined;
    } else {
      res = this.left.data;
      this.left = this.left.next;
      this.left!.prev = undefined;
    }

    this.size--;

    return res;
  }

  deleteLast(): CanUndef<T> {
    if (this.size <= 0 || this.right === undefined) throw new Error('List is empty.');

    let res;

    if (this.size === 1) {
      res = this.right.data;

      this.right = undefined;
      this.left = undefined;
    } else {
      res = this.right.data;
      this.right = this.right.prev;
      this.right!.next = undefined;
    }

    this.size--;

    return res;
  }

  insertAfter(key: T, data: T): boolean {
    if (this.size <= 0 || this.left === undefined || this.right === undefined)
      throw new Error('List is empty.');

    if (this.right.data === key) {
      this.insertLast(data);
      return true;
    }

    for (const cur of this.unsafeItems()) {
      if (cur.data === key) {

        cur.next = new ListNode(data, cur, cur.next);
        cur.next.next!.prev = cur.next;
        this.size++;

        return true;
      }
    }

    return false;
  }

  delete(value: T): CanUndef<T> {
    if (this.size <= 0 || this.left === undefined || this.right === undefined)
      throw new Error('List is empty.');

    if (this.left.data === value) return this.deleteFirst();

    if (this.right.data === value) return this.deleteLast();

    for (const cur of this.unsafeItems()) {
      if (cur.data === value) {
        const res = cur.data;

        cur.prev!.next = cur.next
        cur.next!.prev = cur.prev
        this.size--;

        return res;
      }
    }
  }

  deleteAll(value: T): boolean {
    if (this.size <= 0 || this.left === undefined || this.right === undefined)
      throw new Error('List is empty.');

    let deleteSomeone: boolean = false;

    for (const cur of this.unsafeItems()) {
      if (cur.data !== value) continue;

      if (cur.next === undefined) {
        this.deleteLast()

      } else if (cur.prev === undefined) {
        this.deleteFirst()

      } else {
        cur.prev.next = cur.next
        cur.next.prev = cur.prev
        this.size--;
      }

      deleteSomeone = true;
    }

    return deleteSomeone;
  }

  showList(direction: ListDirection = 'regular'): void {
    if (direction === 'regular') {
      for (const el of this) {
        console.log(el)
      }
      return;
    }

    for (const el of this.valuesReverse()) {
      console.log(el)
    }
  }

  clear(): void {
    this.left = undefined;
    this.right = undefined;
    this.size = 0;
  }

  has(value: T): boolean {
    for (const el of this) {
      if (el !== value) continue;

      return true;
    }
    return false;
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  *items(): IterableIterator<ListNodeView<T>> {
    let cur = this.left;

    while (cur) {
      yield cur;
      cur = cur.next;
    }
  }

  *itemsReverse(): IterableIterator<ListNodeView<T>> {
    let cur = this.right;

    while (cur) {
      yield cur;
      cur = cur.prev;
    }
  }

  *values(): IterableIterator<T> {
    let cur = this.left;

    while (cur) {
      yield cur.data;
      cur = cur.next;
    }
  }

  *valuesReverse(): IterableIterator<T> {
    let cur = this.right;

    while (cur) {
      yield cur.data;
      cur = cur.prev;
    }
  }

  *unsafeItems(reversed?: false): IterableIterator<ListNode<T>> {
    let cur = reversed ? this.right : this.left;

    while (cur) {
      yield cur;
      cur = reversed ? cur.prev : cur.next;
    }
  }
}