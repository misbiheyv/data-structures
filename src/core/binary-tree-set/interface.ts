import TreeNode from "core/binary-tree-set/tree-node";

export interface BinaryTree<T> {

  getRoot: CanUndef<TreeNode<T>>;

  length: number;

  add(data: T): void;

  find(data: T): CanUndef<T>;

  delete(data: T): void;

  [Symbol.iterator](): IterableIterator<CanUndef<T>>;

  preorder(): IterableIterator<CanUndef<T>>;

  postorder(): IterableIterator<CanUndef<T>>;

  inorder(): IterableIterator<CanUndef<T>>;

}