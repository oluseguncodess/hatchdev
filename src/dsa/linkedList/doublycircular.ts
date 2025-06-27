class NodeDC<T> {
    value: T
    next: NodeDC<T> | null = null
    prev: NodeDC<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

class DoublyCircularLinkedList<T> {
    head: NodeDC<T> | null = null
    tail: NodeDC<T> | null = null
    length: number = 0
    constructor(initialValue?: T) {
        if (initialValue !== undefined) {
            const newNode = new NodeDC<T>(initialValue)
            this.head = newNode
            this.tail = newNode
            this.head.prev = this.tail
            this.tail.next = this.head
            this.length = 1
        }
    }

    // adds a node at the end of list
    append(val: T): this {
        // create a new node
        const newNode = new NodeDC<T>(val)

        // check if the list is empty
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
            this.head.prev = this.tail
            this.tail.next = this.head
        } else {
            // connect the next property of the tail to the new node
            this.tail!.next = newNode

            // set the new node's prev property to the tail
            newNode!.prev = this.tail

            // set the tail property to the new node created
            this.tail = newNode

            // ensure the tail's next property links to the head
            newNode.next = this.head
        }

        // increment the length of linked list
        this.length++

        //return list
        return this;
    }

    // removes the last node at the end of list
    pop(): T | undefined {
        // check to see if the list is empty
        if (this.length === 0) {
            return undefined
        }

        // save the removed node
        const removedNode = this.tail as NodeDC<T>

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
        this.tail!.next = this.head

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
            this.head!.prev = this.tail

            // reset the next property of the tail
            this.tail!.next = this.head
        }

        // decrement length property
        this.length--

        // return removed node value
        return removedNode!.value
    }

    // adds node to the beginning of list
    prepend(value: T): this {
        // check if the list is empty
        if (this.length === 0) {
            return this.append(value)
        }

        // create a new node
        const newNode = new NodeDC<T>(value)

        // let the previous property of the first node point to the new node
        this.head!.prev = newNode

        // let the new node point to the first node 
        newNode!.next = this.head

        // assign the head property to the new node
        this.head = newNode

        // set the prev property to point to the tail
        this.head.prev = this.tail

        // update the next property of the tail to point to the head
        this.tail!.next = this.head

        // increment length property
        this.length++

        // return this for method chaining
        return this
    }

    // get node at any index
    get(index: number): NodeDC<T> | undefined {
        // check to see if the list or the index is out of bounds
        if (this.length === 0 || index < 0 || index >= this.length) return undefined;

        // check if the index is the same as the length of linked list minus one
        if (index === this.length - 1) return this.tail ?? undefined

        // return the head's value if index is 0
        if (index === 0) return this.head ?? undefined

        // traverse through list to get specific node
        if (index < this.length / 2) {
            let current = this.head
            let counter = 0;
            while (counter < index) {
                current = current!.next
                counter++
            }
            // return node 
            return current ?? undefined
        } else {
            let current = this.tail
            let counter = this.length - 1

            while (counter > index) {
                current = current!.prev;
                counter--
            }
            // return node
            return current ?? undefined
        }
    }

    // print list
    print(): string | undefined {
        // check if there is a head 
        if (!this.head) return undefined

        // traverse and append values to a string
        let current = this.head
        let result = ''

        for(let i = 0; i < this.length; i++) {
            result += `${current.value} <-> `;
            current = current.next!
        }

        // remove the last arrow
        return result.slice(0, -5)
    }

    // insert at any index
    insertAt(index: number, value: T): this | undefined {
        // create a new node
        const newNode = new NodeDC(value)

        // check for invalid index
        if (index < 0 || index > this.length) return undefined

        // if the index is the same as the list's length 
        if (index === this.length) {
            return this.append(value)
        }

        // if index is 0
        if (index === 0) {
            return this.prepend(value)
        }

        // get the previous node of the index
        const prevNode = this.get(index - 1) as NodeDC<T>

        // save it's next node
        const nextNode = prevNode!.next as NodeDC<T>

        // set the prevNode to the newNode and new node's prev property to the prev node
        prevNode!.next = newNode
        newNode.prev = prevNode

        // set the newNode's next property to the nextNode and nextNode prev property to newNode
        newNode.next = nextNode
        nextNode.prev = newNode

        // increment length
        this.length++

        // return list
        return this
    }

    // remove at any index
    removeAtIndex(index: number): T | undefined {
        // check for invalid indexes and empty list
        if (index < 0 || index >= this.length || this.length === 0) return undefined

        // if index is 0
        if (index === 0) {
            return this.shift()
        }

        // remove at the last index
        if (index === this.length - 1) {
            return this.pop()
        }

        // get the node and
        const prevNode = this.get(index - 1) as NodeDC<T>

        // save the node to be removed
        const removedNode = prevNode.next as NodeDC<T>

        // save the next node 
        const nextNode = removedNode.next as NodeDC<T>

        // set the next property of the prev node the removed node next property
        prevNode.next = nextNode

        // set the next node prev property to the prev node
        nextNode.prev = prevNode

        // reduce length
        this.length--

        // return removed node value
        return removedNode.value

    }

    // reverse 
    reverse(): this {
        // save the current head 
        let current = this.head as NodeDC<T>

        // swap head and tail
        this.head = this.tail
        this.tail = current

        // loop through and change pointers
        for(let i = 0; i < this.length; i++) {
            // save the next node for traversal
            let next = current.next

            // swap pointers
            current.next = current.prev
            current.prev = next

            // move current to next
            current = next!
        }
            
        // return list
        return this
    }
}

const listt = new DoublyCircularLinkedList<number>(5)
listt.append(4).append(3)
listt.reverse()
console.log(listt.print())