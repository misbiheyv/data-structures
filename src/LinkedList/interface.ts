import type { CanUndef } from "../interface";

export interface ILinkedList<T> {

    first: CanUndef<IListNode<T>>;
    last: CanUndef<IListNode<T>>;
    length: number;

    insertFirst(data: T): void;
    insertLast(data: T): void;

    deleteFirst(): CanUndef<T>;
    deleteLast(): CanUndef<T>;

    insertAfter(key: T, data: T): boolean;
    delete(value: T): CanUndef<T>;
    deleteAll(value: T): void;

    has(data: T): boolean;
    clear(): void;

    showList(direction: ListDirection): void;

    [Symbol.iterator](): IterableIterator<T>;
    items(): IterableIterator<ListNodeView<T>>;
    itemsReverse(): IterableIterator<ListNodeView<T>>;
    values(): IterableIterator<T>;
    valuesReverse(): IterableIterator<T>;
}


export interface IListNode<T> {

    data: T
    next: ListNodePointer<T>
    prev: ListNodePointer<T>

}


export interface ListNodeView<T> {
    readonly data: T
    readonly next: ListNodePointer<T>
    readonly prev: ListNodePointer<T>
}

export type ListNodePointer<T> = CanUndef<IListNode<T>>;


export type ListDirection = 'regular' | 'inverted'