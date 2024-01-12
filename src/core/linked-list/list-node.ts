import { IListNode, ListNodePointer } from 'core/linked-list/interface';

export default class ListNode<T> implements IListNode<T> {
  data: T
  prev: ListNodePointer<T>
  next: ListNodePointer<T>

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