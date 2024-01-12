/* eslint-disable no-unused-vars */
interface AbstractDeque<T> {
  size: number;

  isEmpty: boolean;

  append(data: T): void;

  prepend(data: T): void;

  deleteFirst(): CanUndef<T>;

  deleteLast(): CanUndef<T>;

  peekFirst(): CanUndef<T>;

  peekLast(): CanUndef<T>;
}

export default AbstractDeque;
