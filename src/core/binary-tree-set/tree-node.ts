export default class TreeNode<T> {

  left?: TreeNode<T>

  right?: TreeNode<T>

  data: T

  constructor(data: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.data = data;


    this.left = left;

    this.right = right;
  }
}