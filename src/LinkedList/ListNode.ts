import {

    IListNode,
    ListNodePointer

} from './interface';

export default class ListNode<T> implements IListNode<T> {
    public data: T
    public prev: ListNodePointer<T>
    public next: ListNodePointer<T>

    constructor(
        data: T,
        prev?: ListNodePointer<T>,
        next?: ListNodePointer<T>
    ) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}