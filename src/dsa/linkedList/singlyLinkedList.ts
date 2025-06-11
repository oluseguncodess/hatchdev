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

  pop(): T | undefined {
    // check if the linked list if empty
    if (this.length === 0) {
      return undefined;
    }

    // check if the linked list has only one node - also save popped value
    let poppedValue = this.tail!.value
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      let current = this.head
      while (current!.next !== this.tail) {
        current = current!.next
      }
      current!.next = null
      this.tail = current;
    }
    this.length--
    return poppedValue;
  }
}