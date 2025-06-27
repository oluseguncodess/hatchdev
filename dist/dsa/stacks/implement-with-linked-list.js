"use strict";
class NodeX {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    print() {
        if (!this.top)
            return undefined;
        let current = this.top;
        let result = '';
        while (current) {
            result += `${current.data} --> `;
            current = current.next;
        }
        return result.slice(0, -4);
    }
    isEmpty() {
        return !this.top;
    }
    getSize() {
        return this.size;
    }
    push(value) {
        const newNode = new NodeX(value);
        if (!this.top) {
            this.top = newNode;
        }
        else {
            const prevTop = this.top;
            this.top = newNode;
            newNode.next = prevTop;
        }
        this.size++;
        return this;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        let deletedTop = this.top;
        let nextTop = deletedTop.next;
        this.top = nextTop;
        deletedTop.next = null;
        this.size--;
        return deletedTop.data;
    }
    peek() {
        if (!this.top)
            return undefined;
        return this.top.data;
    }
}
const stack = new Stack();
stack.push(5).push(6).push(7);
stack.peek();
console.log(stack.getSize());
