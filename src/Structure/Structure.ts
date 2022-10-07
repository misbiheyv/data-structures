export default class Structure<T> {

    private getIndexFunction: Function;

    private store: Array<T>;

    constructor(keys: Array<string>) {
        this.store = new Array(keys.length);

        let functionBody = `switch (key) {`

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            functionBody += `case '${key}': { return ${i} }`
        }

        functionBody += `default: break;}`

        this.getIndexFunction = (key: string) => {
            return new Function('key', functionBody)(key)
        }
    }

    public set(key: string, value: T) {
        this.store[this.getIndexFunction(key)] = value
    }

    public get(key: string) {
        return this.store[this.getIndexFunction(key)]
    }
}