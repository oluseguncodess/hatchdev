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

  // adds a node to the beginning of list
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

  // removes the last node
  pop(): T | undefined {
    // check to see if the list is empty
    if (this.length === 0) {
      return undefined
    }

    // save the removed node
    const removedNode = this.tail!

    // check if the list has one node
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return removedNode.value;
    }

    // update tail to the previous node
    this.tail = this.tail!.prev

    // set it's next property to null
    this.tail!.next = null

    // reduce the list's length
    this.length--

    // return removed node
    return removedNode.value;
  }

  // removes the first node
  shift(): T | undefined {
    // check if the linked list is empty
    if (this.length === 0) return undefined

    // save the removed node
    const removedNode = this.head

    // if the list has only one node
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // change the head property to the next node 
      this.head = this.head!.next

      // set it's prev property to null
      this.head!.prev = null
    }

    // decrement length property
    this.length--

    // return removed node value
    return removedNode!.value
  }

  prepend(value: T): this {
    // check if the list is empty
    if(this.length === 0) {
      return this.append(value)
    }

    // create a new node
    const newNode = new Nodez<T>(value)

    // let the previous property of the first node point to the new node
    this.head!.prev = newNode

    // let the new node point to the first node 
    newNode!.next = this.head

    // assign the head property to the new node
    this.head = newNode

    // increment length property
    this.length++

    // return this for method chaining
    return this
  }

}