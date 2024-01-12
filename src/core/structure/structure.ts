import { AbstractStructure } from 'core/structure/interface';

export default class Structure<T> implements AbstractStructure<T> {

  protected getIndex: AnyFunction;

  protected store: Array<T>;

  constructor(keys: Array<string>) {

    this.store = new Array(keys.length);
    this.getIndex = this.generateFunction(keys);
  }

  set(key: string, value: T): void {
    this.store[this.getIndex(key)] = value;
  }

  get(key: string): T {
    return this.store[this.getIndex(key)];
  }

  protected generateFunction(keys: Array<string>): AnyFunction {
    let functionBody = `switch (key) {`;

    for (let i = 0; i < keys.length; i++) {
      functionBody += `case '${keys[i]}': { return ${i} }`;
    }

    functionBody += `default: break;}`;

    return (key: string) => new Function('key', functionBody)(key);
  }
}
