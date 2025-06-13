class Nodez<T> {
  value: T
  next: Nodez<T> | null  = null
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

  append(val: T): this {
    // create a new node
    const newNode = new Nodez<T>(val)

    // check if the list is empty
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // connect the next property of the tail to the new node
      this.tail!.next = newNode

      // set the new node's prev property to the tail
      newNode!.prev = this.tail

      // set the tail property to the new node created
      this.tail = newNode
    }

    // increment the length of linked list
    this.length++

    //return list
    return this;
  }

  pop(): Nodez<T> | undefined{
    // check to see if the list is empty
    if (this.length === 0) {
      return undefined
    }

    // save the removed node
    const removedNode = this.tail!

    // check if the list has one node
    if(this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return removedNode;
    }
    
    // update tail to the previous node
    this.tail = this.tail!.prev

    // set it's next property to null
    this.tail!.next = null

    // reduce the list's length
    this.length--

    // return removed node
    return removedNode;
  }
}