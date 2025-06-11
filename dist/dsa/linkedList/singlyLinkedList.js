"use strict";
class Lnode {
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
            const newNode = new Lnode(initialValue);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }
}
