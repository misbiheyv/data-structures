export interface ILinkedList<T> {

    first: CanUndef<IListNode<T>>;
    last: CanUndef<IListNode<T>>;
    length: number;

    insertFirst(data: ListNodeData<T>): void;
    insertLast(data: ListNodeData<T>): void;

    deleteFirst(): CanUndef<ListNodeData<T>>;
    deleteLast(): CanUndef<ListNodeData<T>>;

    insertAfter(key: ListNodeData<T>, data: ListNodeData<T>): boolean;
    delete(value: ListNodeData<T>): CanUndef<ListNodeData<T>>;

    clear(): void;

    showList(direction: ListDirection): void;

}


export interface IListNode<T> {

    data: ListNodeData<T>
    next: ListNodePointer<T>
    prev: ListNodePointer<T>

}


export type ListNodePointer<T> = CanUndef<IListNode<T>>;


export type ListNodeData<T> = T


export type ListDirection = 'regular' | 'inverted'


export type CanUndef<T> = T | undefined;