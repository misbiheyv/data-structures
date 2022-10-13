import { CanUndef } from "../interface";
import LinkedList from "../LinkedList/LinkedList";
import AbstractDeque from "./interface";

export default class Deque<T> implements AbstractDeque<T> {
    private store = new LinkedList<T>();

    public get size(): number {
        return this.store.length;
    }

    public get isEmpty(): boolean {
        return this.size === 0;
    }

    public append(data: T): void {
        this.store.insertLast(data);
    }

    public prepend(data: T): void {
        this.store.insertFirst(data);
    }

    public deleteFirst(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.deleteFirst();
    }

    public deleteLast(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.deleteLast();
    }

    public peekFirst(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.first ? this.store.first.data : undefined;
    }

    public peekLast(): CanUndef<T> {
        if (this.size <= 0) throw new Error('Queue is empty.')
        return this.store.last ? this.store.last.data : undefined;
    }
}