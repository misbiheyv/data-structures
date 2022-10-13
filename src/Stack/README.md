# Реализация стека

Стек реализуется классом Stack, на основе массива. Публичный API класса:

### Конструктор

- constructor(maxSize) - Принимает максимальный размер стека

### Геттеры:

- maxSize - Максимальное количество элементов в стеке

- elementsCount - Количество элементов в стеке

### Методы:

- push - Добавляет элемент на вершину стека

- pop - Удаляет элемент с вершины стека

- peek - Возвращает элемент с вершины стека

- clear - Очищает стек

## Пример использования

```js
const stack = new Stack(4)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop() // 4
stack.pop() // 3

stack.peek() // 2
stack.peek() // 2
stack.peek() // 2

stack.clear()
```