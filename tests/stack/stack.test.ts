import Stack from 'core/stack';


describe('Stack', () => {
  const stack = new Stack(3);

  test('contract', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.elementsCount).toEqual(3)

    expect(stack.peek()).toEqual(3)
    expect(stack.pop()).toEqual(3)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.clear()

    expect(stack.elementsCount).toEqual(0)
  })

  test('corner cases', () => {
    expect(() => stack.pop()).toThrow('Stack is empty.')
    expect(() => stack.peek()).toThrow('Stack is empty.')
  })
});