export interface AbstractStructure<T> {
    set(key: string, value: T): void;

    get(key: string): T;
}