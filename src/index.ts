import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import Deque from "./Deque/Deque";
import Stack from "./Stack/Stack";
import Structure from './Structure/Structure'

const list = new LinkedList<number>([1, 2, 3, 4, 5, 6, 7])
const queue = new Queue<number>();
const deque = new Deque<number>();
const stack = new Stack<number>(4);
const structure = new Structure<string | number>(['name', 'age', 'sex'])

structure.set('name', 'Misha')
structure.set('age', 20)
structure.set('sex', 'Male')

console.log(structure.get('name'))
console.log(structure.get('age'))
console.log(structure.get('sex'))