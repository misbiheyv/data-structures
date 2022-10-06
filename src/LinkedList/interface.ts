export interface ILinkedList {
	left?: IListNode;
	right?: IListNode;

	insertFirst(data: number): void;
	insertLast(data: ListNodeData): void;
	
	deleteFirst(): ListNodeData;
	deleteLast(): ListNodeData;
	
	insertAfter(key: ListNodeData, data: ListNodeData): boolean;
	delete(value: ListNodeData): ListNodeData;

	showList(): void;
}

export interface IListNode {
	data?: ListNodeData
	next: ListNodePointer
	prev: ListNodePointer
}


export type ListNodePointer = IListNode | undefined

export type ListNodeData = number | undefined