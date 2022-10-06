import { 

	IListNode,
	ListNodeData,
	ListNodePointer

} from './interface';

export default class ListNode implements IListNode {
	public data?: ListNodeData
	public prev: ListNodePointer
	public next: ListNodePointer

	constructor(data: ListNodeData | undefined, prev?: ListNodePointer, next?: ListNodePointer) {
		this.data = data
		this.prev = prev
		this.next = next
	}
}