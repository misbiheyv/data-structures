import { CanUndef } from "../interface";
import ThreeNode from "./ThreeNode";

export interface BinaryThree<T> {

    getRoot: CanUndef<ThreeNode<T>>;

    length: number;

    add(data: T): void;

    find(data: T): CanUndef<T>;

    delete(data: T): void;

    [Symbol.iterator](): IterableIterator<CanUndef<T>>;

    preorder(): IterableIterator<CanUndef<T>>;

    postorder(): IterableIterator<CanUndef<T>>;

    inorder(): IterableIterator<CanUndef<T>>;

}