import LinkedList from "../LinkedList/LinkedList";
import { CanUndef } from "../interface";
import { IListNode } from "../LinkedList/interface";
import type { AbstractDynamicArray } from './interface'

export default class DynamicArray<T> implements AbstractDynamicArray<T> {

    protected arrSize: number;

    protected list: LinkedList<CanUndef<T>[]> = new LinkedList();

    protected currentLength: number = 0;


    public get size() : number {
        return this.currentLength;
    }    


    constructor(arraySize: number) {
        this.arrSize = arraySize
    }


    public add(data: T): void {
        if (this.list.length === 0) this.list.insertFirst(new Array<T>(this.arrSize));

        const arrIndex = this.getArrIndex(this.currentLength);
        let el = this.getElementByIndex(this.currentLength);

        if (el === undefined) {
            this.list.insertLast(new Array<T>(this.arrSize));
            el = this.list.last;
        }

        el!.data[arrIndex] = data;
        this.currentLength++;
    }

    public get(index: number): CanUndef<T> {
        const arrIndex = this.getArrIndex(index);
        return this.getElementByIndex(index)!.data[arrIndex];
    }

    public set(index: number, data: T): void {
        const arrIndex = this.getArrIndex(index);
        this.getElementByIndex(index)!.data[arrIndex] = data;
    }

    public delete(index: number): void {
        const arrIndex = this.getArrIndex(index);
        this.getElementByIndex(index)!.data[arrIndex] = undefined;
        this.currentLength--;
    }


    [Symbol.iterator](): IterableIterator<CanUndef<T>> {
        return this.values()
    }

    public *values(): IterableIterator<CanUndef<T>> {
        let j = 0;

        for (const el of this.list) {
            for (let i = 0; i < el.length && j < this.currentLength; i++, j++) {
                yield el[i]
            }
        }
    }

    public *entries(): IterableIterator<[number, CanUndef<T>]> {
        let j = 0;

        for (const el of this.list) {
            for (let i = 0; i < el.length && j < this.currentLength; i++, j++) {
                yield [i, el[i]]
            }
        }
    }


    protected getElementByIndex(globalIndex: number): CanUndef<IListNode<CanUndef<T>[]>> {
        const listNumber  = this.getListNumber(globalIndex);

        let cur = this.list.first;

        for (let i = 0; i < listNumber; i++) {
            cur = cur?.next
        }

        return cur;
    }

    protected getListNumber(globalIndex: number) {
        return Math.floor(globalIndex / this.arrSize);
    }

    protected getArrIndex(globalIndex: number) {
        return globalIndex > this.arrSize - 1 ? (globalIndex % this.arrSize) : globalIndex;
    }
}