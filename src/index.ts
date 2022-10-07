import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import Deque from "./Deque/Deque";
import Stack from "./Stack/Stack";

const list = new LinkedList<number>([1, 2, 3, 4, 5, 6, 7])
const queue = new Queue<number>();
const deque = new Deque<number>();
const stack = new Stack<number>(4);