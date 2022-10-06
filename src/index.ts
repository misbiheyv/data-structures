import LinkedList from "./LinkedList/LinkedList";

const list = new LinkedList<number>()

list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
list.insertLast(4)
list.insertLast(5)
list.insertLast(5)
list.insertLast(5)
list.insertLast(5)

list.deleteFirst()
list.deleteFirst()
list.deleteFirst()

list.deleteAll(5)


console.log('regular')
list.showList('regular')

console.log('===========')
console.log('inverted')
list.showList('inverted')

console.log('===========')
console.log('size: ', list.length)