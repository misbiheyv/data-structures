export interface ILinkedList {
	left?: IListNode;
	right?: IListNode;

	insertFirst(data: number): void;
	insertLast(data: ListNodeData): void;
	
	deleteFirst(): CanUndef<ListNodeData>;
	deleteLast(): CanUndef<ListNodeData>;
	
	insertAfter(key: ListNodeData, data: ListNodeData): boolean;
	delete(value: ListNodeData): CanUndef<ListNodeData>;

	showList(direction: ListDirection): void;
}

export interface IListNode {
	data?: ListNodeData
	next: ListNodePointer
	prev: ListNodePointer
}


export type ListNodePointer = CanUndef<IListNode>;

export type ListNodeData = number

export type ListDirection = 'regular' | 'inverted'


export type CanUndef<T> = T | undefined;