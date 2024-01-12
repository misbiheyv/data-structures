import { BinaryTree } from "core/binary-tree-set/interface";
import TreeNode from "core/binary-tree-set/tree-node";

export default class BinaryThreeSet<T> implements BinaryTree<T> {

  protected root: CanUndef<TreeNode<T>>;
  protected count: number = 0;

  get length(): number {
    return this.count;
  }

  get getRoot(): CanUndef<TreeNode<T>> {
    return this.root
  }

  constructor(iter: Iterable<T>) {
    for (const el of iter) {
      this.add(el)
    }
  }

  add(value: T): void {
    this.count++;

    if (this.root === undefined) {
      this.root = new TreeNode(value)
      return;
    }

    let cur: CanUndef<TreeNode<T>> = this.root;

    while (cur) {
      if (value < cur.data) {
        if (!cur.left) {
          cur.left = new TreeNode(value);
          return;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = new TreeNode(value);
          return;
        }
        cur = cur.right;
      }
    }
  }

  find(value: T): CanUndef<T> {
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

  delete(value: T): void {
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

  preorder(): IterableIterator<CanUndef<T>> {
    // Обратный обход. Порядок обхода:

    // 1) Элемент
    // 2) Левое поддерево
    // 3) Правое поддерево

    // Возвращает массив в префиксной форме, то есть сохраняет порядок ввода
    // Например, для дерева [2, 1, 5, 3, 6]

    //      _ 2 _
    //     /   \
    //    1     5
    //         /  \
    //        3  6

    // Получим [2, 1, 5, 3, 6]

    return this.prefix(this.root);
  }

  postorder(): IterableIterator<CanUndef<T>> {
    // Обратный обход. Порядок обхода:

    // 1) Левое поддерево
    // 2) Правое поддерево
    // 3) Элемент

    // Возвращает массив в постфиксной форме
    // Например, для дерева [2, 1, 5, 3, 6]

    //      _ 2 _
    //     /   \
    //    1     5
    //         /  \
    //        3  6

    // Получим [1, 3, 6, 5, 2]

    return this.postfix(this.root);
  }

  inorder(): IterableIterator<CanUndef<T>> {
    // Симметричный обход. Порядок обхода:

    // 1) Левое поддерево
    // 2) Элемент
    // 3) Правое поддерево

    // Возвращает отсортированный массив
    // Например, для дерева [2, 1, 5, 3, 6]

    //      _ 2 _
    //     /   \
    //    1     5
    //         /  \
    //        3  6

    // Получим [1, 2, 3, 5, 6]

    return this.infex(this.root);
  }


  protected *prefix(node: CanUndef<TreeNode<T>>): IterableIterator<T> {
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

  protected *postfix(node: CanUndef<TreeNode<T>>): IterableIterator<T> {
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

  protected *infex(node: CanUndef<TreeNode<T>>): IterableIterator<T> {
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


  protected deleteNode(target: CanUndef<TreeNode<T>>, parent: CanUndef<TreeNode<T>>, side: boolean) {
    //! Не доработан. Например, не умеет удалять коренные элементы, возможна некорректная работа с узлами, имеющими обе ветки

    if (target === undefined) return;

    this.count--;

    if (target.left === undefined) {
      if (target.right === undefined) {
        side ? parent!.right = undefined : parent!.left = undefined;
        return;
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

  protected getSuccessor(target: TreeNode<T>) {
    let cur = target.right || target.left;

    while (cur?.left) {
      cur = cur?.left
    }

    return cur;
  }
}