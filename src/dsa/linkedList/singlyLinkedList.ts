class Lnode<T> {
    value: T
    next: Lnode<T> | null = null
    constructor(value: any) {
        this.value = value
    }
}

class SinglyLinkedList<T> {
    head: Lnode<T> | null = null
    tail: Lnode<T> | null = null
    length: number = 0

    constructor(initialValue?: T) {
        if (initialValue != undefined) {
            const newNode = new Lnode<T>(initialValue)
            this.head = newNode
            this.tail = newNode
            this.length = 1
        }
    }
}