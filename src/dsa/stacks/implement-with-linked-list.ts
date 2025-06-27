class NodeX<T> {
    data: T
    next: NodeX<T> | null = null

    constructor(data: T) {
        this.data = data
    }
}

class Stack<T> {
    top: NodeX<T> |  null = null
    size: number = 0

    // print list
    print() {
        // check if a top node exist 
        if(!this.top) return undefined

        // save current top for traversal
        let current = this.top
        // store values gotten from each node
        let result = ''

        // traverse stack
        while (current) {
            result += `${current.data} --> `
            current = current.next! 
        }

        // return values gotten from node, remove unnecessary pointers
        return result.slice(0, -4)
    }

    // check if there is a top
    isEmpty(): boolean {
        return !this.top
    }

    // get size of stack
    getSize(): number {
        return this.size
    }

    // adds to stack
    push(value: T): this {
        // create a new node
        const newNode = new NodeX(value)

        // if this.top is null
        if(!this.top) {
            this.top = newNode
        } else {
            // save the current top's node
            const prevTop = this.top
            
            // change the top property to the new node
            this.top = newNode

            // set the newnode's next property to the prev top
            newNode.next = prevTop
        }

        // increase size of stack
        this.size++

        // return this
        return this
    }

    // removes fron top of stack
    pop(): T | undefined {
        // check if this.top exist
        if(this.isEmpty()) return undefined

        // save the top to be deleted
        let deletedTop = this.top as NodeX<T>

        // save it's next property
        let nextTop = deletedTop.next

        // make the next top this.top
        this.top = nextTop

        // remove deleted top
        deletedTop.next = null

        // reduce size of stack
        this.size--

        // return deleted top value
        return deletedTop.data
    }

    // see the top value
    peek(): T | undefined {
        if (!this.top) return undefined
        return this.top.data;
    }
}

const stack = new Stack<number>()
stack.push(5).push(6).push(7)
stack.peek()
console.log(stack.getSize())
