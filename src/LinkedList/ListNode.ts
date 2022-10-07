import {

    IListNode,
    ListNodeData,
    ListNodePointer

} from './interface';

export default class ListNode<T> implements IListNode<T> {
    public data: ListNodeData<T>
    public prev: ListNodePointer<T>
    public next: ListNodePointer<T>

    constructor(
        data: ListNodeData<T>,
        prev?: ListNodePointer<T>,
        next?: ListNodePointer<T>
    ) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}