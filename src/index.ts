import LinkedList from "./LinkedList/LinkedList";

const list = new LinkedList()

list.insertLast(3)

list.deleteAll(3)


console.log('regular')
list.showList('regular')

console.log('===========')
console.log('inverted')
list.showList('inverted')

console.log('===========')
console.log('size: ', list.size)