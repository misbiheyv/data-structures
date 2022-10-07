import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
// const list = new LinkedList<number>([1, 2, 3, 4, 5, 6, 7])

// console.log('regular')
// list.showList('regular')

// console.log('===========')
// console.log('inverted')
// list.showList('inverted')

// console.log('===========')
// console.log('size: ', list.length)

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.size)

while(!queue.isEmpty) {
    console.log(queue.dequeue())
}