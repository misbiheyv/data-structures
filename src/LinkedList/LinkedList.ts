import {

	IListNode,
	ILinkedList,
	ListNodeData,
	ListDirection,
	ListNodePointer,
	CanUndef

} from './interface';

import ListNode from './ListNode';


export default class LinkedList<T> implements ILinkedList<T> {

	public get first(): CanUndef<IListNode<T>> {
		return this.left;
	}

	public get last(): CanUndef<IListNode<T>> {
		return this.right;
	}

	public get length(): number {
		return this.size;
	}


	protected left?: IListNode<T>;

	protected right?: IListNode<T>;

	protected size = 0;
	

	public insertFirst(data: ListNodeData<T>): void {
		if (this.left === undefined) {
			this.left = new ListNode(data);
			this.right = this.left;
		} else {
			this.left.prev = new ListNode(data, undefined, this.left);
			this.left = this.left.prev;
		}

		this.size++;
	}

	public insertLast(data: ListNodeData<T>): void {
		if (this.right === undefined) {
			this.right = new ListNode(data);
			this.left = this.right;
		} else {
			this.right.next = new ListNode(data, this.right);
			this.right = this.right.next;
		}

		this.size++;
	}

	public deleteFirst(): CanUndef<ListNodeData<T>> {
		if (this.size <= 0 || this.left === undefined) throw new Error('List is empty.');
		
		let res;

		if (this.size === 1) {
			res = this.left.data;

			this.left = undefined;
			this.right = undefined;
		} else {
			res = this.left.data;
			this.left = this.left.next;
			this.left!.prev = undefined;
		}

		this.size--;

		return res;
	}

	public deleteLast(): CanUndef<ListNodeData<T>> {
		if (this.size <= 0 || this.right === undefined) throw new Error('List is empty.');
		
		let res;

		if (this.size === 1) {
			res = this.right.data;

			this.right = undefined;
			this.left = undefined;
		} else {
			res = this.right.data;
			this.right = this.right.prev;
			this.right!.next = undefined;
		}

		this.size--;

		return res;
	}

	public insertAfter(key: ListNodeData<T>, data: ListNodeData<T>): boolean {
		if (this.size <= 0 || this.left === undefined || this.right === undefined) 
			throw new Error('List is empty.');

		if (this.right.data === key) {
			this.insertLast(data);
			return true;
		}

		let cur: ListNodePointer<T> = this.left;

		while (cur) {
			if (cur.data !== key) {
				cur = cur.next;
				continue ;
			}

			cur.next = new ListNode(data, cur, cur.next);
			cur.next.next!.prev = cur.next;
			this.size++;

			return true;
		}

		return false;
	}

	public delete(value: ListNodeData<T>): CanUndef<ListNodeData<T>> {
		if (this.size <= 0 || this.left === undefined || this.right === undefined) 
			throw new Error('List is empty.');

		if (this.left.data === value) return this.deleteFirst();

		if (this.right.data === value) return this.deleteLast();

		let cur = this.left.next

		while (cur) {
			if (cur.data !== value) {
				cur = cur.next
				continue ;
			}

			const res = cur;

			cur.prev!.next = cur.next
			cur.next!.prev = cur.prev
			this.size--;

			return res.data;
		}
	}

	public deleteAll(value: ListNodeData<T>): boolean {
		if (this.size <= 0 || this.left === undefined || this.right === undefined) 
			throw new Error('List is empty.');

		let 
			deleteSomeone: boolean = false,
			cur: ListNodePointer<T> = this.left

		while (cur) {
			if (cur.data !== value) {
				cur = cur.next
				continue ;
			}

			if (cur.next === undefined) {
				this.deleteLast()

			} else if (cur.prev === undefined) {
				this.deleteFirst()

			} else {
				cur.prev.next = cur.next
				cur.next.prev = cur.prev
				this.size--;
			}

			cur = cur.next;
			deleteSomeone = true;
		}

		return deleteSomeone;
	}

	public showList(direction: ListDirection = 'regular'): void {
		if (direction === 'regular') {
			let cur = this.left;
	
			while (cur) {
				console.log(cur.data);
				cur = cur.next;
			}

			return ;
		}

		let cur = this.right;
	
		while (cur) {
			console.log(cur.data);
			cur = cur.prev;
		}
	}

	public clear(): void {
		this.left = undefined;
		this.right = undefined;
		this.size = 0;
	}
}