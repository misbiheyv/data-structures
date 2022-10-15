import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import Deque from "./Deque/Deque";
import Stack from "./Stack/Stack";
import Structure from './Structure/Structure'
import DynamicArray from "./DynamicArray/DynamicArray";
import ChainedHashMap from "./HashMap/ChainedHashMap";
import Vector from "./DynamicArray/Vector";

const list = new LinkedList<number[]>()
const queue = new Queue<number>();
const deque = new Deque<number>();
const stack = new Stack<number>(4);
const structure = new Structure<string | number>(['name', 'age', 'sex']);
const dynamicArray = new DynamicArray<number>(3);
const vector = new Vector(10).fill(10);
const map = new ChainedHashMap();



map.set('name', 'Misha')
map.set('age', '20')
map.set('sex', 'male')
map.set('work', 'programmer')
map.set('etc', 'etc')

console.log(map)


for (const el of map) {
    console.log(el)
}