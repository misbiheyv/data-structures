import { CanUndef } from "../interface";
import { AbstractDynamicArray } from "./interface";

export default class Vector<T> implements AbstractDynamicArray<T> {
    
    protected maxSize: number;
    
    protected currentSize: number = 0;

    protected k: number;

    protected store: CanUndef<T>[];


    public get size() : number {
        return this.currentSize;
    }


    constructor(size: number, k = 2.3) {
        this.k = k;
        this.maxSize = size;
        this.store = new Array<T>(size);
    }


    add(data: T): void {
        if (this.currentSize === this.maxSize - 1) {
            const temp = this.store;
            this.maxSize = Math.floor(this.maxSize * this.k);

            this.store = new Array(this.maxSize)

            for (let i = 0; i < temp.length; i++) {
                this.store[i] = temp[i];
            }
        }

        this.store[this.currentSize++] = data;
    }

    get(index: number): CanUndef<T> {
        if (index > this.maxSize) throw new Error('index more than size of Vector.');

        return this.store[index];
    }

    set(index: number, data: T): void {
        if (index > this.maxSize) throw new Error('index more than size of Vector.');

        this.store[index] = data;
    }

    delete(index: number): void {
        if (index > this.maxSize) throw new Error('index more than size of Vector.');

        for (let i = index; i < this.currentSize - 1; i++) {
            this.store[i] = this.store[i + 1];
        }

        this.currentSize--;
    }


    [Symbol.iterator](): IterableIterator<CanUndef<T>> {
        return this.values();
    }

    *values(): IterableIterator<CanUndef<T>> {
        for (let i = 0; i < this.currentSize; i++) {
            yield this.store[i];
        }
    }

    *entries(): IterableIterator<[number, CanUndef<T>]> {
        for (let i = 0; i < this.currentSize; i++) {
            yield [i, this.store[i]];
        }
    }
}