import Queue from './Queue';


describe('Queue', () => {
  const queue = new Queue();

  test('contract', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.size).toEqual(3)
    expect(queue.isEmpty).toEqual(false)

    expect(queue.peek()).toEqual(1)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.dequeue()).toEqual(3)

    expect(queue.size).toEqual(0)
    expect(queue.isEmpty).toEqual(true)
  })

  test('corner cases', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty.')
    expect(() => queue.peek()).toThrow('Queue is empty.')
  })
});