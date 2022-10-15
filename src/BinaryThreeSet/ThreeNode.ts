export default class ThreeNode<T> {

    left?: ThreeNode<T>

    right?: ThreeNode<T>

    data: T

    constructor(data: T, left?: ThreeNode<T>, right?: ThreeNode<T>) {
        this.data = data;


        this.left = left;

        this.right = right;
    }
}