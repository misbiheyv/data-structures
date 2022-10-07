import LinkedList from "./LinkedList/LinkedList";

const list = new LinkedList<number>([1, 2, 3, 4, 5, 6, 7])

console.log('regular')
list.showList('regular')

console.log('===========')
console.log('inverted')
list.showList('inverted')

console.log('===========')
console.log('size: ', list.length)