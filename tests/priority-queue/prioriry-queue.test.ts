import PriorityQueue from 'core/priority-queue';

const q = new PriorityQueue();

describe('PriorityQueue', () => {
  test('insertion with priority', () => {
    q.enqueue([1, 'low']);
    q.enqueue([2, 'normal']);
    q.enqueue([3, 'hight']);
    q.enqueue([4, 'critical']);

    expect(q.dequeueValue()).toBe('critical');
    expect(q.dequeueValue()).toBe('hight');
    expect(q.dequeueValue()).toBe('normal');
    expect(q.dequeueValue()).toBe('low');
  });
});
