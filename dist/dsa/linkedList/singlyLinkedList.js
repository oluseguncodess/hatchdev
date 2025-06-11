"use strict";
class LNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class SinglyLinkedList {
    constructor(initialValue) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (initialValue != undefined) {
            const newNode = new LNode(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
    push(value) {
        if (!this.head) {
            const newNode = new LNode(value);
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            const newNode = new LNode(value);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let poppedValue = this.tail.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.length--;
        return poppedValue;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        let removedHeadNodeValue = this.head.value;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
        }
        this.length--;
        return removedHeadNodeValue;
    }
}
