import LinkedList from 'core/linked-list';
import AbstractDeque from 'core/deque/interface';

export default class Deque<T> implements AbstractDeque<T> {
  protected store = new LinkedList<T>();

  get size(): number {
    return this.store.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  append(data: T): void {
    this.store.insertLast(data);
  }

  prepend(data: T): void {
    this.store.insertFirst(data);
  }

  deleteFirst(): CanUndef<T> {
    if (this.size <= 0) {
      throw new Error('Queue is empty.');
    }

    return this.store.deleteFirst();
  }

  deleteLast(): CanUndef<T> {
    if (this.size <= 0) {
      throw new Error('Queue is empty.');
    }

    return this.store.deleteLast();
  }

  peekFirst(): CanUndef<T> {
    if (this.size <= 0) {
      throw new Error('Queue is empty.');
    }

    return this.store.first ? this.store.first.data : undefined;
  }

  peekLast(): CanUndef<T> {
    if (this.size <= 0) {
      throw new Error('Queue is empty.');
    }

    return this.store.last ? this.store.last.data : undefined;
  }
}
