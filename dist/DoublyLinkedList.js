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
}
