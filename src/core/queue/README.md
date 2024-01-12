# Реализация очереди

Очередь реализуется классом Queue, на основе LinkedList. Публичный API класса:

### Геттеры:

- size - Количество элементов в очереди

- isEmpty - Проверяет очередь на пустоту

### Методы:

- enqueue - Добавляет элемент в конец очереди

- dequeue - Удаляет элемент из начала очереди

- peek - Возвращает элемент из начала очереди

## Пример использования

```js
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue(); // 1
queue.enqueue(); // 2

queue.peek(); // 3
queue.peek(); // 3
queue.peek(); // 3
```
