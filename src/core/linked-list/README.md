# Реализация двусвязного двустороннего списка

Список реализуется классом LinkedList, публичный API класса:

### Конструктор

- constructor(iterable) - может принимать итерируемую коллекцию

### Геттеры:

- first - Ссылка на первый элемент списка
- last - Ссылка на последний элемент списка
- length - Количество элементов в списке

### Методы:

- insertFirst - Вставка элемента в начало списка
- insertLast - Вставка элемента в конец списка

- deleteFirst - Удаление элемента из начала списка
- deleteLast - Удаление элемента из конца списка

- insertAfter - Вставка элемента после указанного
- delete - Удаление первого совпадающего элемента по значению
- deleteAll - Удаление всех совпадающих по значению элементов

- clear - Удаление всех элементов списка
- has - Проверка на наличие элемента

- showList - выводит на экран список (в обычном или обратном порядке)

### Итераторы:

- [Symbol.iterator] - реализует интерфейс итератора, можно обойти циклом for of

- values - базовый итератор, возвращает только значения
- valuesReverse - итератор, возвращает только значения в обратном порядке

- items - возвращает readonly view ячейки вида {prev, next, data}
- itemsReverse - возвращает readonly view ячейки вида {prev, next, data} в обратном порядке

## Пример использования

```js
const list = new LinkedList([1, 2, 3]);

list.insertFirst(0);

list.insertLast(4);

list.has(3);

for (const el of list) {
	console.log(el); // 0, 1, 2, 3, 4
}

for (const el of list.items()) {
	/** 
    {prev: undefined, next: Node, data: 0}, 
    {prev: Node, next: Node, data: 1}, 
    ...,
    {prev: Node, next: undefined, data: 4}, 
  */
	console.log(el);
}
```
