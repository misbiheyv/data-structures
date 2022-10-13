# Реализация структуры

Compile-time структура реализуется классом Structure, используя кодогенерацию для доступа к значениям структуры по ключу. Публичный API класса:

### Конструктор

- constructor(['name', 'age', 'sex']) - принимает массив ключей (их нельзя добавлять или изменять)

### Методы:

- set - Задает значение по ключу

- get - Возвращает значение по ключу

## Пример использования

```js
const struct = new Structure(['name', 'age', 'sex'])

struct.set('name', 'Misha')
struct.set('age', 20)
struct.set('sex', 'male')

struct.get('name') // 'Misha'
struct.get('age') // 20
struct.get('sex') // 'male'
```