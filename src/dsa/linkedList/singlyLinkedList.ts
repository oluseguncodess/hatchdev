class LNode<T> {
  value: T
  next: LNode<T> | null = null
  constructor(value: T) {
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

  shift(): T | undefined {
    // check if the linked list is empty 
    if (this.length === 0) return undefined;

    // save the value of the head's node
    let removedHeadNodeValue = this.head!.value

    // check if the linked list has only one node
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // assign the head property to the head's next node
      this.head = this.head!.next
    }
    // decrement length
    this.length--
    // return the value of the old node
    return removedHeadNodeValue;
  }

  unshift(value: T): this {
    // create a new node 
    let newNode = new LNode(value);

    // check if the linked list is empty
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // set the new node next property to the current head node
      newNode.next = this.head
      // set the head propery to the new node created
      this.head = newNode
    };
    this.length++
    return this
  }

  // get specific node by index
  get(index: number): NodeC<T> | undefined {
    // check if we have the right index and if the index isn't greater than the length of the linked list
    if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let current = this.head
    while (counter < index) {
      current = current!.next
      counter++
    }
    return current ?? undefined
  }

  // set value of node 
  set(index: number, value: T): undefined | this {
    // get node 
    const node = this.get(index)

    // if node is undefined
    if (!node) return undefined

    // change value
    node.value = value
    return this;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;

    // if index is 0
    if (index === 0) {
      this.unshift(value)
      return true;
    }

    // if it's the last index of the linked list
    if (index === this.length) {
      this.push(value)
      return true
    }

    // create a new node
    const newNode = new LNode<T>(value)

    let counter = 0;
    let current = this.head
    while (counter < index - 1) {
      current = current!.next
      counter++
    }
    newNode.next = current!.next
    current!.next = newNode

    // increment length
    this.length++
    return true;
  }

  remove(index: number): undefined | T {
    // check if index exists
    if (index < 0 || index >= this.length) return undefined;

    // check if index is 0
    if (index === 0) {
      return this.shift()
    }

    // check if the index is the last index
    if (index === this.length - 1) {
      return this.pop()
    }

    // get the node before the node we want to remove
    let prevNode = this.get(index - 1)

    // get the removed node 
    const removedNode = prevNode!.next

    // link the prevNode to the node that's after the removed node
    prevNode!.next = removedNode!.next

    // unlink the removed node
    removedNode!.next = null

    // decrease length of linked list
    this.length--

    // return removed node value
    return removedNode!.value
  }

  reverse() {
    // check if the linked list has only one node
    if (this.length === 1) return this.head

    // get the first node
    let node = this.head

    // swap the head and tail
    this.head = this.tail
    this.tail = node

    let prev = null
    let next;

    // loop through the nodes and reverse them
    for (let i = 0; i < this.length; i++) {
      next = node!.next
      node!.next = prev
      prev = node
      node = next
    }
  }
}