import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import Deque from "./Deque/Deque";
import Stack from "./Stack/Stack";
import Structure from './Structure/Structure'
import DynamicArray from "./DynamicArray/DynamicArray";
import ChainedHashMap from "./HashMap/ChainedHashMap";
import Vector from "./DynamicArray/Vector";
import BinaryThreeSet from "./BinaryThreeSet/BinaryThreeSet";

const list = new LinkedList<number[]>()
const queue = new Queue<number>();
const deque = new Deque<number>();
const stack = new Stack<number>(4);
const structure = new Structure<string | number>(['name', 'age', 'sex']);
const dynamicArray = new DynamicArray<number>(3);
const vector = new Vector(10).fill(10);
const map = new ChainedHashMap();

const bts = new BinaryThreeSet([2, 1, 5, 3, 6]);

for (const el of bts.inorder()) {
    console.log(el)
}

console.log('pre')
for (const el of bts.preorder()) {
    console.log(el)
}

console.log('post')
for (const el of bts.postorder()) {
    console.log(el)
}