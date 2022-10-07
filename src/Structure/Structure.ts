export default class Structure<T> {

    private getIndexFunction: Function;

    private store: Array<T>;

    constructor(keys: Array<string>) {

        this.store = new Array(keys.length);
        this.getIndexFunction = this.generateFunction(keys);
    }


    public set(key: string, value: T): void {
        this.store[this.getIndexFunction(key)] = value;
    }

    public get(key: string): T {
        return this.store[this.getIndexFunction(key)];
    }


    private generateFunction(keys: Array<string>): Function {
        let functionBody = `switch (key) {`;

        for (let i = 0; i < keys.length; i++) {
            functionBody += `case '${keys[i]}': { return ${i} }`;
        }

        functionBody += `default: break;}`;

        return (key: string) => new Function('key', functionBody)(key);
    }
}