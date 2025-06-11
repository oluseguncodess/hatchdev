class LNode<T> {
    value: T
    next: LNode<T> | null = null
    constructor(value: any) {
        this.value = value
    }
}

class SinglyLinkedList<T> {
    head: LNode<T> | null = null
    tail: LNode<T> | null = null
    length: number = 0

    constructor(initialValue?: T) {
        if (initialValue != undefined) {
            const newNode = new LNode<T>(initialValue)
            this.head = newNode
            this.tail = newNode
            this.length = 1
        }
    }

    push(value: T): this {
    if (!this.head) {
      const newNode = new LNode<T>(value)
      this.head = newNode
      this.tail = newNode
    } else {
      const newNode = new LNode<T>(value)
      this.tail!.next = newNode
      this.tail = newNode
    }
    this.length++
    return this;
  }
}