import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import Deque from "./Deque/Deque";
import Stack from "./Stack/Stack";
import Structure from './Structure/Structure'
import DynamicArray from "./DynamicArray/DynamicArray";

const list = new LinkedList<number[]>()
const queue = new Queue<number>();
const deque = new Deque<number>();
const stack = new Stack<number>(4);
const structure = new Structure<string | number>(['name', 'age', 'sex'])

const dynamicArray = new DynamicArray<number>(3);

dynamicArray.add(1);
dynamicArray.add(2);
dynamicArray.add(3);
dynamicArray.add(4);
dynamicArray.add(5);
dynamicArray.add(6);
dynamicArray.add(7);
dynamicArray.add(8);
dynamicArray.add(9);
dynamicArray.add(10);

for (const el of dynamicArray) {
    console.log(el)
}

for (const [k, v] of dynamicArray.entries()) {
    console.log(k, v)
}