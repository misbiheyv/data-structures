/* eslint-disable no-unused-vars */
type CanUndef<T> = T | undefined;

type Nullable<T> = T | undefined | null;

type AnyFunction = (...args: any[]) => any;
