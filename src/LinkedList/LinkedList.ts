import {

	IListNode,
	ILinkedList,
	ListNodeData

} from './interface';

import ListNode from './ListNode';

export default class LinkedList implements ILinkedList {
	left?: IListNode;
	right?: IListNode;
	size = 0;

	insertFirst(data: number): void {
		if (this.left === undefined) {
			this.left = new ListNode(data);
			this.right = this.left;
		} else {
			this.left.prev = new ListNode(data, undefined, this.left);
			this.left = this.left.prev;
		}

		this.size++;
	}

	insertLast(data: number): void {
		if (this.right === undefined) {
			this.right = new ListNode(data);
			this.left = this.right;
		} else {
			this.right.next = new ListNode(data, this.right);
			this.right = this.right.next;
		}

		this.size++;
	}

	deleteFirst(): ListNodeData {
		if (this.size <= 0 || !this.left) throw new Error('List is empty.');
		
		let res = undefined;

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

	deleteLast(): ListNodeData {
		if (this.size <= 0 || !this.right) throw new Error('List is empty.');
		
		let res = undefined;

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

	insertAfter(key: number, data: number): boolean {
		throw new Error("Method not implemented.");
	}

	delete(value: number): ListNodeData {
		throw new Error("Method not implemented.");
	}

	showList(direction: 'regular' | 'inverted' = 'regular'): void {
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
}