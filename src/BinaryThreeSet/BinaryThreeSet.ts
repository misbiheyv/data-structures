import { CanUndef } from "../interface";
import { BinaryThree } from "./interface";
import ThreeNode from "./ThreeNode";

export default class BinaryThreeSet<T> implements BinaryThree<T> {

    private root: CanUndef<ThreeNode<T>>;

    private count: number = 0;

    
    public get length(): number {
        return this.count;
    }

    public get getRoot(): CanUndef<ThreeNode<T>> {
        return this.root
    }
    

    constructor(iter: Iterable<T>) {
        for (const el of iter) {
            this.add(el)
        }
    }

    public add(value: T): void {
        this.count++;

        if (this.root === undefined) {
            this.root = new ThreeNode(value)
            return;
        }

        let cur: CanUndef<ThreeNode<T>> = this.root;

        while(cur) {
            if (value < cur.data) {
                if (!cur.left) {
                    cur.left = new ThreeNode(value);
                    return ;
                }
                cur = cur.left;
            } else {
                if (!cur.right){
                    cur.right = new ThreeNode(value);
                    return ;
                }
                cur = cur.right;
            }
        }
    }

    public find(value: T): CanUndef<T> {
        let cur = this.root;

        while (cur && cur?.data != value) {
            if (value < cur.data) {
                cur = cur.left
            } else {
                cur = cur.right
            }
        }

        return cur && cur.data;
    }

    public delete(value: T): void {
        //! Недоделан, пока не умеет удалять корневые элементы

        let target = this.root;
        let parent = this.root;
        let side: boolean = false;

        while (target && target?.data != value) {
            parent = target;

            if (value < target.data) {
                side = false
                target = target.left
            } else {
                side = true
                target = target.right
            }
        }

        this.deleteNode(target, parent, side)
    }


    [Symbol.iterator](): IterableIterator<CanUndef<T>> {
        return this.inorder()
    }

    public preorder(): IterableIterator<CanUndef<T>> {
        // Обратный обход. Порядок обхода:

        // 1) Элемент
        // 2) Левое поддерево
        // 3) Правое поддерево

        // Возвращает массив в префиксной форме, то есть сохраняет порядок ввода
        // Например, для дерева [2, 1, 5, 3, 6]

        //          _ 2 _
        //         /     \
        //        1       5
        //               /  \
        //              3    6

        // Получим [2, 1, 5, 3, 6]

        return this.prefix(this.root);
    }

    public postorder(): IterableIterator<CanUndef<T>> {
        // Обратный обход. Порядок обхода:

        // 1) Левое поддерево
        // 2) Правое поддерево
        // 3) Элемент

        // Возвращает массив в постфиксной форме
        // Например, для дерева [2, 1, 5, 3, 6]

        //          _ 2 _
        //         /     \
        //        1       5
        //               /  \
        //              3    6

        // Получим [1, 3, 6, 5, 2]

        return this.postfix(this.root);
    }

    public inorder(): IterableIterator<CanUndef<T>> {
        // Симметричный обход. Порядок обхода:

        // 1) Левое поддерево
        // 2) Элемент
        // 3) Правое поддерево

        // Возвращает отсортированный массив
        // Например, для дерева [2, 1, 5, 3, 6]

        //          _ 2 _
        //         /     \
        //        1       5
        //               /  \
        //              3    6

        // Получим [1, 2, 3, 5, 6]

        return this.infex(this.root);
    }


    private *prefix(node: CanUndef<ThreeNode<T>>): IterableIterator<T> {
        if (node) {
            yield node.data;

            if (node.left) {
                yield* this.prefix(node.left);
            }

            if (node.right) {
                yield* this.prefix(node.right);
            }
        }
    }

    private *postfix(node: CanUndef<ThreeNode<T>>): IterableIterator<T> {
        if (node) {
            if (node.left) {
                yield* this.postfix(node.left)
            }

            if (node.right) {
                yield* this.postfix(node.right)
            }

            yield node.data;
        }
    }

    private *infex(node: CanUndef<ThreeNode<T>>): IterableIterator<T> {
        if (node) {
            if (node.left) {
                yield* this.infex(node.left)
            }

            yield node.data;

            if (node.right) {
                yield* this.infex(node.right)
            }
        }
    }


    private deleteNode(target: CanUndef<ThreeNode<T>>, parent: CanUndef<ThreeNode<T>>, side: boolean) {
        //! Не доработан. Например, не умеет удалять коренные элементы, возможна некорректная работа с узлами, имеющими обе ветки

        if (target === undefined) return ;

        this.count--;

        if (target.left === undefined) {
            if (target.right === undefined) {
                side ? parent!.right = undefined : parent!.left = undefined;
                return ;
            } 

            side ? parent!.right = target.right : parent!.left = target.right;
        }

        if (side) {
            parent!.right = this.getSuccessor(target);
            parent!.right!.left = target.left;
        } else {
            parent!.left = this.getSuccessor(target);
            parent!.left!.left = target.left;
        }
    }

    private getSuccessor(target: ThreeNode<T>) {
        let cur = target.right || target.left;

        while (cur?.left) {
            cur = cur?.left
        }

        return cur;
    }
}