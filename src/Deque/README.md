# Реализация дека

Дек реализуется классом Deque, на основе LinkedList. Публичный API класса:

### Геттеры:

- size - Количество элементов в деке

- isEmpty - Проверяет дек на пустоту

### Методы:

- append - Добавляет элемент в конец дека

- prepend - Добавляет элемент в начало дека

- deleteFirst - Удаляет элемент из начала дека

- deleteLast - Удаляет элемент с конца дека

- peekFirst - Возвращает элемент из начала дека

- peekLast - Возвращает элемент с конца дека

## Пример использования

```js
const deque = new Deque()

deque.isEmpty // true

deque.append(2)
deque.prepend(1)
deque.append(3)
deque.prepend(0)

deque.peekFirst() // 0
deque.peekLast() // 3

deque.deleteFirst() // 0
deque.deleteLast() // 3

deque.peekFirst() // 1
deque.peekLast() // 2

deque.size // 2
deque.isEmpty // false
```