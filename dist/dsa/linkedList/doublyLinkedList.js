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
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.value;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return removedNode.value;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removedNode.value;
    }
    prepend(value) {
        if (this.length === 0) {
            return this.append(value);
        }
        const newNode = new Nodez(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}
