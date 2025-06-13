"use strict";
class Nodez {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
class DoublyLinkedList {
    constructor(initialValue) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (initialValue !== undefined) {
            const newNode = new Nodez(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
    append(val) {
        const newNode = new Nodez(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
