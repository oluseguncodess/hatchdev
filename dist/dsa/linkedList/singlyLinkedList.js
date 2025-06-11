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
}
