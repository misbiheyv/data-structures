export interface AbstractStack<T> {
  maxSize: number;

  elementsCount: number;

  push(data: T): void;

  pop(): CanUndef<T>;

  peek(): CanUndef<T>;

  clear(): void;
}