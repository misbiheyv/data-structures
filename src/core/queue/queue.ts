import LinkedList from "core/linked-list"
import { AbstractQueue } from "core/queue/interface";

export default class Queue<T> implements AbstractQueue<T> {
  get size(): number {
    return this.store.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  protected store = new LinkedList<T>();

  enqueue(data: T): void {
    this.store.insertLast(data);
  }

  dequeue(): CanUndef<T> {
    if (this.size <= 0) throw new Error('Queue is empty.')
    return this.store.deleteFirst();
  }

  peek(): CanUndef<T> {
    if (this.size <= 0) throw new Error('Queue is empty.')
    return this.store.first ? this.store.first.data : undefined;
  }
}