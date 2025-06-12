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
    unshift(value) {
        let newNode = new LNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        ;
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current.value;
    }
    set(index, value) {
        if (index < 0 || index >= this.length)
            return undefined;
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        current.value = value;
        return this;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }
        const newNode = new LNode(value);
        let counter = 0;
        let current = this.head;
        while (counter < index - 1) {
            current = current.next;
            counter++;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
    }
}
