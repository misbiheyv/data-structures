import { CanUndef } from "../interface";

export interface AbstractQueue<T> {
    size: number;

    isEmpty: boolean;

    enqueue(data: T): void;

    dequeue(): CanUndef<T>;

    peek(): CanUndef<T>;
}