import LinkedList from "./LinkedList/LinkedList";

const list = new LinkedList()

list.insertFirst(1)
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.insertFirst(5)
list.deleteFirst()
list.deleteFirst()
list.deleteFirst()

list.showList('regular')
console.log('===========')
list.showList('inverted')