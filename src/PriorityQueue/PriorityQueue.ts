import ListNode from "../LinkedList/ListNode";
import Queue from "../Queue/Queue";

export default class PriorityQueue<K, V> extends Queue<[K, V]> {

  enqueue(data: [K, V]): void {
    let
      prev: CanUndef<ListNode<[K, V]>>,
      cur: CanUndef<ListNode<[K, V]>>;

    if (this.size === 0) {
      this.store.insertFirst(data)
      return;
    }

    for (const cell of this.store.unsafeItems()) {
      prev = cur;
      cur = cell

      if (cur.data[0] < data[0]) {
        if (prev) {
          this.store.insertAfter(prev.data, data)
        } else {
          this.store.insertFirst(data)
        }

        return;
      }
    }

    this.store.insertLast(data);
  }

  dequeueValue(): V {
    try {
      return this.dequeue()![1];
    } catch {
      throw new Error("queue is empty");
    }
  }

}