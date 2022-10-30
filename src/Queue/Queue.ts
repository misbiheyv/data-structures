import { CanUndef } from "../interface";
import LinkedList from "../LinkedList/LinkedList"
import { AbstractQueue } from "./interface";

export default class Queue<T> implements AbstractQueue<T> {
    public get size(): number {
        return this.store.length;
    }

    public get isEmpty(): boolean {
        return this.size === 0;
    }

    protected store = new LinkedList<T>();

    public enqueue(data: T): void {
        this.store.insertLast(data);
    }

    public dequeue(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.deleteFirst();
    }

    public peek(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.first ? this.store.first.data : undefined;
    }
}