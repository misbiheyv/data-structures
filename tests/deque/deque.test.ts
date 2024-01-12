import Deque from 'core/deque';

describe('Deque', () => {
  const deque = new Deque();

  test('append and deleteFirst', () => {
    deque.append(1);
    deque.append(2);
    deque.append(3);

    expect(deque.deleteFirst()).toEqual(1);
    expect(deque.deleteFirst()).toEqual(2);
    expect(deque.deleteFirst()).toEqual(3);
  });

  test('prepend and deleteLast', () => {
    deque.prepend(1);
    deque.prepend(2);
    deque.prepend(3);

    expect(deque.deleteLast()).toEqual(1);
    expect(deque.deleteLast()).toEqual(2);
    expect(deque.deleteLast()).toEqual(3);
  });

  test('peek and other', () => {
    deque.append(1);
    deque.append(2);

    expect(deque.peekFirst()).toEqual(1);
    expect(deque.peekLast()).toEqual(2);

    expect(deque.isEmpty).toEqual(false);
    expect(deque.size).toEqual(2);

    deque.deleteFirst();
    deque.deleteFirst();

    expect(deque.isEmpty).toEqual(true);
    expect(deque.size).toEqual(0);
  });
});
