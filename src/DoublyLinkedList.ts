class Nodez<T> {
  value: T
  next: Nodez<T> | null = null
  prev: Nodez<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class DoublyLinkedList<T> {
  head: Nodez<T> | null = null
  tail: Nodez<T> | null = null
  length: number = 0
  constructor(initialValue?: T) {
    if (initialValue !== undefined) {
      const newNode = new Nodez<T>(initialValue)
      this.head = newNode
      this.tail = newNode
      this.length = 1
    }
  }
}