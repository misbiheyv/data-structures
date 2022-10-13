import LinkedList from "./LinkedList";

describe('LinkedList', () => {
    let list = new LinkedList();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);

    test('contract', () => {
        expect(list.first?.data).toEqual(1);
        expect(list.last?.data).toEqual(3);
        expect(list.first?.next?.data).toEqual(2);
        expect(list.first?.next?.prev?.data).toEqual(1);
    });

    test('iterator', () => {
        expect(Array.from(list)).toEqual([1, 2, 3]);
    });

    test('clear', () => {
        list.clear()
        expect(Array.from(list)).toEqual([]);
        expect(list.first).toEqual(undefined);
        expect(list.last).toEqual(undefined);
        expect(list.length).toEqual(0);
    });

    test('insert', () => {
        list.insertLast(2)
        list.insertFirst(1)
        list.insertAfter(2, 3)

        expect(Array.from(list)).toEqual([1, 2, 3])
        expect(list.first?.data).toEqual(1)
        expect(list.last?.data).toEqual(3)
    });

    test('delete', () => {
        list.insertLast(4)
        list.insertLast(5)

        list.deleteFirst();
        expect(list.first?.data).toEqual(2);

        list.deleteLast();
        expect(list.last?.data).toEqual(4);

        list.delete(4)
        list.delete(3)
        list.delete(2)
        expect(list.last).toEqual(undefined);
        expect(list.first).toEqual(undefined);
    });

    test('new list', () => {
        list = new LinkedList([3,4,4,5,4,4,6,4])
        expect(Array.from(list)).toEqual([3,4,4,5,4,4,6,4]);
    })

    test('deleteAll', () => {
        list.deleteAll(4)
        expect(Array.from(list)).toEqual([3,5,6]);
    });
});